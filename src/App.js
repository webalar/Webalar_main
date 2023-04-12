import "./css/index.min.css";

import React from 'react';
import Home from './pages';
import About from './pages/about';
import Services from './pages/Services';
import Work from './pages/Work';

import Contacts from "./pages/Contact"
import Error from './pages/error';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Project from "./pages/Project";
import Service from "./pages/Service";
import Privacy from "./pages/Privacy";



function App() {
  return (
    <Router>
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/work' element={<Work />} />
          <Route exact path='/contact' element={<Contacts />} />
          <Route exact path='/project/:id' element={<Project />} />
          <Route exact path='/service/:id' element={<Service />} />
          <Route exact path='/privacy' element={<Privacy />} />
          <Route path="*" element={<Error />} />
      </Routes>

    </Router>
  );
}

export default App;
