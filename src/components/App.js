import React from 'react';
import '../styles/App.css';
import '../styles/style.css';
import Footer from './design/footer';
import Header from './design/header';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <footer className='text-muted'>
        <Footer />
      </footer>
    </>
  );
}

export default App;
