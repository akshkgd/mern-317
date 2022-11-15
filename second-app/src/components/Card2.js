import styles from './card2.module.css'

function Card2(){
    return(
        <div className="card">
            <h1>This is second card</h1>
            <p>CSS Modules let you use the same CSS class name in different files without worrying about naming clashes. Learn more about CSS Modules here.</p>
            <button className={styles.btn}>Know More</button>
        </div>
    )
}
export default Card2;