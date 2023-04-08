import React from 'react';
//Global style
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/nav';
//import pages
import AboutUs from './pages/AboutUs';
import Contact from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
//Router
import {Route,useLocation} from "react-router-dom";
import {Switch} from 'react-router-dom';
//ANimation
import {AnimatePresence} from 'framer-motion';
function App() {
  const location = useLocation();
  console.log(location.key);
  return (
    
    <div className="App">
       <GlobalStyle/>
          <Nav/>
          <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname} >
<Route path="/" exact>
<AboutUs/> </Route>

<Route path="/work" exact>
<OurWork/></Route>

<Route path="/work/:id">
<MovieDetail/></Route>

<Route path="/contact">
<Contact/></Route>

</Switch>
    </AnimatePresence>
    </div>
    
  );

}


export default App;

  