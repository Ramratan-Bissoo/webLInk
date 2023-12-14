import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';

const Icon = ({ svgPath, altText, height, width }) => (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 448 512">
        <path fill="#ffffff" d={svgPath} />
    </svg>
);

export const CustomButton = ({ iconPath, buttonText1, buttonText2, onClick, styleClass }) => (
    <Col md={10} className='mt-4'>
        <button className={styleClass} onClick={onClick}>
            <Icon svgPath={iconPath} altText="Button Icon" height="30" width="50" />
            <span className='btnTextAlign'>{buttonText1} <br /> {buttonText2} </span>
        </button>
    </Col>
);