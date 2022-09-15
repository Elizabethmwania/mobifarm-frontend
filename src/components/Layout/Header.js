import React from 'react';

const Header = () => {
    return (
        <header class="header-section">
        {/* <a href="index.html" class="site-logo">
            <img src="./pages/home/assets/images/mobiloggo.png" alt="" style="height: 50px; width:50px;">
        </a> */}
        <nav class="header-nav">
            <ul class="main-menu">
                <li><a href="index.html" class="active">Home</a></li>
                <li><a href="./pages/home/about.html">About Us</a></li>
                <li><a href="#">Individuals</a>
                    <ul class="sub-menu">
                        <li><a href="./pages/home/loans.html">Farmers</a></li>
                        <li><a href="./pages/offtaker/offtaker_login.html">Offtakers</a></li>
                        <li><a href="./pages/dealer/dealer.html">Agro Dealer</a></li>
                        <li><a href="./pages/finance/adminLogin.html">Admin</a></li>
                    </ul>
                </li>
                <li><a href="./pages/home/contact.html">Contact</a></li>
            </ul>
            <div class="header-right">
                <div class="hr-btn hr-btn-2">+254 732 657 742
                    <i class="flaticon-029-telephone-1"></i>
                </div>
            </div>
        </nav>
    </header>
    
    );
};

export default Header;