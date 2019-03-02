import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import logo from './kjj.png' 
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
        <div>
          <img src={logo} alt="logo"/>
        </div>
        <div className={style.pages}>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/">О нас</Link></li>
          <li><Link to="/catalog">Каталог</Link></li>
          <li><Link to="/">Акции</Link></li>
        </ul>
        </div>
        <div className={style.sign}>
          <img src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1" className={style.userStyle} alt="user"/>
                { (!this.state.isLoggedIn)? 

          <Button type="primary" >Logout</Button>
        :
          <Button variant="outline-dark">Login</Button>
        }
        </div>

      </div>
    );
  }
}


export default Header;

// Bektemir