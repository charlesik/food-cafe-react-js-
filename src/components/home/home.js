import React, { Component } from 'react';

import section from 'react-bootstrap'
import 'jquery/dist/jquery';
import 'popper.js/dist/umd/popper';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css'
// import 'owl.carousel/dist/assets/owl.theme.default.css'


import Navbar from '../layout/navbar'
import Footer from '../layout/footer'
import './../layout/responsive.css'
import Hero from './components/hero'
import Recommended from './components/recommended'
import  Menu from './components/menu'
import Category from './components/category'
import  Banner from './components/banner'
import  ContentArea from './components/cta'
import  Testimonial from './components/testimonial'
import './style.css'
import '../layout/frontend.css'
import '../layout/responsive.css'
import Newsletter from './components/newsletter';
import PopularProducts from './components/popularproducts';
import SingleBanner from './components/singlebanner';
import ScrollToTop from '../layout/scrollToTop';


class Home extends Component {

    render(){
        return(
            
            <div className="home   header-sticky header-v5 hide-topbar-mobile">
            <div id="page" className="hfeed site">
                <Navbar />
                    {/* <div className="bg-light jumbotron h-100">

                        <div className="container">
                            <div className="px-0">
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-6">
                                        {/* <div className="subheading mb-3">
                                        <span>WORK FROM HOME</span>
                                        </div> 
                                        <h1 className="h1 my-3 text-left">
                                        Our App brings the team together, wherever you are
                                        </h1>
                                        <h4 className="h4 ">
                                        With all of your communication and tools in one place, remote
                                        teams will stay productive no matter where you’re working
                                        from.
                                        </h4>
                                        <div className="header-button">
                                        <a href="/get-started" className="btn btn-primary c-button">
                                            Get Started
                                        </a>
                                        {/* <Link to="/login" className="btn btn-lg btn-primary mr-3 mr-lg-4">
                                        TRY Our App FOR FREE
                                    </Link> 
                                        <a
                                            href="/"
                                            className="btn btn-outline-primary c-button c-button-2"
                                        >
                                            LEARN MORE
                                        </a>
                                        </div>
                                        <small>
                                        Need to create a workspace?{' '}
                                        <a href="/get-started/create">Get started</a>
                                        </small>
                                    </div>
                                    <div className="col-lg-6">
                                        {/* <img src="img2.png" className="img-fluid" alt="" /> 
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div> */}

                <Hero />
                
                <Recommended />

                <Banner />
                <Category />
                <Menu />
                {/* <Banner /> */}
                <SingleBanner />

                <PopularProducts />
                {/* <Newsletter /> */}
                <Testimonial />
                <ContentArea />

                {/* <ScrollToTop /> */}
                <Footer />
            </div>
            </div>
        )
    }
}

export default Home;
