import React from "react";
import {Container, Row, Col, InputGroup, FormControl, Image} from "react-bootstrap"
import './Catalog.css'
import SearchLogo from './search-solid.png'
import DownLogo from './down-arrow.png'
import TopCar from './TopCar.png'
import HCar from './hyundai.png'
import StarrLogo from '../../star.png'



const CatalogPage = () => {
    return (
        <div className="catalog_page">
          
          <Container>
            <Row className="inp_row">
              <Col>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">
                    
                    <img src={SearchLogo} width={20}/>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Col>
              <Col>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">
                      <img src={DownLogo} width={20}/>

                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Col>
              <Col>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Col>

            </Row>
          
            <Row className="mt-3" className="car_row">
              <Col>
                <div id="subaru_text">
                  Subaru WRX STI 2012
                </div>
                <Image src={HCar} rounded width={450} />
              </Col>
              <Col>
                <h1>
                  HYUNDAI ACCENT NEW
                </h1>
                <p>
                  За 6 лет Hyundai Accent стал поистине народным автомобилем.
                </p>

                <p>
                  Accent сочетает экономичность и удобство городского седана.
                </p>
              </Col>
            </Row>
            <Row className="car_cols">
                <Col>

                  <Image src={TopCar} rounded width={300} />
                </Col>
                <Col>
                  <Image src={TopCar} rounded width={300} />
                </Col>
                <Col>
                  <Image src={TopCar} rounded width={300} />
                </Col>
  
            </Row>
          </Container>

        </div>
    );
  }
  
  export default CatalogPage;


 