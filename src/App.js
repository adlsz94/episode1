import styles from './App.module.css'

// video 41mins

function App() {
  const age = 19
  const isGreen = false
 /*  if (age >= 18) {
    return <h1 className={styles.App}> OVER AGE</h1>
  } else {
    return (
      <div className={styles.App}>
         <h1 className={styles.App}>UNDER AGE</h1>
      </div>
   );
  } 
  O código acima comentado fica melhor utilizando o
  operador tenário(igual ao ifelse). Veja a seguir:
  {age >= 18 ? <h1 className={styles.name}>OVER AGE</h1> : 
    <h1 className={styles.name}>UNDER AGE</h1>}
  */
 return (
  <div className={styles.App}>
    {age >= 18 ? <h1 className={styles.name}>OVER AGE</h1> : 
    <h1 className={styles.name}>UNDER AGE</h1>}
    <h1 style = {{color: isGreen ? 'green' : 'red' }}>THIS HAS COLOR</h1>

    {isGreen && <button>THIS IS A BUTTON</button>}
  </div>
 )
}

export default App;

