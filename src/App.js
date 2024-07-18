import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './component/HomePage';
import DescriptionPage from './component/DescriptionPage';

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/description/:id" element={<DescriptionPage />}/>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </div>
  );
};

export default App;