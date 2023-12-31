import { useEffect, useState, useMemo } from 'react';
import data from "./data.json"
import Cards from './Cards';

const sorted = (type) => (a, b) => {
  if (type === "rating") return +a.rating - +b.rating;
  if (type === "alphabetically") return a.name.localeCompare(b.name);
};

function App() {
  const [info, setInfo] = useState(null);
  const [typeFilter, setTypeFilter] = useState("");

  useEffect(() => {
    Promise.resolve(data)
      .then(data => {
        setInfo(data);
      })
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e) => {
    const type = e.target.value;

    setTypeFilter(type);
  }

  const infoSorted = useMemo(() =>
    info?.data.sort(sorted(typeFilter)),
    [typeFilter, info]
  );

  if (!info) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <section className='w-full flex justify-center items-center pt-7 gap-2'>
        <label htmlFor="rating">Sort by: </label>
        <select className='bg-blue-200 p-1 cursor-pointer rounded' id="rating" onChange={handleChange}>
          <option value="all">ALL</option>
          <option value="rating">Rating</option>
          <option value="alphabetically">Alphabetically</option>
        </select>
      </section>

      <section className="container p-4 flex flex-wrap">
        {infoSorted.map((info) => (
          <Cards key={info.id} id={info.id} name={info.name} rating={info.rating} contact={info.contact} address={info.address} />
        ))}
      </section>

    </>
  );
}

export default App;
