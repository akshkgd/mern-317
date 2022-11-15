import styles from './foodItem.module.css'
function FoodItem(props){
    function foodOrderHandler(){
        console.log('Your order for ', props.name, ' is succesful');
        if(props.price >199){
            console.log('Total amount due: ', props.price)
        }
        else{
            console.log('Delivery Charge 40 Rs applicable!')
            console.log('Total amount due: ', props.price + 40)
            
        }
    }
    return(
        <div className={styles.foodCard} onClick={foodOrderHandler}>
            <div className={styles.foodCardHeader}>
                <img src={props.img} className={styles.foodCardImg}/>
                <p className={props.ratings >= 4.4 ? 'mustTry' : 'dNone'}>Must Try</p>
            </div>
            <h3>{props.name}</h3>
            
            <h4>Rs {props.price} </h4>
            
            <p>A tikki delight: Potato and peas patty topped with veg sauce, ketchup, tomatoes and onions with toasted buns</p>
        </div>
    )
}

export default FoodItem;