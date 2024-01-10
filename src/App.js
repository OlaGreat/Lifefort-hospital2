import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landingpage from './view/componet/landingPage/LandingPage';
import footer from './view/componet/footer/Footer'
import Aboutlifefort from './view/componet/Aboutlifefort/Aboutlifefort';
import Ourservices from './view/componet/ourservice/Ourservice.jsx';



function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path='/' element ={ <Landingpage/>} />
          <Route path='/landingpage' element = { <Landingpage />} />
          <Route path='/contact-us' element = { < footer/>} />
          <Route path='/aboutlifefort' element = { <Aboutlifefort/>} />
          <Route path='/ourservices' element = { <Ourservices/>} />

        </Routes>

      </Router>
      
    </div>
  );
}

export default App;
