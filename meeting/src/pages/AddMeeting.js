import userEvent from '@testing-library/user-event';
import {useState, useRef, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
function AddMeeting(){
    const [submitStatus, setSubmitStatus] = useState(false);
    const titleInput = useRef();
    const imgInput = useRef();
    const dateInput = useRef();
    const descInput = useRef();
    const navigate = useNavigate();
    function addMeetingHandler(){
        setSubmitStatus(true);
        const titleData = titleInput.current.value;
        const imgData = imgInput.current.value;
        const dateData = dateInput.current.value;
        const descData = descInput.current.value;

        if(titleData != '' && imgData != '' && dateData != '' && descData != ''){
            const tempMeeting = {
                title: titleData,
                img: imgData,
                date: dateData,
                desc: descData,
            }
    
            fetch('https://mern-317-default-rtdb.firebaseio.com/meetings.json', {
                method: 'post', 
                body: JSON.stringify(tempMeeting)
            }).then(()=>{
                setSubmitStatus(false)
                navigate('/');
            })
        }
        else{
            console.log('Fill all the fields');
            setSubmitStatus(false);
            
        }
        


    }
     return(
        <div className="add-meetings-container">
            <h1>Add new Meeting</h1>
            <p>Add a new meeting inside the codekaro team!!</p>
            <input placeholder="Enter the title" ref={titleInput} />
            <input placeholder="Enter the image tag" ref={imgInput} />
            <input placeholder="Enter the data and time" ref={dateInput}  type='datetime-local'/>
            <textarea rows='3' col='3' placeholder="Enter the desc" ref={descInput}  />
            <button className="btn" onClick={addMeetingHandler}>Create Meeting <div className={submitStatus? "loader" : "d-none"} > </div> </button>

            <p className="small">By creating a new meeting you agree to the terms and conditions of Codekaro.</p>
        </div>
    )
}
export default AddMeeting;