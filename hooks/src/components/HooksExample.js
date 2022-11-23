import React,{useState} from "react";

function HooksExample(){
    const [counter, setCounter] = useState(0);
    function incrementHandler(){
        let random = Math.floor(Math.random()*1000);
        setCounter(random);
        console.log(counter)
    }
    return(
        <div>
            <div className="container">
                <h1>React Basic Counter</h1>
                <h2>{counter}</h2>
                <button className="btn" onClick={incrementHandler}>Increment</button>
            </div>
        </div>
    )
}
export default HooksExample;