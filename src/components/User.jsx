import styles from '../App.module.css'

export default function User() {
    return (
      <div className={styles.App}>
        <img className={styles.App}
          src="Church.png" 
          alt="Logo da igreja" 
          width="32" 
          height="32">        
        </img>
        <h1 className={styles.name}>Pedro</h1>
        <h2 className={styles.name}>21</h2>
        <h2 className={styles.name}>pedro@pedro.com</h2>
      </div>
    )
}