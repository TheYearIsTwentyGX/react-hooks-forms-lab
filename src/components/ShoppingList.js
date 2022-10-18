import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [allItems, setAllItems] = useState(items);
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch(event) {
    console.log(search);
    setSearch(event.target.value);
  }

  const itemsToDisplay = allItems.filter((item) => {
    if (search !== "") {
      return item.name.toLowerCase().includes(search.toLowerCase());
    }
    if (selectedCategory === "All") 
      return true;

    return item.category === selectedCategory;
  });

  function handleNewItem(newItem) {
    setAllItems([...allItems, newItem]);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleNewItem} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch} value={search} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
