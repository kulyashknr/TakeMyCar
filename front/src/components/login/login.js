import React, { Component } from "react";
import Form from 'react-bootstrap/Form'; 
import { Button, Container , Row, Col, Image, ListGroup, Nav, Navbar} from 'react-bootstrap';
import './login.css'

const login = () => {
    return (
      <Container>
      <Row className="justify-content-md-center">
        <div className="login">
          <h1>
            Войти
          </h1>
          <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                Мы никогда не распространяем Вашу информацию.
              </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Запомнить меня" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Войти
          </Button>
          <p> Нет аккаунта? </p>
          <Button href="/registration"> Зарегестрироваться </Button>
        </Form>
        </div>
      </Row>
      </Container>
    )
  }
  
  export default login;
