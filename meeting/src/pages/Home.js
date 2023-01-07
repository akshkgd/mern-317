import {useEffect, useState} from 'react';
import MeetingCard from '../components/MeetingCard';
function Home(){
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
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
                meetings.sort((a,b)=>{
                    let dateA = new Date(a.date);
                    let dateB = new Date(b.date);
                    // compare and sort the dates
                    if(dateA < dateB)
                        return -1;
                    else if (dateA > dateB)
                        return 1;
                    else
                        return 0;
                }).filter((meeting)=>{
                    let today = new Date();
                    return (new Date(meeting.date)> today);
                }).map((meeting)=>{
                    let date = new Date(meeting.date);
                    let fDate = date.toLocaleDateString('en', options)
                    let fTime = date.toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" });
                    let fMeetingTime = fTime + " " + fDate
                    console.log('date: ', date)
                    return <MeetingCard title={meeting.title} date={fMeetingTime} desc={meeting.desc} img={meeting.img} />
                })
            }
        </div>
        </div>
    )
}
export default Home;