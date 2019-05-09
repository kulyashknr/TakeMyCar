import React, { Component } from 'react';
import {Container, Row, Col, Card, Image} from "react-bootstrap"
import './about.css'
import { connect } from 'react-redux';
import * as postActions from '../.././actions/postActions';
import people1 from './people1.jpg';
import people2 from './people2.jpg'


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
            <div id="cont">
            <div class="text1">
              <h1> Работа в Take My Car </h1>
              <h4> Take My Car всегда в поиске лучших профессионалов со всего мира. Работая в компании, Вы получаете не просто локальный опыт,
                а имеете возможность применить свои знания на других мировых рынках, таких как Россия и в иных странах, где функционирует Take My Car. </h4>
            </div>
            <div>
              <Image width="500px" alt="people" src={people1} id="people1"/>
            </div>
            <div class="peoplePhoto2">
              <Image width="550px" alt="people2" src={people2} id="people2"/>
              <div className="text2">
                <h1> История </h1>
                <h4> Take My Car Казахстан основан в 2018 году. Это первый иностранный каршеринг сервис в Центральной Азии.
                  Компания успешно
                  функционирует в различных странах СНГ и Европы. Наша история началась в 2015 года когда был запущен
                  крупнейший сервис
                  поминутной аренды в России под брендом «Делимобиль». Сервис работает в таких городах как Москва,
                  Санкт-Петербург, Екатеринбург,
                  Самара, Уфа, Новосибирск, Нижний Новгород, Самара, Грозный, Краснодар. </h4>
              </div>
            </div>
            </div>
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

/*<Row className="justify-content-md-center">
 { this.props.posts.slice(0,3).map(post =>
 <Col  md={4}>
    <Card style={{ width: '18rem' }} key={post.id}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> }
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
</Row>*/
