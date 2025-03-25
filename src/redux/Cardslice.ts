
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Card {
  title: string;
  description: string;
  image: string;
  collection: string;
}

interface CardLibraryState {
  cards: Card[];
  search: string;
  currentPage: number;
  selectedCollection: string;
}

const initialState: CardLibraryState = {
  cards: [],
  search: "",
  currentPage: 1,
  selectedCollection: "All",
};

const cardLibrarySlice = createSlice({
  name: 'cardLibrary',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Card>) => {
      state.cards.push(action.payload);
    },
    removeCard: (state, action: PayloadAction<string>) => {
      state.cards = state.cards.filter(card => card.title !== action.payload);
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setSelectedCollection: (state, action: PayloadAction<string>) => {
      state.selectedCollection = action.payload;
    }
  }
});

export const { addCard, removeCard, setSearch, setCurrentPage, setSelectedCollection } = cardLibrarySlice.actions;
export default cardLibrarySlice.reducer;
