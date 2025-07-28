import React, { createContext, useContext, useState } from 'react';

const SavedItemsContext = createContext();

export function useSavedItems() {
  return useContext(SavedItemsContext);
}

export function SavedItemsProvider({ children }) {
  const [savedItems, setSavedItems] = useState([]);

  const addToSaved = (product) => {
    setSavedItems((prev) =>
      prev.find((item) => item.id === product.id) ? prev : [...prev, product]
    );
  };

  const removeFromSaved = (id) => {
    setSavedItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <SavedItemsContext.Provider value={{ savedItems, addToSaved, removeFromSaved }}>
      {children}
    </SavedItemsContext.Provider>
  );
}