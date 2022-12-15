import {useEffect, useState} from 'react';
import MeetingCard from '../components/MeetingCard';
function Home(){
    const [loadingStatus, setLoadingStatus] = useState(true);
    const [meetings, setMeetings] = useState([]);
    useEffect(()=>{
        fetch('https://mern-317-default-rtdb.firebaseio.com/meetings.json').then(
        response => response.json()).then(data=>{
                
                const tempMeetings = [];
                for(const key in data){
                    const meeting = {
                        id: key,
                        ...data[key]
                    }
                    tempMeetings.push(meeting)
                    setMeetings(tempMeetings);
                    setLoadingStatus(false)
                }
            }
        )
    }, [])
    
    return(
        <div className=''>
           <div className={loadingStatus ? "main-loader" : "d-none"}></div> 
        <div className="meeting-container">
        
            {
                meetings.map((meeting)=>{
                    return <MeetingCard title={meeting.title} date={meeting.date} desc={meeting.desc} img={meeting.img} />
                })
            }
        </div>
        </div>
    )
}
export default Home;