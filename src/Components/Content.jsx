import { Card, Col, Row, Image, Divider, Switch, Button, Empty } from 'antd'
import React, { useState } from 'react'
import data from './data.js';

function DisplayInfo(props) {
    const [isReadTech, setIsReadTech] = useState(false);
    return (
        <div>
            <Row style={{padding: "10px", margin: "0", minHeight: '45px'}}>
                <Col xs={0} md={1} />
                <Col xs={0} md={16} style={{textAlign: "left"}}>
                    <b>Project name:</b> <span>{props.item.projectName}</span>
                </Col>
                <Col xs={24} md={0}>
                    <b>Project name:</b> <span>{props.item.projectName}</span>
                </Col>
                <Col xs={0} md={6} style={{textAlign: "right"}}>
                    <b>Created at:</b> <span>{props.item.createAt}</span>
                </Col>
                <Col xs={24} md={0}>
                    <b>Created at:</b> <span>{props.item.createAt}</span>
                </Col>

                <Col xs={0} md={1} />
            </Row>
            <Divider style={{margin: "0"}} />
            <Row style={{padding: "10px"}}>
                <Col xs={1} md={1} lg={1} />
                <Col xs={13} md={15} lg={16} style={{height: "175px", overflow: "scroll"}}>
                    {
                        isReadTech ? <>
                            <Row style={{padding: "18px 25px"}}>
                                {
                                    props.item.tech.map((item, i) => 
                                        (i % 2 === 0)?(
                                            <>
                                                <Col xs={24} md={11} lg={11} style={{padding: "5px"}}>{item}</Col>
                                                <Col xs={0} md={2} lg={2} />  
                                            </>
                                            
                                        ):(
                                            <Col xs={24} md={11} lg={11} style={{padding: "5px"}}>{item}</Col>
                                        )
                                    )
                                }
                            </Row>
                        </> : <>
                            <p style={{padding: "5px 25px 0px 25px"}}>
                                {props.item.desc}
                            </p>
                            <p style={{padding: "0px 25px", textAlign: "left"}}>
                                - Team size: { props.item.teamSize } <br />
                                - Role: { props.item.role }
                            </p>
                        </>
                    }
                    
                </Col>
                <Col xs={1} md={1} lg={1} />
                <Col xs={8} md={6} lg={5}>
                    <div className="pt-20">
                        <Switch checkedChildren="View desc" unCheckedChildren="View tech" value={isReadTech} onChange={() => setIsReadTech(!isReadTech)} />
                    </div>
                    <div className="mt-10 mb-10">
                        <Button shape="round" onClick={() => window.open(props.item.urlDemo, '_blank')} className="btn-violet-demo btn-" size="large">
                            View Demo
                        </Button>
                    </div>
                    <div>
                        <Button shape="round" onClick={() => {props.item.urlGit.map((url) => window.open(url, '_blank'))}} className="btn-violet-demo btn-" size="large">
                            View Github
                        </Button>
                    </div>
                </Col>
                <Col xs={1} md={1} lg={1} />
            </Row>
        </div>
    )
}

export default function Content() {
    console.log(data);
    return (
        <div style={{backgroundColor: '#5b23a4', color: 'white'}} className="pt-50 pb-50">
            <Row>
                <Col xs={0} md={1}></Col>
                <Col xs={0} md={22}>
                    <b className="text-title" style={{ fontFamily: "Arial, Helvetica"}}>My Recent Work</b><br />
                    <span className="xs-text-title xs-minimize-font" style={{ fontFamily: "Arial, Helvetica"}}>Here are a few projects I've worked on recently.</span>
                </Col>
                <Col xs={1} md={1}></Col>
                <Col xs={22} md={0}>
                    <b className="xs-text-title" style={{ fontFamily: "Arial, Helvetica"}}>My Recent Work</b><br />
                    <span className="xs-text-title xs-minimize-font" style={{ fontFamily: "Arial, Helvetica"}}>Here are a few projects I've worked on recently.</span>
                </Col>
                <Col xs={1} md={0}></Col>
            </Row>
            <Row>
                <Col xs={2} md={4} />
                <Col xs={20} md={16}>
                {
                    (data.length > 0) ? (
                        data.map((item, i) => 
                            <div className="mt-50 mb-30 card-project">
                                <Card hoverable className="card-border">
                                    <Row style={{ margin: "0"}}>
                                        <Col xs={24} sm={24} md={24} lg={9}>
                                            <div className="card-box-img">
                                                <Image src={item.urlImg} alt="project" />
                                            </div>
                                        </Col>
                                        <Col xs={24} sm={24} md={24} lg={15} style={{padding: "0", fontFamily: "Helvetica", fontSize: "1rem"}}>
                                            <DisplayInfo item={item} />
                                        </Col>
                                    </Row>
                                </Card>
                            </div>
                        )
                    ) : (
                        <Empty />
                    )
                }


                </Col>
                <Col xs={2} md={4} />
            </Row>
        </div>
    )
}