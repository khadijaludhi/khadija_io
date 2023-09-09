import './App.css'
import Intro from "./components/Intro";
import StarsCanvas from "./components/canvas/Stars";
import About from "./components/About";
import Projects from "./components/Projects";
import SidebarNav from './components/SidebarNav';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

 return (
  <Router>
      <div className='App'>
        <div id='content'>
          <div className='z-0'>
            <Intro></Intro>
            
            <StarsCanvas></StarsCanvas>
          </div>
          <About></About>
          <Projects></Projects>
        </div>
        <SidebarNav></SidebarNav>
      </div>
    </Router>
 )
}

export default App;