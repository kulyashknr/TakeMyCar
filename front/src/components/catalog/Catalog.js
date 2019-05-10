import React, { Component } from 'react';

//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CreatePost from "../../containers/CreatePost";
import PostList from "../../containers/PostList";
const stylesApp = {
  marginTop: 40
}

class Catalog extends Component {
  render() {
    return (
        <div className="container">
          <div className="row" style={ stylesApp }>
            <div className="col-md-6">
              <CreatePost />
            </div>
            <div className="col-md-6">
              <PostList />
            </div>
          </div>
        </div>
    );
  }
}

export default Catalog;
