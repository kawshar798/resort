import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import GlobalStyle from './components/GlobalStyle';
import { Route,Switch} from "react-router-dom";
import Header from './components/Header';
import Container from './components/Container';

function App() {
  return (
    
   <>
    <Header/>
      <GlobalStyle/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about-us">
          <About/>
        </Route>
        <Route path="/rooms/:id">
          <SingleRoom/>
        </Route>

        <Route path="/contact-us">
         <Contact/>
        </Route>

        <Route path="*">
          <Error/>
        </Route>
     
    
      </Switch>
 </>
     
  );
}

export default App;
