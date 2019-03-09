import React, { Component } from 'react';
import { Button, Container , Row, Col, Image, ListGroup, Nav, Navbar} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link , } from "react-router-dom";
import style from './UserPage.css';
import './UserPage.css'
import StarrLogo from '/Users/Apple/Desktop/JS/src/components/catalog/star.png'

class UserPage extends Component {
    render(){
        return(
            
            <div className="usermain">
                <Container>
                    <Row>
                        <Col id="nav">
                            <ListGroup id="nav_list" variant="flush">
                                <ListGroup.Item>Здравствуйте, John</ListGroup.Item>
                                <ListGroup.Item>История</ListGroup.Item>
                                <ListGroup.Item>Избранное</ListGroup.Item>
                                <ListGroup.Item>Мои тачки</ListGroup.Item>
                                <ListGroup.Item>Сообщения</ListGroup.Item>
                                <ListGroup.Item className="empty"></ListGroup.Item>
                                <ListGroup.Item className="add">Добавить тачку</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col id="info">
                            <Row>
                                <Col xs lg="2"><img  src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1" className={style.userStyle} alt="user"/></Col>
                                <Col id="main" >
                                    <div id="main-content">
                                        <Container>
                                            <Row><h1 id="user-name">JOHN DOE</h1></Row>
                                            <Row><div id="line"></div></Row>
                                            <Row>
                                                <Container id="stars">
                                                    <Row>
                                                        <div><img src={StarrLogo} width={30}/></div>
                                                        <div><img src={StarrLogo} width={30}/></div>
                                                        <div><img src={StarrLogo} width={30}/></div>
                                                        <div><img src={StarrLogo} width={30}/></div>
                                                 </Row>
                                                </Container>
                                            </Row>
                                        </Container>
                                        <h1 id="adress">California, LA</h1>
                                    </div>
                                </Col>
                            </Row>
                            <Row id="second">
                                <Container>
                                    <Row>
                                        <Nav id="navbar" variant="tabs" defaultActiveKey="/home">
                                            <Nav.Item>
                                                <Nav.Link eventKey="link-1">Данные</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="link-2">Контакты</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="link-3">Отзывы</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Row>
                                    <Row>
                                        <ListGroup id="info-text" variant="flush">
                                            <ListGroup.Item>Пол
                                                 <h1 id="info-text2">Мужской</h1>
                                            </ListGroup.Item>
                                            <ListGroup.Item>Дата рождения
                                                <h1 id="info-text2">14/07/1985</h1>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Row>
                                </Container>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div> 
            // test
        );
    }
}

export default UserPage;
