import "./newsletter.css"
function Newsletter(){
    return(
        <div className="container">
            <div className="newsletter-contianer">
            <h1>Join the digital marketing newsletter!</h1>
            <p>join this amazing newsletter so you do not miss any updates!</p>

            <input type='text' placeholder='Enter Your Name'></input>
            <input type='text' placeholder='Enter Your Email ID'></input>
            <button className="newsletter-btn">Join Now</button>
            </div>
        </div>
    )
}
export default Newsletter;