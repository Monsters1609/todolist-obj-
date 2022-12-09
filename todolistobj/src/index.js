import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Home from './page/home';
import NewList from './page/page1';
import Page2 from './page/page2';
import Page3 from './page/page3';
import Page4 from './page/page4';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/NewList' element={<NewList/>}></Route>
        <Route path='/Intrduction' element={<Page2/>}></Route>
        <Route path='/About' element={<Page3/>}></Route>
        <Route path='/Setting' element={<Page4/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

