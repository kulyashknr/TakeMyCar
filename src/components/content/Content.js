import React, { Component } from 'react';
import './Content.css';
import { Button } from 'react-bootstrap';


class Content extends Component {

    render() {
        return (
          <div className="main" >
            <Button variant="outline-secondary">
              <span>ПОЕХАЛИ</span>
            </Button>
            <Button variant="flat" size="xxl">
            flat button
            </Button>
          </div>
        );
      }
    }
    
  
  export default Content;


  // Bektemir Kulyash
