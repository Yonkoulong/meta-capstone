import React from 'react';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Nav } from '../components/Nav';

export const HomePage = () => {
  return (
    <React.Fragment className="App">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </React.Fragment>
  );
};
