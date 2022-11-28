import {useRef, useState} from 'react';
function useRefDemo(){
    const dataInput = useRef(null);
    const [userInput, setUserInput] = useState(null);
    function submitHandler(){
        
        const data = dataInput.current.value;
        setUserInput(data);
        console.log(data);
    }
    return(
        <div>
            <h1>UseRef Hook example</h1>
            <p>This is an demo component for useRef. </p>
            <input placeholder="Enter something here..." ref={dataInput} />
            <button className="btn" onClick={submitHandler} >Submit Data</button>
            <p>{userInput}</p>
        </div>
    )
}
export default useRefDemo;