import PropTypes from "prop-types";

const Cards = ({ id, name, rating, contact, address }) => {
    return (
        <article key={id} className='w-[min(20rem,_85%)] border-2 border-red rounded-md shadow-md p-4 my-4 mx-auto flex flex-col'>
            <h2 className="text-2xl font-semibold mb-2 text-blue-500 text-center">{name}</h2>
            <p className='text-xl mb-4 self-center'>Rating: {rating}</p>
            <ul className="mt-3 text-left">
                <li className='text-xl'><span className='text-blue-500'>Site:</span> <p> {contact.site}</p></li>
                <li className='text-xl'><span className='text-blue-500'>Email:</span> <p className="break-words">{contact.email}</p></li>
                <li className='text-xl'><span className='text-blue-500'>Phone:</span> <p>{contact.phone}</p></li>
                <li className='text-xl'><span className='text-blue-500'>Street:</span> <p>{address.street}</p></li>
                <li className='text-xl'><span className='text-blue-500'>City:</span><p> {address.city}</p></li>
                <li className='text-xl'><span className='text-blue-500'>State:</span> <p>{address.state}</p></li>
                <li className='text-xl'><span className='text-blue-500'>Latitude:</span> <p>{address.location.lat}</p></li>
                <li className='text-xl'><span className='text-blue-500'>Longitude:</span> <p>{address.location.lng}</p></li>
            </ul>
        </article>
    );
}

export default Cards;

Cards.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.number,
    contact: PropTypes.object,
    address: PropTypes.object
}