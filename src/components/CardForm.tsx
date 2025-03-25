import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../redux/Cardslice";

const CardForm: React.FC = () => {
  const dispatch = useDispatch();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    collection: "",
    image: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) setFormData((prev) => ({ ...prev, image: file }));
  };

  const handleAddCard = () => {
    const { title, description, collection, image } = formData;
    if (!title || !description || !collection.trim() || !image) {
      alert("Please enter all fields!");
      return;
    }

    dispatch(addCard({ ...formData, image: URL.createObjectURL(image) }));
    setFormData({ title: "", description: "", collection: "", image: null });
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="flex flex-wrap gap-4 mb-6 justify-center">
      {[
        { name: "title", placeholder: "Title" },
        { name: "description", placeholder: "Description" },
        { name: "collection", placeholder: "Collection" },
      ].map(({ name, placeholder }) => (
        <input
          key={name}
          type="text"
          name={name}
          placeholder={placeholder}
          value={formData[name as keyof typeof formData] as string}
          onChange={handleInputChange}
          className="px-4 py-2 border rounded-lg w-full md:w-1/4 bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
        />
      ))}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        className="px-4 py-2 border rounded-lg w-full md:w-1/4 bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
      />
      <button
        onClick={handleAddCard}
        className="px-4 py-2 bg-green-500 text-white rounded-lg w-full md:w-1/4 hover:bg-green-600 transition duration-200"
      >
        Add Image
      </button>
    </div>
  );
};

export default CardForm;