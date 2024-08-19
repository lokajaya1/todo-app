function Item({ item, onDeleteItem }) {
  return (
    <div className="list">
      <li>
        {item.text}
        <span>{item.title}</span>
        <button onClick={() => onDeleteItem(item.id)}>Delete</button>
      </li>
    </div>
  );
}

export default Item;
