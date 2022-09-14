import React, { Component } from 'react';
import hero1 from '../../images/banner.png';
class Banner extends Component {
    render() {
        return (
        <section class="hero-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="hs-text">
                        <h2>Educating and Training for better produce!</h2>
                        <p>Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin
                            vulputate congue rutrum. Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad
                            litora torquent per conubia.</p>
                        <a href="./pages/home/loans.html" class="site-btn sb-dark">Get started</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="hero-slider owl-carousel">
            <div className="hs-item set-bg" data-setbg={hero1}></div>
            <div class="hs-item set-bg" data-setbg="./pages/home/assets/images/banner.png"></div>
            <div class="hs-item set-bg" data-setbg="./pages/home/assets/images/banner.png"></div>
        </div>
    </section>
        );
    }
}

export default Banner;