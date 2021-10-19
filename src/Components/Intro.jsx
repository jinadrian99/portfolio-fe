import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'

export default function Intro(props) {
    const [seeInfo, setSeeInfo] = useState(false);
    useEffect(() => {
        setSeeInfo(props.seeInfo);
    }, [props]);
    return (
        <div style={{backgroundColor: '#5b23a4', color: 'white'}} id="intro">
        {
            seeInfo && (
                <>
                    <Row className="pt-60 pb-30">
                        <Col xs={0} md={1}></Col>
                        <Col xs={0} md={22}>
                            <b className="text-title" style={{ fontFamily: "Arial, Helvetica", fontSize: "2.5rem"}}>Hi, I’m Quoc Hung. Nice to meet you.</b>
                        </Col>
                        <Col xs={4} md={1}></Col>
                        <Col xs={16} md={0}>
                            <b className="xs-text-title" style={{ fontFamily: "Arial, Helvetica", fontSize: "1.8rem"}}>Hi, I’m Quoc Hung. Nice to meet you.</b>
                        </Col>
                        <Col xs={4} md={0}></Col>
                    </Row>
                    <Row>
                        <Col xs={0} md={4}></Col>
                        <Col xs={0} md={16}>
                            <span className="minimize-font" style={{ fontFamily: "Arial, Helvetica", fontSize: "1.25rem"}}>
                                Là một sinh viên vừa tốt nghiệp với niềm đam mê thiết kế, do đó định hướng lập trình giao diện web đã được ấp ủ suốt 4 năm ở trường đại học. Sẵn có trong người sự yêu thích với các công nghệ mới đặc biệt hứng thú với ReactJS nên việc tìm tòi, thử sức và đồng hành cùng view library này kể từ lúc mới học lập trình đến nay đã giúp tôi áp dụng được rất nhiều công nghệ mới vào dự án của mình trên giảng đường đại học. 
                                <br />Đã được cọ sát qua nhiều lần thay đổi cấu trúc lập trình của công nghệ này nên tương đối thành thạo cả 2 hướng lập trình: Class component và Function component. Có khả năng thiết kế tương đối giống với yêu cầu được đề ra.
                                <br />Ngoài ra, có khả năng lập trình: HTML, CSS, NodeJS, Laravel, PHP, ASP.Net, C++, C#, Java. Đã từng tương tác với các package front-end: Redux, Ant design, Reactstap,...   
                            </span>
                        </Col>
                        <Col xs={0} md={4} />
                        <Col xs={2} md={0} />
                        <Col xs={20} md={0}>
                            <span className="xs-minimize-font" style={{ fontFamily: "Arial, Helvetica", fontSize: "1.2rem"}}>
                                Là một sinh viên vừa tốt nghiệp với niềm đam mê thiết kế, do đó định hướng lập trình giao diện web đã được ấp ủ suốt 4 năm ở trường đại học. Sẵn có trong người sự yêu thích với các công nghệ mới đặc biệt hứng thú với ReactJS nên việc tìm tòi, thử sức và đồng hành cùng view library này kể từ lúc mới học lập trình đến nay đã giúp tôi áp dụng được rất nhiều công nghệ mới vào dự án của mình trên giảng đường đại học. 
                                <br />Đã được cọ sát qua nhiều lần thay đổi cấu trúc lập trình của công nghệ này nên tương đối thành thạo cả 2 hướng lập trình: Class component và Function component. Có khả năng thiết kế tương đối giống với yêu cầu được đề ra.
                                <br />Ngoài ra, có khả năng lập trình: HTML, CSS, NodeJS, Laravel, PHP, ASP.Net, C++, C#, Java. Đã từng tương tác với các package front-end: Redux, Ant design, Reactstap,...   
                            </span>
                        </Col>
                        <Col xs={2} md={0}/>
                    </Row>
                </>
            )
        }
        </div>
    )
}
