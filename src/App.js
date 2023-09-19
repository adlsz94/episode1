import styles from './App.module.css'
import User from './components/User'
// video 30mins
function App() {
  const image = <img src="Church.png" alt="Logo da igreja" width="32" height="32"></img>
  const email = <h2 className={styles.name}>pedro@pedro.com</h2>
  const name  = <h1 className={styles.name}>Pedro</h1>
  const age   = <h2 className={styles.name}>21</h2>
  const user  = (
    <div>
          {image}
          {name}
          {age}
          {email}
    </div>
  )
  return (
    <div className={styles.App}>
        <div>
          <User className={styles.name}/>
          {user}
          <Usuario className={styles.name} name='Pedro' age={21} email='pedro@pedro.com'/>
          <Usuario className={styles.name} name='Jessica' age={20} email='jessica@jessica.com'/>
          <Usuario className={styles.name} name='Cloe' age={23} email='Cloe@Cloe.com'/>
          <Job salary={90000} position='Senior SDE' company='Amazon'/>
          <Job salary={12000} position='Junior SDE' company='Google'/>
          <Job salary={10000} position='Projct Manager' company='Netflix'/>
        </div>        
    </div>
  );
}

const Usuario = (props) => {
  return(
    <div>
      <h1 className={styles.name}>{props.name}</h1> 
      <h1 className={styles.name}>{props.age}</h1> 
      <h1 className={styles.name}>{props.email}</h1> 
    </div>
  )
}

const Job = (props) => {
  return (
    <div>
      <h1 className={styles.name}> {props.salary} </h1>
      <h1 className={styles.name}> {props.position} </h1>
      <h1 className={styles.name}> {props.company} </h1>
    </div>
  )
}

export default App;

/* const GetName = () => {
  return 'Pedro'
}

const getNameComponent = () => {
  return <h1>Pedro</h1>
} 
*/


/**
 *? Adding a CSS Modules Stylesheet
 * 
 * TODO: See the link:
 * 
 ** https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/
 * 
 *! Note: this feature is available with react-scripts@2.0.0 and higher.
 * 
 * This project supports CSS Modules alongside regular stylesheets using 
 * the [name].module.css file naming convention. CSS Modules allows the 
 * scoping of CSS by automatically creating a unique classname of the 
 * format [filename]\_[classname]\_\_[hash].
 * 
 *! Tip: Should you want to preprocess a stylesheet with Sass then make 
 *! sure to follow the installation instructions -
 *! (https://create-react-app.dev/docs/adding-a-sass-stylesheet) -
 *! and then change the stylesheet file extension as follows:
 *!  [name].module.scss or [name].module.sass.
 */