import { Col, Row } from 'antd'
import React from 'react'

export default function Content() {
    return (
        <div style={{backgroundColor: '#7411F7', color: 'white'}}>
            <Row className="pt-50">
                <Col xs={0} md={1}></Col>
                <Col xs={0} md={22}>
                    <b className="text-title" style={{ fontFamily: "Arial, Helvetica"}}>My Recent Work</b><br />
                    <span className="text-title minimize-font" style={{ fontFamily: "Arial, Helvetica"}}>Here are a few projects I've worked on recently.</span>
                </Col>
                <Col xs={1} md={1}></Col>
                <Col xs={22} md={0}>
                    <b className="xs-text-title" style={{ fontFamily: "Arial, Helvetica"}}>My Recent Work</b><br />
                    <span className="xs-text-title xs-minimize-font" style={{ fontFamily: "Arial, Helvetica"}}>Here are a few projects I've worked on recently.</span>
                </Col>
                <Col xs={1} md={0}></Col>
            </Row>
            <Row>
                
            </Row>
        </div>
    )
}
