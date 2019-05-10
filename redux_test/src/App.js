import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import NewPost from './components/NewPost';
import CreateCar from './containers/CreateCar';
import CarList from './containers/CarList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <CreateCar />
          </div>
          <div className="col-md-6">
              <CarList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
