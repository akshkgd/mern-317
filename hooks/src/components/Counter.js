import React, {useState} from "react";
function Counter(){
    const [counter, setCounter] = useState(0)
    function incrementHandler(){
        setCounter(counter +1)
    }
    function decrementHandler(){
        if(counter> 0)
            setCounter(counter -1)
        else
        setCounter('Value cannot be negative')
    }
    function resetHandler(){
        setCounter(0)
    }
    return(
        <div className="contianer">
            <h1>React js Counter Application</h1>
            <h1 className="title">{counter}</h1>
            <button className="btn" onClick={incrementHandler}>Increment</button>
            <button className="btn" onClick={decrementHandler}>Decrement</button>
            <button className="btn" onClick={resetHandler}>Reset</button>
        </div>
    )
}
export default Counter;