import React, { Component } from 'react';
import './Content.css';
import { Button, Container , Row, Col, Image} from 'react-bootstrap';
import car from './car_side.png';
import { connect } from 'react-redux';
import Link from "react-router-dom/es/Link";



class Content extends Component {
    render() {
        return (
        <div className="cont">
          <div className="car" >
          <Button variant="outline-light" id="poehali">
            <span><Link to="/catalog"  className="links">ПОЕХАЛИ</Link></span>
          </Button>
          </div>
          <Container id="nextpt">
              <Row>
                <Col sm>
                  <h1 class="sta">72</h1>
                  <h2 class="chta">пользователя</h2>
                  <hr id="sizik"></hr>
                  <p class="sozder">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nosasdid est laborum.</p> 
                </Col>
                <Col sm>
                  <h1 class="sta">96</h1>
                  <h2 class="chta">автомобилей</h2>
                  <hr id="sizik"></hr>
                  <p class="sozder">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nosasdid est laborum.</p> 
                </Col>
                <Col sm>
                  <h1 class="sta">3</h1>
                  <h2 class="chta">года на рынке</h2>
                  <hr id="sizik"></hr>
                  <p class="sozder">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nosasdid est laborum.</p> 
                </Col>
              </Row>

              <Row className="justify-content-md-center">
                <div>
                  <Image width="600px" alt="super-car" src={car} id="f40"/>
                </div>
              </Row>
              <Row className="justify-content-md-center"><h1 id="texter">take my car</h1></Row>
             <p class="parf">
                Вы можете воспользоваться сервисом Take My Car, если Вам полных 21 лет и имеете постоянную регистрацию на территории РК,
                водительское удостоверение категории "В" и стаж вождения не менее 2 лет. Для этого Вам необходимо пройти регистрацию
                в мобильном приложении Take My Car каршеринг Казахстан. </p>
          </Container>
        </div>
        );
      }
    };



export default Content;
