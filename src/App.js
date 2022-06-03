// import logo from './logo.svg';
import React, { Fragment } from 'react';
import './App.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainSection from './components/MainSection/MainSection';

function App() {
  return (
    <Fragment>
      <Header />
      <MainSection />
      <Footer />
    </Fragment>
  );
}

export default App;
