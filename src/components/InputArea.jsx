import React, { useState } from "react";

function InputArea(props) {
  const [inputtext, settext] = useState("");
  function handleChage(event) {
    const inputValue = event.target.value;
    settext(inputValue);
  }

  return (
    <div className="form">
      <input onChange={handleChage} type="text" value={inputtext} />
      <button
        onClick={() => {
          props.onAdd(inputtext);
          settext("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}
export default InputArea;
