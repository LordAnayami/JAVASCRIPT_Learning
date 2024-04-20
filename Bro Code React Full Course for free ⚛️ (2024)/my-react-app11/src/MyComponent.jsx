import React, {useState} from "react"

function MyComponent(){
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(c => c + 1);// prev => prev + 1 = new state
        setCount(c => c + 1);
        setCount(c => c + 1);// actual value of count
    }
    
    const decrement = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    const reset = () => {
        setCount(0)
    }

    return(<div className="counter-countainer">
        <p className="count-display">{count}</p>
        <button className="counter-button" onClick={decrement}>Decrement</button>
        <button className="counter-button" onClick={reset}>Reset</button>
        <button className="counter-button" onClick={increment}>Increment</button>
    </div>)
}
export default MyComponent