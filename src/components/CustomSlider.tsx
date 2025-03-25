import React, { useRef, useState, useEffect } from "react";
import CardItem from "./CardItem";

interface SliderProps {
  items: { image: string; title: string; description: string }[];
}

const CustomSlider: React.FC<SliderProps> = ({ items }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const cardWidth = 250;

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
      sliderRef.current.scrollTo({
        left: newIndex * cardWidth * visibleCount,
        behavior: "smooth",
      });
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="relative w-screen px-4">
   
      <div
        ref={sliderRef}
        className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth w-full"
        style={{ scrollSnapType: "x mandatory", whiteSpace: "nowrap" }}
      >
        <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>

        {items.map((item, index) => (
          <CardItem key={index} card={item} />
        ))}
      </div>

 
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
