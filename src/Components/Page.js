import React from 'react'
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import Intro from './Intro';

export default function Page() {
    return (
        <div className="App">
            <div style={{minHeight: "100vh"}}>
                <Header />
            </div>
            <Intro />
            <Content />
            <Footer />
        </div>
    )
}
