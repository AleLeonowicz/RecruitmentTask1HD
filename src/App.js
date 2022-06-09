import React, { Fragment } from 'react';

import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainSection from './components/MainSection/MainSection';
import StateProvider from './store/StateProvider';

function App() {
  return (
    <Fragment>
      <Header />
      <StateProvider>
        <MainSection />
      </StateProvider>
      <Footer />
    </Fragment>
  );
}

export default App;
