import React from 'react';
import { useSavedItems } from '../context/SavedItemsContext';

function SavedPage() {
  const { savedItems, removeFromSaved } = useSavedItems();

  return (
    <div className="saved-page">
      <h1 className="saved-title">💾 Saved Items</h1>
      {savedItems.length === 0 ? (
        <p className="empty-saved">No items saved yet. Save products for later from the Home page!</p>
      ) : (
        <div className="saved-list">
          {savedItems.map((item) => (
            <div className="saved-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="saved-info">
                <h3>{item.name}</h3>
                <p className="price">₹{item.price}</p>
                <button onClick={() => removeFromSaved(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SavedPage;