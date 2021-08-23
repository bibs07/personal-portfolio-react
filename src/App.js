import './App.css';

//Importing components
import {
  Nav,
  About,
  Skills,
  Projects,
  Contact,
  Footer,
} from './components/index'


function App() {
  return (
    <div className="App">
      <Nav />
      <div className="w-3/4 mx-auto" id="container">
        <About />
        <Skills />
        <Projects />
        {/* <Contact /> */}
      </div>
        <Footer/>
    </div>
  );
}

export default App;
