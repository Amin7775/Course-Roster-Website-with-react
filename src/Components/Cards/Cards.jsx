import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types';

const Cards = ({handleAddToCart}) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);


  return (
    <>
    <div className="mb-10">
        <div className="grid grid-cols-3 gap-4">
        {
            cards.map((card,idx) => <Card key={idx} card={card} handleAddToCart={handleAddToCart}></Card>)
        }

        </div>
    </div>
    </>
  )
};

Cards.propTypes = {
    
    handleAddToCart:PropTypes.func
}

export default Cards;
