import React from 'react';
import '../styles/App.css';
import Footer from './design/footer';
import Header from './design/header';

function App() {
  return (
    <div className="container">
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
}

export default App;
