import React, { Component } from 'react';
import './Content.css';
import { Button, Container , Row, Col, Image} from 'react-bootstrap';
import car from './f40.png';


class Content extends Component {

    render() {
        return (
        <div className="cont">
          <div className="car" >
          <Button variant="outline-light" id="poehali">
            <span>ПОЕХАЛИ</span>
          </Button>
          </div>
          <Container id="nextpt">
              <Row>
                <Col sm>
                  <h1 class="sta">31</h1>
                  <h2 class="chta">классная цифра</h2>
                  <hr id="sizik"></hr>
                  <p class="sozder">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nosasdid est laborum.</p> 
                </Col>
                <Col sm>
                  <h1 class="sta">31</h1>
                  <h2 class="chta">классная цифра</h2>
                  <hr id="sizik"></hr>
                  <p class="sozder">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nosasdid est laborum.</p> 
                </Col>
                <Col sm>
                  <h1 class="sta">31</h1>
                  <h2 class="chta">классная цифра</h2>
                  <hr id="sizik"></hr>
                  <p class="sozder">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nosasdid est laborum.</p> 
                </Col>
              </Row>
          </Container>
          <Image width="600px" alt="super-car" src={car} id="f40"/>
          <h1 id="texter">take my car!</h1>
          <p class="parf">
            Первый в казахстане сервис каршеринга между юр лицами



        </p>
        <p class="parf">
          клаассно круто круто наш проект
          
        </p>
        <p class="parf">
          
          алаллалалааллалалалалалалалалал
        </p>
        </div>
        );
      }
    }
    
  
  export default Content;


  // Bektemir Kulyash
  //add Content2
