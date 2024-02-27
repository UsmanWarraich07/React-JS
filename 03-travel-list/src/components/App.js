import { useState } from "react";
import Form from "./Form";
import ListItems from "./ListItems";
import Stats from "./Stats";
function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearListItems() {
    const confirmed = window.confirm("Are you confirmed to delete all items!");
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <h1>🌴 FOR AWAY 💼</h1>
      <Form onAddItems={handleAddItems} />
      <ListItems
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        clearItems={clearListItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
