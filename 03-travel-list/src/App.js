import { useState } from "react";
function App() {
  const [items, setItems] = useState([]);

  // const initialItems = [
  //   { id: 1, description: "Passports", quantity: 2, packed: false },
  //   { id: 2, description: "Socks", quantity: 12, packed: false },
  // ];

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  return (
    <div className="app">
      <h1>🌴 FOR AWAY 💼</h1>
      <Form onAddItems={handleAddItems} />
      <ListItems items={items} />
      <Stats />
    </div>
  );

  function Form({ onAddItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
      if (!description) return;
      e.preventDefault();
      const additems = { quantity, description, id: Date.now(), packed: false };
      onAddItems(additems);

      setDescription("");
      setQuantity(1);
    }

    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip?</h3>
        <select onChange={(e) => setQuantity(Number(e.target.value))}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="item..."
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    );
  }

  function ListItems({ items }) {
    return (
      <div className="list">
        <ul>
          {items.map((item) => (
            <>
              <li>
                {item.quantity} {item.description}
              </li>
            </>
          ))}
        </ul>
      </div>
    );
  }

  function Stats() {
    return (
      <div className="stats">
        💼 you have x items on your list, and you already packed x (x%)
      </div>
    );
  }
}

export default App;
