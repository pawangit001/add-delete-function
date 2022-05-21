import React, { useState } from "react";
import TodoItem from "./ToDoItem";
import InputArea from "./InputArea";
function App() {
  const [item, setitem] = useState([]);

  function addItem(inputtext) {
    setitem((prevValue) => {
      return [...prevValue, inputtext];
    });
  }
  function deleteItem(id) {
    setitem((prevValue) => {
      return prevValue.filter((item, index) => {
        return index != id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {item.map((todoitem, index) => (
            <TodoItem
              key={index}
              id={index}
              text={todoitem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
