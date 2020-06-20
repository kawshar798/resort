import React from 'react';
import './App.css';
import Home from './pages/Home';
import Room from './pages/Room';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import { Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar';



function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route  exact path="/">
        <Home/>
      </Route>
    <Route path="/rooms">
    <Room/>
    </Route>
    
    <Route path="rooms/:slug">
    <SingleRoom/>
    </Route>

      <Route path="/*">
      <Error/>
      </Route>
   
    </Switch>
    </>
  
  
  );
}

export default App;
