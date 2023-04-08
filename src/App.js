import './App.css';
import "./components/Navbar/Navbar.css"
import Header from './components/Navbar/Header';
import Slideshow from './components/Slideshow/Slideshow'

function App() {
  return (
    <div className="App">
      <Header/>
      <Slideshow/>
    </div>
  );
}

export default App;
