import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import logo from './kjj.png' 
import style from './Header.css';


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
        <ul>
          <li><a>Главная</a></li>
          <li><a>О нас</a></li>
          <li><a>Каталог</a></li>
          <li><a>Акции</a></li>
        </ul>
        <div className={style.sign}>
          <img src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1" className={style.userStyle} alt="user"/>
                { (!this.state.isLoggedIn)? 

          <Button type="primary" >Logout</Button>
        :
          <Button type="primary">Login</Button>
        }
        </div>

      </div>
    );
  }
}


export default Header;

// Bektemir