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

📌 Image Slider
How It Works:

If a collection contains more than 4 images, a horizontal slider (carousel) is used instead of a grid layout.

The slider automatically calculates how many images can fit on the screen and adjusts dynamically on window resize.

Users can navigate the slider using dot indicators below the images.




📖 Pagination
How It Works:
Pagination is applied only if there are more than 5 collections.

Each page displays exactly 5 collections at a time.

Users can navigate between pages using numbered page buttons (1, 2, 3, 4...) instead of "Next" and "Previous" buttons.

The currently selected page is highlighted to indicate the active page.





How It Works:
The application supports both Dark Mode and Light Mode for a better user experience.

Users can toggle between these themes using a switch button in the UI.

The selected theme is applied instantly across the entire application.

Theme Switching Logic:
A state variable (isDarkMode) is used to track the current theme.

Clicking the toggle button updates the isDarkMode state.