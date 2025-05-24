import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className = "container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
    return (
        <header>
            <h1  className = "header">Fast React Pizza Co.</h1>;
        </header>
    );
}

function Menu() {

  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      <p>Authentic Italian</p>

      {numPizzas > 0 ? (
        <>
          <p>Authentic Italian</p>
          <ul className="pizzas">
              {pizzaData.map((pizza) => (
              <Pizza pizzaObj = {pizza} key = {pizza.name}/>
            ))}
          </ul>
        </> 
      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}
      

    </main>
  );
}

// Components must have capital letter
function Pizza({pizzaObj}) {

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h2>{pizzaObj.name}</h2>
        <p>{pizzaObj.ingredients}</p>
        <span> {pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + 3}</span>
      </div>
    </li>
  );
}

function Footer() {
  // Power of integrating JS with HTML
  // Can put js anywhere since component is a js function

  const hour = new Date().getHours();
  const openHour = 12;
  const closedHour = 22;
  const isOpen = hour >= openHour && hour <= closedHour

  if (!isOpen)  
    return (
      <p>
        We're happy to welcome you between {openHour}:00 and {closedHour}:00
      </p>
  );

  return (
    <footer className="footer">
        {isOpen ? (
          <Order closedHour={closedHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closedHour}:00
        </p>
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div className= "order">
      <p> We're open until {props.closedHour}:00. Come visit us or order online</p>
      <button className="btn">Order</button>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
