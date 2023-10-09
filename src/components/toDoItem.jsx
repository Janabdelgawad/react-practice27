import React, { useState } from "react";

function ToDoItem(props) {
  const [itemStyle, setItemStyle] = useState(false);

  function handleClick() {
    // const itemValue = event.target.value;
    // if(itemValue.textDecoration="linethrough"){
    //   return setItemStyle(itemValue.textDecoration="none");
    // } else {
    //   return setItemStyle(itemValue.textDecoration="line-through");
    // }
    setItemStyle((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: itemStyle ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
