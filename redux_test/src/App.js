import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actionTypes from './constants/actionTypes'
import NewPost from './components/NewPost';
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <NewPost />
          </div>
          <div className="col-md-6">
            Display Post
          </div>
        </div>
      </div>
    );
  }
}

export default App;
