import React from 'react';
import AuthInformer from './components/AuthInformer/AuthInformer';

import './App.scss';

import sheets from './img/Sheet.png';
import trello from './img/Trello.png';
import arrow from './img/arrow.png';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">My test</header>
      <div className="app__content">
        <div className="app__content-each">
          <img src={sheets} alt="" className="app__content-each-img" />
          <div className="app__auth-informer">
            <AuthInformer onClick={() => {}} messagePosition="left-top" />
          </div>
        </div>
        <div className="app__content-arrow">
          <img src={arrow} alt="" className="app__content-arrow-img" />
        </div>
        <div className="app__content-each">
          <img src={trello} alt="" className="app__content-each-img" />
          <div className="app__auth-informer-2">
            <AuthInformer onClick={() => {}} messagePosition="right-bottom" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
