import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import logo from './logo1.png' 
import style from './Header.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Header extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: true
    }
  }
  
  render() {
    // let isLoggedIn = true;
    return (
      <div className="header" >
        <div className="logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="pages">
        <ul>
          <li><Link to="/" className="links">Главная</Link></li>
          <li><Link to="/about"  className="links">О нас</Link></li>
          <li><Link to="/catalog"  className="links">Каталог</Link></li>
          <li><Link to="/"  className="links">Акции</Link></li>
        </ul>
        </div>
        <div className="sign">
        <a href="/userpage"><img  src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1" className={style.userStyle} alt="user"/></a>
                { (!this.state.isLoggedIn)? 

          <Button type="primary" >Выйти</Button>
        :
          <Button variant="outline-light"><Link to="/login" className="log_button">Войти</Link></Button>
        }
        </div>

      </div>
    );
  }
}


export default Header;

// Bektemir