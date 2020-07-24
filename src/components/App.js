import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from './NavBar';
import ControlledCarousel from './Coursel';
import Swiperfun from './Swiper';
import Swiperfun2 from './Swiper2';
import Swiperfun3 from './Swiper3';
import {Swiper} from 'swiper';


function App() {
  return (
    <div>
    <React.Fragment>
      <Router>
        <NavBar />
      </Router>
    </React.Fragment>
    <ControlledCarousel /> 
    <p>Watch next TV and movies</p>
    <Swiperfun />
    <p>Thriller</p>
    <Swiperfun2 />
    <p>Romance</p>
    <Swiperfun3 />
    </div>
  );
}

export default App;
