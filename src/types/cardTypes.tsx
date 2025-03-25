export interface Card {
    id: string;
    title: string;
    description: string;
    image: string;
    collection: string;
  }
  
  export interface CardState {
    cards: Card[];
    search: string;
    currentPage: number;
    selectedCollection: string;
    collections: string[];
  }
  