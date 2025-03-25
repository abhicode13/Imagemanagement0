📌 Image Management
🚀 Project Setup
Follow these steps to install and run the project locally:

Clone the Repository:


git clone https://github.com/abhicode13/Imagemanagement.git
cd Imagemanagement


Install Dependencies:
npm install



Run the Development Server:

npm start
The application should now be running on http://localhost:3000/.




📁 Project Structure
plaintext
Copy
Edit
src/
│── components/        # Reusable UI components
│   ├── CardForm.tsx       # Form for adding/editing cards
│   ├── CardItem.tsx       # Displays an individual card
│   ├── CardLibrary.tsx    # Manages and displays the collection of cards
│   ├── CustomSlider.tsx   # Image slider component
│   ├── Pagination.tsx     # Pagination component for navigation
│   ├── SearchBar.tsx      # Search bar for filtering images
│
│── redux/             # Redux state management
│── assets/            # Static assets (images, icons, etc.)
│── App.tsx            # Main application entry point
│── index.tsx          # Renders the root component
│── styles/            # Global styles and theme configurations
│── public/            # Static files (HTML, favicon, etc.)
│── package.json       # Dependencies and scripts
│── README.md          # Project documentation






🌟 Features & Functionality
📌 Image Upload & Management: Users can add, and delete image cards.

🔍 Search Functionality: Quickly search for images by title .

📚 Card Library: Displays images in a structured format with pagination.

🎞️ Custom Image Slider: Browse through images in a smooth carousel.

🌙 Dark Mode Functionality

🔄 State Management with Redux: Efficient data handling and UI updates.

