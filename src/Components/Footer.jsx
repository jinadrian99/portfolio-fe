import { Col, Row } from 'antd';
import React from 'react';
import {AiOutlineGithub, AiOutlineAntDesign} from 'react-icons/ai';
import {FiMail, FiPhoneCall} from 'react-icons/fi';

export default function Footer() {
    var logo = `https://firebasestorage.googleapis.com/v0/b/porfolio-hiraadrian.appspot.com/o/local%2Ficon-Adrian.png?alt=media&token=935e24f9-38cd-47e1-bcab-2f2321ae6dee`;   
    return (
        <>
            <Row className="mt-30">
                <Col xs={24} md={24} className="pt-20">
                    <img src={logo} className="App-logo" alt="Logo" /><br /><br />
                    <span style={{fontSize: "23px", color: "#684B8A"}}>Living, learning, & leveling up</span>
                </Col>
            </Row>
            <Row className="mb-20">
                <Col xs={10} md={10} />
                <Col xs={4} md={4} className="pt-50 pb-20 icon-contact">
                    <a href="https://github.com/jinadrian99" target="_blank" rel="noreferrer"><AiOutlineGithub style={{fontSize: "40px", marginRight: "15px"}} /></a>
                    <a href="mailto:quochungtran321@gmail.com"><FiMail style={{fontSize: "40px", marginRight: "15px"}} /></a>
                    <a href="tel:0789991876"><FiPhoneCall style={{fontSize: "38px"}} /></a>
                </Col>
                <Col xs={10} md={10} />
            </Row>
            <Row className="mb-10">
                <Col xs={24} md={24}>
                    <span style={{fontSize: "16px", color: "#684B8A"}}>Customized by me according to &copy; twentytwenty's design</span>
                </Col>
            </Row>
            <Row className="mb-20">
                <Col xs={24} md={24} className="icon-ui">
                    <span style={{fontSize: "16px", color: "#684B8A"}}>Made with <a href="https://ant.design/" target="_blank" rel="noreferrer"><AiOutlineAntDesign style={{fontSize: "23px"}}/> Ant Design</a></span>
                </Col>
            </Row>
            </>
        )
    }
