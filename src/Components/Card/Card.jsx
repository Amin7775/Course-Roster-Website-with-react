import { FiDollarSign } from "react-icons/fi";
import { BsBook } from "react-icons/bs";
import PropTypes from 'prop-types';

const Card = ({ card,handleAddToCart }) => {
//   console.log(card);
  const { course_name, image, details, price, credit } = card;
  return (
    <div>
      <div className="border-2 bg-white w-full p-4 m-1 rounded-lg">
        <img className="rounded-lg w-full h-44 mb-4" src={image} alt="" />
        <h2 className="text-lg font-semibold mb-3">{course_name}</h2>
        <p className="text-sm text-[#1C1B1B99] mb-4">{details}</p>
        <div className="flex gap-10 mb-6">
          <div className="flex items-center gap-2">
            <FiDollarSign className="text-lg"></FiDollarSign>
            <p className="text-base font-medium text-[#1C1B1B99]">Price : {price}</p>
          </div>
          <div className="flex items-center gap-3">
            <BsBook  className="text-lg"></BsBook>
            <p className="text-base font-medium text-[#1C1B1B99]">Credit : {credit}hr</p>
          </div>
        </div>
        <button onClick={()=> handleAddToCart(card)} className="btn bg-[#2F80ED] text-white text-center w-full py-2 rounded-lg">Select</button>
      </div>
    </div>
  );
};

Card.propTypes = {
    
    card:PropTypes.object,
    handleAddToCart:PropTypes.func
}

export default Card;
