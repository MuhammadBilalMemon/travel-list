import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

export default function App() {

  const [items, setItems] = useState([]);


  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(itemId) {
    setItems((items) => items.filter(i => i.id !== itemId));
  }

  function handleToggleItem(itemId) {
    setItems((items) => items.map(i => i.id === itemId ? { ...i, packed: !i.packed } : i));
  }


  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} />
      <States />
    </div>
  )


}

function Logo() {
  return <h1> 🌴Far Away 🛍️</h1>
}

function Form({ onAddItems }) {

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);




  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description, quantity, packed: false, id: Date.now()
    }
    console.log(newItem);

    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(
          (num) => (
            <option value={num} key={num}>{num}</option>
          )
        )}
      </select>
      <input type="text" placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)} />
      <button>Add</button>
    </form >
  );
}

function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul >
        {items.map((item) => (<Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />))}
      </ul>
    </div>
  )
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.description}</span>
      <button onClick={() => onDeleteItem(item.id)} >❌</button>
    </li >
  )
}

function States() {
  return (
    <footer className="stats">
      <em>🛍️ You have X items on your list, and you have already Packed X (X%)</em>
    </footer>

  )
}