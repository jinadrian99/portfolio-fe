import { Button, Col, Row, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react'

export default function Header(props) {
    var logo = `https://firebasestorage.googleapis.com/v0/b/porfolio-hiraadrian.appspot.com/o/local%2Ficon-Adrian.png?alt=media&token=935e24f9-38cd-47e1-bcab-2f2321ae6dee`;   
    var avatar = `https://mattfarley.ca/img/mf-avatar.svg`;
    var deskLine = `https://firebasestorage.googleapis.com/v0/b/porfolio-hiraadrian.appspot.com/o/local%2Fdesk_violet.svg?alt=media&token=6c539a87-7db8-4151-b441-c6f8843d4ec0`;
    // var deskLine = `https://firebasestorage.googleapis.com/v0/b/porfolio-hiraadrian.appspot.com/o/local%2FDesk%20Setup%2004.jpg?alt=media&token=56187a30-e10d-46dc-b5ec-afb1f5b1e4e3`;
    const [seeInfo, setSeeInfo] = useState(false);
    useEffect(() => {
        props.onIsShowInfo(seeInfo);
        if(seeInfo){
            window.scrollTo(0, window.innerHeight);
        }
    }, [seeInfo]);
    return (
        <>
            <Row className="header pt-30">
                <Col xs={0} md={1} />
                <Col xs={24} md={6} className="pt-20 pb-20">
                    <img src={logo} className="App-logo" alt="Logo" />
                </Col>
                <Col xs={0} md={10} />
                <Col xs={24} md={6} className="pt-20 pb-20">
                    <Tooltip title="Click to see my info" color="#684B8A"  placement="right">
                        <Button shape="round" onClick={() => setSeeInfo(!seeInfo)} className="btn-violet btn-hello" size="large">
                            Hello, I'm Adrian
                        </Button>
                    </Tooltip>
                </Col>
                <Col xs={0} md={1} />
            </Row>
            <Row>
                <Col xs={0} md={1} />
                <Col xs={0} md={22} >
                    <p hidden>Content header homepage</p>
                    <div style={{ maxHeight: '100vh' }}>
                        <Row className="mt-50" justify="center">
                            <Col>
                                <span className="text-title">
                                    <span className="title-head-font">W</span>eb 
                                    <span className="title-head-font"> D</span>eveloper, 
                                    <span className="title-head-font"> F</span>ront-end 
                                    <span className="title-head-font"> D</span>eveloper
                                </span><br/>
                                <span className="text-title minimize-font">I design, code beautifully simple things also responsibility with my project, and I love what I do.</span>
                            </Col>
                        </Row>   
                        <Row justify="center">
                            <Col>
                                <img src={avatar} className="avatar" alt="Avatar" />
                            </Col>
                        </Row>
                        <Row justify="center" style={{paddingTop: "2.5rem"}}>
                            <Col>
                                <img src={deskLine} className="desk-line" alt="Desk line violet" />
                            </Col>
                        </Row> 
                    </div>
                </Col>
                <Col xs={1} md={1} />
                <Col xs={22} md={0} >
                    <p hidden>Content header homepage for phone</p>
                    <div style={{ maxHeight: '100vh' }}>
                        <Row className="mt-50" justify="center">
                            <Col>
                                <span className="xs-text-title">
                                    <span className="xs-title-head-font">W</span>eb 
                                    <span className="xs-title-head-font"> D</span>eveloper, 
                                    <span className="xs-title-head-font"> F</span>ront-end 
                                    <span className="xs-title-head-font"> D</span>eveloper
                                </span><br/><br/>
                                <span className="xs-text-title xs-minimize-font">I design, code beautifully simple things also responsibility with my project, and I love what I do.</span>
                            </Col>
                        </Row>   
                        <Row justify="center">
                            <Col>
                                <img src={avatar} className="avatar" alt="Avatar" />
                            </Col>
                        </Row>
                        <Row justify="center" style={{paddingTop: "2.5rem"}}>
                            <Col>
                                <img src={deskLine} className="desk-line" alt="Desk line violet" />
                            </Col>
                        </Row> 
                    </div>
                </Col>
                <Col xs={1} md={0} />
            </Row>
        </>
    )
}
