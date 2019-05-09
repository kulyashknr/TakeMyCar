import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as postActions from './actions/postActions';
import Header from './components/header/Header'
import Content from './components/content/Content'
import Footer from './components/footer/Footer' 
import Catalog from './components/catalog/Catalog' 
import UserPage from './components/userpage/UserPage'
import about from './components/about/about'
import login from './components/login/login'
import registration from './components/registration/registration'

import "react-bootstrap/dist/react-bootstrap.min.js"

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// for routing between pages

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
    this.handleCreatePost = this.handleCreatePost.bind(this);
  }

  componentDidMount() {
    this.props.getPosts();
  }

  handleCreatePost() {
    let data = {
      title: "welcome to world",
      body: "hello world",
      userId: 1
    }
    this.props.createPost(data);
  }
  render() {
    console.log(this.props.firstPost);
    return (
      
      <Router>
      <div className="App">
        <Header />
{/*         <div>
          <div className="post-container">
          
            <b>{this.props.firstPost.title}</b>

            { this.props.posts.map(post =>
              <div className="post-block" key={post.id}>
                <h3>{ post.title }</h3>
                <div>{ post.body }</div>
              </div>
            )}
          </div>
        </div> */}
        <Route exact path="/" component={Content}/>
        <Route exact path="/catalog" component={Catalog}/>
        <Route exact path="/userpage" component ={UserPage}/>
        <Route exact path="/about" component ={about}/>
        <Route exact path="/login" component ={login}/>
        <Route exact path="/registration" component ={registration}/>
        <Footer />
      </div>
      </Router>
    );
  }
};

const mapStateToProps = (state) => ({
  posts: state.post.posts,
  firstPost: state.post.firstPost
})

const mapDispatchToProps = {
  getPosts: postActions.getPosts,
  createPost: postActions.createPost
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);