import './App.css'
import Intro from "./components/Intro";
import StarsCanvas from "./components/canvas/Stars";

function App() {

 return (
      <div className='App'>
        <div id='content'>
          <div className='z-0'>
            <Intro></Intro>
            
            <StarsCanvas></StarsCanvas>
          </div>
        </div>
      </div>
 )
}

export default App;