import React from 'react';
import './App.css';
import Video from './Components/Video';

function App() {
  return (
    <div className="app">
      {/* <h1>Hello clever programmer</h1> */}
      <div className="app__videos">
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
