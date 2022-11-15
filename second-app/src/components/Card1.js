import styles from './card1.module.css'
function Card1(){
    return(
        <div className="card">
            <h1>This is second card</h1>
            <p>CSS Modules let you use the same CSS class name in different files without worrying about naming clashes. Learn more about CSS Modules here.</p>
            <button className={styles.btn}>Know More</button>
        </div>
    )
}
export default Card1;