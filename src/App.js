import Logo from "./components/Logo";
import Form from "./components/Form";
import List from "./components/List";

import "./index.css";
import { useState } from "react";

function App() {
  const [listItems, setListItems] = useState([]);

  function handleAddItem(item) {
    setListItems((listItems) => [...listItems, item]);
  }

  function handleDeleteItem(id) {
    setListItems((listItems) => listItems.filter((item) => item.id !== id));
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <List items={listItems} onDeleteItem={handleDeleteItem} />
    </div>
  );
}

export default App;
