import React, { Component } from 'react';
import {Container, Row, Col, Card} from "react-bootstrap"
import './about.css'
import { connect } from 'react-redux';
import * as postActions from '../.././actions/postActions';


class About extends Component {
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
          <Container>
            <Row className="justify-content-md-center">
               { this.props.posts.slice(0,3).map(post =>
               <Col  md={4}>
                  <Card style={{ width: '18rem' }} key={post.id}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                      <Card.Title>{post.title}</Card.Title>
                      <Card.Text>
                        <div>{ post.body }</div>
                      </Card.Text>
                    )
                    </Card.Body>
                  </Card>
                </Col>
                )}
            </Row>
          </Container>
        
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
)( About);
