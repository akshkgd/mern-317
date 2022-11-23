import Hero from '../img/hero-bg.webp';
import {Link} from 'react-router-dom';
import './home.css'
function Home() {
    return (
        <div className="container">
            <div className='hero'>
                <img src={Hero} className="hero-img" />
                <div className='hero-content'>
                    <h1 className='hero-title'>Enter a new world <br /> of digital 
                    marketing!</h1>
                    
                    <Link to='/newsletter' className='hero-btn'>Know More</Link>
                </div>
            </div>

            <div className='service-container'>
                <h1>Here is the Link to the Book</h1>
                <p>Elated to have had the opportunity to work on the illustrations for @invisionapp Collaborate Better Handbook. The new book helps teams raise their collaborative intelligence working in distributed hybrid teams, drawing from interviews with some of the most creative, prolific, and multidisciplinary leaders, authors, and makers in the world. </p>
                <p>Wizard of Oz and the epic story of Dorothy’s journey, Finding travel companion to collaborate, navigating the magical universe of Oz, getting to get to Emerald city, became the underlying theme for the book. </p>
                <p>Its been a honour working with Eli and Aarron of Invision in developing the concepts, storyline and through the final execution of 7 illustrated chapters for the book. </p>
                <Link to='/newsletter'className='btn' >My Newsletter</Link>
            </div>
        </div>

        
    )
}
export default Home;