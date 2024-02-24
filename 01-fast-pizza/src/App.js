import "./App.css";
import React from "react";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: require("./pizzas/focaccia.jpg"),
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: require("./pizzas/margherita.jpg"),
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: require("./pizzas/spinaci.jpg"),
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: require("./pizzas/funghi.jpg"),
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: require("./pizzas/salamino.jpg"),
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: require("./pizzas/prosciutto.jpg"),
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>Fast React Pizza Co.</h1>;
    </div>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>OUR MENU</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizza={pizza} />
        ))}
      </ul>
    </main>
  );
}

function Pizza({ pizza }) {
  return (
    <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <p>Price: ${pizza.price}</p>
        <span>{pizza.soldOut ? "Sold Out" : "Available"}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <>
          <p>
            We're happy to welcome you between {openHour}:00 and {closeHour}:00.
          </p>
          <Order closeHour={closeHour} openHour={openHour} />
        </>
      ) : (
        <>
          <p>
            We're open until {openHour}:00 and {closeHour}:00.
          </p>
        </>
      )}
    </footer>
  );

  // return React.createElement("footer", null, "We're currently open!");
}

function Order(closeHour, openHour) {
  return <button className="btn">Order now</button>;
}

export default App;
