import React from "react";
import './Footer.css'
import {Container, Row, Col} from "react-bootstrap"
const FooterPage = () => {
    return (
        <Container fluid className="footer_c justify-between" >
          <Row className="justify-content-center pt-5">
            <Col sm lg={3}>
              <h2 class="chta">Информация о нас</h2>
              <hr id="sizik"/>
              <p class="sozdesr">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nosasdid est laborum.</p>  
            </Col>
            <Col sm lg={3}>
              <h2 class="chta">Наши контакты</h2>
              <hr id="sizik"/>
              <p class="sozdesr">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore etsdanim id est laborum.</p>            
            </Col>
            <Col sm lg={3}>
              <h2 class="chta">Разработчикам</h2>
              <hr id="sizik"/>
              <p class="sozdesr">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolo um.</p>            
            </Col>
          </Row>
          <Row id="krpolosa"></Row>
        </Container>
    );
  }
  
  export default FooterPage;


 