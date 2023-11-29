
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import './App.css';

import LandingPage from './Pages/landingPage/LandingPage';
import RedirectPage from './Pages/redirect/RedirectPage';

function App() {
  return (
    <div className="App">
     <Router>
        {/* <Switch> */}
          <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/:id' element={<RedirectPage/>}/>
          </Routes>
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;
