import React from "react";
import { useDispatch } from "react-redux";
import { removeCard } from "../redux/Cardslice";

interface CardProps {
  card: {
    title: string;
    description: string;
    image: string;
  };
}

const CardItem: React.FC<CardProps> = ({ card }) => {
  const dispatch = useDispatch();
  const handleRemoveCard = () => dispatch(removeCard(card.title));

  return (
    <div className="w-[250px] h-[350px] flex-shrink-0 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105">
      <img className="w-full h-[200px] object-cover rounded-t-2xl" src={card.image} alt={card.title} />
      <div className="p-4 flex-grow flex flex-col justify-between">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white text-center">{card.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm text-center mt-2">{card.description}</p>
      </div>
      <button
        onClick={handleRemoveCard}
        className="mt-2 px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition w-full text-sm sm:text-base"
      >
        Remove
      </button>
    </div>
  );
};

export default CardItem;