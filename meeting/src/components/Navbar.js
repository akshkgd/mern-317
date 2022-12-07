import {Link} from 'react-router-dom';
function Navbar(){
    return(
        <div className="navbar">
            <nav className="nav">
                <Link to='/' className='link logo'>CK Meetings</Link>
                <div>
                <Link to='/' className='link '>All Meetings</Link>
                <Link to='/' className='link '>My Meetings</Link>
                <Link to='/add-meetings' className='link logo'>Add Meetings</Link>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;