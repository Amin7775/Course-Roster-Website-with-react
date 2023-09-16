import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";

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
    <div className="w-2/3">
        <h1>Cards</h1>
        <div className="grid grid-cols-3 gap-4">
        {
            cards.map((card,idx) => <Card key={idx} card={card}></Card>)
        }

        </div>
    </div>
    </>
  )
};

export default Cards;
