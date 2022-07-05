import React from 'react';
import { useState } from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';
import Clrchange from './test';

const Popup = () => {
  return (
    <div className="App" style={{ color: 'white' }}>
      XXX
      <button className="btn"> Click me</button>
      <div>
        <div
          style={{
            backgroundColor: isActive ? 'green' : '',
            color: isActive ? 'white' : '',
          }}
          onClick={<Clrchange />}
        ></div>
      </div>
    </div>
  );
};

export default Popup;
