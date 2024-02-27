import { useState } from "react";

export default function ListItems({
  items,
  onDeleteItem,
  onToggleItem,
  clearItems,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <>
            <li>
              <input
                type="checkbox"
                value={item.packed}
                onChange={() => onToggleItem(item.id)}
              />
              <span
                style={item.packed ? { textDecoration: "line-through" } : {}}
              >
                {item.quantity} {item.description}
              </span>
              <button onClick={() => onDeleteItem(item.id)}>❌</button>
            </li>
          </>
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by pocked</option>
        </select>
        {items.length > 0 ? (
          <button onClick={clearItems}>Clear the list</button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
