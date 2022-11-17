import React from 'react';


//external librairy
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Router } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
//Style
import './App.css';

import Navbar from './Components/Navbar';
import Ajout from './Components/Ajout';
import Ajout2 from './Components/Ajout2';
import List from './Components/List';
import Logo from "./logo";

class App extends React.Component {
  render() {
    return (<div className="container" >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/logo" />} />
        </Routes>
        <Navbar />
        <Routes>
          <Route path="Ajout" element={<Ajout />} />
          <Route path="Ajout2" element={<Ajout2 />} />
          <Route path="List" element={<List />} />
          <Route path="/logo" element={<Logo />} />

        </Routes>
      </BrowserRouter>
    </div>
    );
  }
}





export default App;
