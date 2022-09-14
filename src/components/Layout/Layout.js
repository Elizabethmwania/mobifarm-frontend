import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
class Layout extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Banner></Banner>
                <Footer></Footer>
            </div>
        );
    }
}

export default Layout;