import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setCurrentPage } from "../redux/Cardslice";
import CardForm from "./CardForm";
import SearchBox from "./SearchBar";
import Pagination from "./Pagination";
import CardItem from "./CardItem";
import CustomSlider from "./CustomSlider";

const CardLibrary: React.FC = () => {
  const dispatch = useDispatch();
  const { cards, search, currentPage } = useSelector(
    (state: RootState) => state.cardLibrary
  );

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Grouping cards by collection name
  const groupedCollections: Record<string, typeof cards> = cards.reduce(
    (acc, card) => {
      if (!acc[card.collection]) {
        acc[card.collection] = [];
      }
      acc[card.collection].push(card);
      return acc;
    },
    {} as Record<string, typeof cards>
  );

  // Filtering collections based on search input
  const filteredCollections = Object.entries(groupedCollections).reduce(
    (acc, [collection, collectionCards]) => {
      const filteredCards = collectionCards.filter((card) =>
        card.title.toLowerCase().includes(search.toLowerCase())
      );

      if (filteredCards.length > 0) {
        acc[collection] = filteredCards;
      }

      return acc;
    },
    {} as Record<string, typeof cards>
  );

  const collectionNames = Object.keys(filteredCollections);
  const collectionsPerPage = 5;
  const totalPages = Math.ceil(collectionNames.length / collectionsPerPage);
  const startIndex = (currentPage - 1) * collectionsPerPage;
  const paginatedCollections = collectionNames.slice(
    startIndex,
    startIndex + collectionsPerPage
  );

  return (
    <div
      className={`min-h-screen p-6 transition-all ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-center text-4xl font-extrabold">
          📸 Stunning Image Gallery
        </h1>
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded-lg transition ${
            isDarkMode ? "bg-gray-700 text-white" : "bg-blue-500 text-white"
          }`}
        >
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>

      <SearchBox />
      <CardForm />

      {/* Display paginated collections */}
      {paginatedCollections.map((collection) => {
        const collectionImages = filteredCollections[collection] || [];

        return (
          <div key={collection} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{collection} Collection</h2>

            {collectionImages.length > 4 ? (
              <CustomSlider
                items={collectionImages.map((card) => ({
                  id: card.id, // Ensure 'id' is included
                  image: card.image,
                  title: card.title,
                  description: card.description,
                }))}
              />
            ) : (
              <div className="flex flex-wrap gap-6 ">
                {collectionImages.map((card) => (
                  <CardItem key={card.id} card={card} />
                ))}
              </div>
            )}
          </div>
        );
      })}

      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={(page) => dispatch(setCurrentPage(page))}
        />
      )}
    </div>
  );
};

export default CardLibrary;
