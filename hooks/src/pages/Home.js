import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import UserDetail from '../components/UserDetail';
import Test from './Test';
function Home(){
    const [users, setusers] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState(true);
    useEffect(()=>{
        fetch('https://mern-317-default-rtdb.firebaseio.com/students.json').then(
        response=> response.json()).then(data=>{
            const tempUsers = [];
            for(const key in data){
                const user = {
                    id:key,
                    ...data[key]
                }
                tempUsers.push(user);
                setusers(tempUsers);
                setLoadingStatus(false);
            }
            console.log(users)
        })
    }, [])
    
    
        
    return(
        <div className="home-container">
           
            <h1>Codekaro Users</h1>
            <p>Here are the complete details of all the users!!</p>

            <div class={loadingStatus? 'loader' : 'd-none' }></div>
        <div>{
            
            users.map((user)=>{
                return <UserDetail name={user.name} email={user.email} />
            })
        }</div>
        <Link to="/home/test" element={<Test/>}>test link </Link>
        </div>
    )
}
export default Home;