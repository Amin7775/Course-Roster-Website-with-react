import { useState } from "react";
import { useEffect } from "react";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  console.log(cards);
  return (
    <>
    
    </>
  )
};

export default Cards;
