import './App.css';
import FirstComponent from './components/FirstComponent';
import FoodItem from './components/FoodItem';
let foodItems = [
  {name: 'Veg Supreme Burger', price: 99, ratings: 4.4, img:'https://source.unsplash.com/1600x700/?burger'},
  {name: 'Veg Supreme Pizza', price: 299, ratings: 4.3, img:'https://source.unsplash.com/1600x700/?pizza'},
  {name: 'Masala Dosa', price: 149, ratings: 4.6, img:'https://source.unsplash.com/1600x700/?dosa'},
  {name: 'Green Salad', price: 149, ratings: 4.4, img:'https://source.unsplash.com/1600x700/?salad'},
  {name: 'French Fries', price: 99, ratings: 4.3, img:'https://source.unsplash.com/1600x700/?fries'},
  {name: 'Red Sauce Pasta', price: 199, ratings: 4.3, img:'https://source.unsplash.com/1600x700/?pasta'}
]
function App() {
  return (
    <div>
      <div className="App">
        <h1>Welcome to the react masterclass</h1>
        </div>
      <div className='container'>
        {
          
          foodItems.map((item)=>{
            return(
              <FoodItem name={item.name} price={item.price} img={item.img} ratings={item.ratings}/>
            )
          })
        }
       

      </div>
    </div>
  );
}

export default App;
