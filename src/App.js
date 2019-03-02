import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header'
import Content from './components/content/Content'
import Footer from './components/footer/Footer' 
import Catalog from './components/catalog/Catalog' 
import UserPage from './components/userpage/UserPage'

import "react-bootstrap/dist/react-bootstrap.min.js"

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// for routing between pages

class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Content}/>
        <Route exact path="/catalog" component={Catalog}/>
        <Route exact path="/userpage" component ={UserPage}/>
        <Footer />
      </div>
      </Router>
    );
  }
};

function Home()
{
  return(
      <Content />
  );
}

function CatalogPage()
{
  return(
      <Catalog />
  );
}

export default App;