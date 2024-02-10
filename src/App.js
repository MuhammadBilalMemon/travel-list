import { useState } from "react";
import { Logo } from "./Components/Logo";
import { Form } from "./Components/Form";
import { PackingList } from "./Components/PackingList";
import { States } from "./Components/States";

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

  function handleClearList() {
    const confirmed = window.confirm("Are you sure you want to delete all items?");

    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearList={handleClearList} />
      <States items={items} />
    </div>
  )
}

