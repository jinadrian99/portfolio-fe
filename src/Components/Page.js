import React, { useState } from 'react'
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import Intro from './Intro';
import { BackTop } from 'antd';

export default function Page() {
    const [seeInfo, setSeeInfo] = useState(false);
    const onIsShowInfo = (see) => {
        console.log(see);
        setSeeInfo(see);
    }
    return (
        <div className="App">
            <BackTop />
            <div style={{minHeight: "100vh"}}>
                <Header onIsShowInfo={onIsShowInfo} />
            </div>
            <Intro seeInfo={seeInfo} />
            <Content />
            <Footer />
        </div>
    )
}
