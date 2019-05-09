import React, { Component } from 'react';
import { Button, Container,Tab, Row, Col, Image, ListGroup, Nav, Navbar} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link , } from "react-router-dom";
import style from './UserPage.css';
import './UserPage.css'

class UserPage extends Component {
    render(){
        return(
            <Container className="emp-profile">
                <Row>
                    <Col md = {4}>
                        <div class="profile-img">
                            <img src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1" className={style.userStyle} alt="user" alt=""/>
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div class="profile-head">
                            <h5>
                                Джон Доу
                            </h5>
                            <h6>
                                Алматы, Казахстан
                            </h6>
                            <p class="proile-rating">Рейтинг : <span>7/10</span></p>
                        </div>
                    </Col>
                    <Col md={2}>
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}></Col>
                    <Col md={8}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                    <Nav.Link eventKey="first">Мои Данные</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="second">Мои Тачки</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="third">Избранное</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="four">Заказы</Nav.Link>
                                    </Nav.Item>
                                    
                                </Nav>
                                </Col>
                                <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            <Col md={6}>
                                                <p>Имя пользователя</p>
                                            </Col>
                                            <Col md={6}>
                                                <p>John_Doe123</p>
                                            </Col>
                                            <Col md={6}>
                                                <p>Имя</p>
                                            </Col>
                                            <Col md={6}>
                                                <p>Джон Доу</p>
                                            </Col>
                                            <Col md={6}>
                                                <p>Email</p>
                                            </Col>
                                            <Col md={6}>
                                                <p>jonhd_111@gmail.com</p>
                                            </Col>
                                            <Col md={6}>
                                                <p>Телефон</p>
                                            </Col>
                                            <Col md={6}>
                                                <p>865363542</p>
                                            </Col>
                                            <Col md={6}>
                                                <p>Дата рождения</p>
                                            </Col>
                                            <Col md={6}>
                                                <p>1 января, 1996</p>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                    </Tab.Pane>
                                </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default UserPage;
