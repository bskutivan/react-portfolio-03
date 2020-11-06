import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {

  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch(currentPage) {
      case 'About':
      return (<About></About>)
      
      case 'Portfolio':
      return (<Portfolio></Portfolio>)

      case 'Contact':
      return (<ContactForm></ContactForm>)

      case 'Resume':
      return (<Resume></Resume>)
      
      default:
      return(<About></About>)
    }
  };

  return (
    <div className="page-container">
      <Header
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <main>
        {
          renderPage()
        }
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
