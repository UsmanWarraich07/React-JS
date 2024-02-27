export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  } else {
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);
    return (
      <div className="stats">
        {percentage === 100
          ? "You got everything! Ready to go ✈"
          : `💼 you have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)
`}
      </div>
    );
  }
}
