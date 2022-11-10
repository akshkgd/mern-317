function FirstComponent(){
    return(
        <div className="card">
        <h3 >This is my first component {Math.floor(Math.random()*10000)}</h3>
        <p>Here are some details of my component</p>
        </div>
    )
}
export default FirstComponent;