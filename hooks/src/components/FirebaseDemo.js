import {useRef, useState} from 'react';
function FirebaseDemo(){
    const nameInput = useRef(null);
    const [submitStatus, setSubmitStatus] = useState(null);
    function submitStatusHandler(){
        setSubmitStatus(null);

    }
    function submitHandler(){
        const data = nameInput.current.value;
        let students = {
            name: data,
        }
        console.log(data);
        fetch('https://mern-317-default-rtdb.firebaseio.com/students.json', {
            method: 'post',
            body: JSON.stringify(students)
        }).then(()=>{
            setSubmitStatus('Student Added Successfully!')
        })
    }
    
    return(
        <div>
            <h1>Connect your react application to firebase</h1>
            <p>This is an demo component for connecting your react project to a realtime database (firebase). </p>
            <input placeholder="Enter Student Name" onFocus={submitStatusHandler} ref={nameInput} />
            <button className="btn" onClick={submitHandler} >Submit to Firebase</button>
            <p>{submitStatus}</p>
        </div>
    )
}
export default FirebaseDemo;