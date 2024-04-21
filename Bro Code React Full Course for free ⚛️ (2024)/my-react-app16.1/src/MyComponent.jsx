import React, { useState, useEffect } from "react";

function MyComponent() {
  
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");
  
  useEffect(() => {
    document.title = `Count: ${count} ${color}`

    return () => {
      ///cllean up code after closing component
    }

  },[count, color]);
 // useEffect(() => {
//    document.title = `Count: ${count}`
 // }, []); only when mounting component

  function addCount(){
    setCount(c => c + 1)
  }
  function subtractCount(){
    setCount(c => c - 1)
  }
  function changeColor(){
    setColor(c => c === "green" ? "red" : "green")
  }

  return (<>
      <p style={{color:color}}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
      <button onClick={changeColor}>Change Color</button>
  </>
   
  );
}

export default MyComponent;