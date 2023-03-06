import React from 'react';
import './App.css';
import photo from './img/me.jpg';

function App() {
  return (

    <div className='body'>
      <div className='links'>
        <a href='/'> CV.pdf <span> {'>>'} </span></a>
        <a href='https://github.com/JTMalczewski'> Github <span> {'>>'} </span></a>
        <a href='/'> Projects <span> {'>>'} </span></a>
      </div>
      <div className='grid'>
        <div className="app">
          <h1 className='title'> Hello There! </h1>
          <p className='kenobi'> (General Kenobi) </p>
          <p className='name'> I'm Jan. </p>
          <p className='bio'>
            Student of Technical Physics in University of Science and Technology AGH in Krakow.
            I enjoy solving of complex problems.
            I'm passionate abaut data visualisation and modern aesthetics.
            I'm scout leader and hudge nerd. And I'm here to meet You!
          </p>
          <div className='container'>
            <div className='polaroid'>
              <img src={photo} alt="me" />
              <div className='container'>
                <p>Jan Malczewski</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// function 



