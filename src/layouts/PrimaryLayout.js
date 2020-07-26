import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"

const PrimaryLayout = (props) => (
    <div>
        <Header></Header>
            {props.children}
        <Footer></Footer>
    </div>
);

export default PrimaryLayout;