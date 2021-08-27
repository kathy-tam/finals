import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  useEffect(() => {
    axios.get("/");
  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;
