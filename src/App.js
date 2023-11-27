import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landingpage from './view/componet/landingPage/LandingPage';



function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path='/' element ={ <Landingpage/>} />
          <Route path='/landingpage' element = { <Landingpage />} />
        </Routes>

      </Router>
      
    </div>
  );
}

export default App;
