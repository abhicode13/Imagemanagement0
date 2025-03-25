import React, { useRef, useState, useEffect } from "react";
import CardItem from "./CardItem";

interface SliderProps {
  items: { id: string; image: string; title: string; description: string }[];
}

const CustomSlider: React.FC<SliderProps> = ({ items }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const cardWidth = 250; // Fixed card width for calculation

  useEffect(() => {
    const updateVisibleCount = () => {
      if (sliderRef.current) {
        const containerWidth = sliderRef.current.clientWidth;
        setVisibleCount(Math.floor(containerWidth / cardWidth) || 1);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const totalPages = Math.max(1, Math.ceil(items.length / visibleCount));

  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      const newIndex = Math.max(0, Math.min(index, totalPages - 1));
      const newScrollLeft = newIndex * cardWidth * visibleCount;
      
      sliderRef.current.scrollLeft = newScrollLeft; // Direct scroll update for better performance
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="relative w-full px-4">
      <div
        ref={sliderRef}
        className="flex gap-4 scrollbar-hide scroll-smooth w-full overflow-hidden" // Remove overflow-x-auto to prevent scrollbar
        style={{ scrollSnapType: "x mandatory", whiteSpace: "nowrap" }}
      >
        <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>

        {items.map((item) => (
          <CardItem key={item.id} card={item} />
        ))}
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              currentIndex === index ? "bg-blue-500 scale-110" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
