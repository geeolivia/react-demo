import './App.css';
//import Header from './Header'
import About from './About'
//import Footer from './Footer'
import Game from './Game.js'

//main component named 'App'
const App = () => {
  return (
    /* main div container */
    <div className="container">
      <div>
        <About />
      </div>
      <div>
        <Game />
      </div>
    </div>
  );
};

//export 'App' component
export default App


