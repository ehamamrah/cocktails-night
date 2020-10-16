import React from 'react';
import '../styles/App.css';
import '../styles/style.css';
import Footer from './design/footer';
import Header from './design/header';
import Carousel from './design/carousel';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main role="main">
        <Carousel />
      </main>
      <footer className='text-muted'>
        <Footer />
      </footer>
    </>
  );
}

export default App;
