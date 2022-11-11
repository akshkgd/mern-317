function FoodItem(props){
    return(
        <div className="food-card">
            <div className="food-card-header">
                <img src={props.img} className="food-card-img"/>
                <p className={props.ratings >= 4.4 ? 'must-try' : 'd-none'}>Must Try</p>
            </div>
            <h3>{props.name}</h3>
            
            <h4>Rs {props.price} </h4>
            
            <p>A tikki delight: Potato and peas patty topped with veg sauce, ketchup, tomatoes and onions with toasted buns</p>
        </div>
    )
}

export default FoodItem;