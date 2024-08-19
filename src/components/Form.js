import { useState } from "react";

function Form({ onAddItem }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddItem({ id: Date.now(), text: inputValue.trim() }); // Generate unique id
      setInputValue("");
    }
  }

  return (
    <div className="add-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a Note"
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default Form;
