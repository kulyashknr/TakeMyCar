import React, { Component } from "react";
import Form from 'react-bootstrap/Form'; 
import { Button, Container , Row } from 'react-bootstrap';
import '../login/login.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const login = () => {
    return (
      <Container>
      <Row className="justify-content-md-center">
        <div className="login">
          <h1>
            Регистрация
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
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Повторите пароль</Form.Label>
              <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Зарегестрироваться
          </Button>
        </Form>
        </div>
      </Row>
      </Container>
    )
  }
  
  export default login;