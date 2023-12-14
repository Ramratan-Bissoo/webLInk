import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import icon from './RPicon.png';
import { CustomButton } from './Component/CustomButton';


function App() {

  const buttonData = require('./data/buttonData.json');

  const openWhatsApp = () => {

    const phoneNumber = '+919509001616';
    const message = 'Hello%20RcExchange';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className='mainDiv'>
      <Container >

        <Row className='topHeightByScreen'>
          <Col md={6} xs={12}>
            <Col md={12} className='pageIcon mt-4 mb-4'>
              <Image className="imgLogo" src={icon} alt="Sample Image" fluid />
            </Col>
          </Col>

          <Col md={6} xs={12}>
            {buttonData.map((button, index) => (
              <CustomButton
                key={index}
                iconPath={button.iconPath}
                buttonText1={button.buttonText1}
                buttonText2={button.buttonText2}
                styleClass={button.styleClass}
                onClick={openWhatsApp}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default App;
