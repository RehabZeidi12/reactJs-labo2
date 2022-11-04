import logo from './logo.svg';
import React from 'react';
//external librairy
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
//Style
import './App.css';

import Navbar from './Components/Navbar';
import Ajout from './Components/Ajout';
import Ajout2 from './Components/Ajout2';
import List from './Components/List';


class App extends React.Component {
  render() {
    return (<div className="container" >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="Ajout" element={<Ajout />} />
          <Route path="Ajout2" element={<Ajout2 />} />
          <Route path="List" element={<List />} />

        </Routes>
      </BrowserRouter>
    </div>
    )
  }
}





export default App;
