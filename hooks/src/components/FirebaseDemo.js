import userEvent from '@testing-library/user-event';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
function FirebaseDemo() {
    const [submitDataStatus, setSubmitDataStatus] = useState(false);
    const [users, setusers] = useState([]);
    const navigate = useNavigate();
    const nameInput = useRef(null);
    const emailInput = useRef(null);
    const [submitStatus, setSubmitStatus] = useState(null);
    function submitStatusHandler() {
        setSubmitStatus(null);

    }
    function submitHandler() {

        setSubmitDataStatus(true);
        const nameData = nameInput.current.value;
        const emailData = emailInput.current.value;
        let students = {
            name: nameData,
            email: emailData,
        }
        
        // checking if email exist
        fetch('https://mern-317-default-rtdb.firebaseio.com/students.json').then(
            response => response.json()).then(data => {
                const tempUsers = [];
                for (const key in data) {
                    const user = {
                        id: key,
                        ...data[key]
                    }
                    tempUsers.push(user);
                    let emailExist = tempUsers.filter((user) => {
                        return user.email == emailData;
                    })
                    console.log("array: ",tempUsers)
                    
                    if (emailExist.length == 0){
                        fetch('https://mern-317-default-rtdb.firebaseio.com/students.json', {
                            method: 'post',
                            body: JSON.stringify(students)
                        }).then(() => {
                            navigate('/');
                        })
                    }
                    else{
                        setSubmitStatus('email already exist!');
                        setSubmitDataStatus(false);
                    }
                        

                }

            })

        //storing the data
        // fetch('https://mern-317-default-rtdb.firebaseio.com/students.json', {
        //                     method: 'post',
        //                     body: JSON.stringify(students)
        //                 }).then(() => {
        //                     navigate('/');
        //                 })
    }

    return (
        <div>
            <h1>Add new user details to firebase</h1>
            <p>This is an demo component for connecting your react project to a realtime database (firebase). </p>
            <input placeholder="Enter Student Name" onFocus={submitStatusHandler} ref={nameInput} />
            <input placeholder="Enter Student Email" onFocus={submitStatusHandler} ref={emailInput} />

            <button className="btn" onClick={submitHandler} >Submit to Firebase <div className={submitDataStatus ? "btn-loader" : "d-none"}></div>  </button>
            <p>{submitStatus}</p>
        </div>
    )
}
export default FirebaseDemo;