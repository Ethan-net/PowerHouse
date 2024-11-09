import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/homepage';
import Loadcal from './pages/Loadcal';
import Products from './pages/Products';
import BookInspect from './pages/BookInspect';


function App() {

  

  return (
    <Router >
      <Routes>
        <Route path="/" element={<Homepage/>} exact />
        <Route path="/Loadcal" element={<Loadcal/>} exact />
        <Route path="/Products" element={<Products/>} exact/>
        <Route path="/Bookinspect" element={<BookInspect/>} exact/>
      </Routes>
    
  </Router>
  

  )
}

export default App;
