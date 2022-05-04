import { ShoppingCartOutlined } from '@material-ui/icons'
import React, { Component } from 'react'
import {Badge} from "@material-ui/core"
import { Link } from 'react-router-dom'
import Announcement from '../home/components/announcement'
import './navbar.css'
import SearchButton from './searchbutton'
import MobileNav from './sidebar'
import './style.css'

import {useSelector} from 'react-redux'

export default function Navbar2(){
    const quantity = useSelector(state=>state.cart.quantity)

    // const quantity = null
    return(
        <React.Fragment>
            <Announcement />
            <div id="topbar" className="topbar hidden-md hidden-sm hidden-xs text-white">
            <div className="container">

                <div className="topbar-left topbar-widgets text-left clearfix">
                    <div id="custom_html-9" className="widget_text widget widget_custom_html">
                        <div className="textwidget custom-html-widget">
                            <div><i className="flaticon-sign main-color"></i>Get your sweet and delicious meals from us.</div>
                        </div>
                    </div>
                </div>

                <div className="topbar-right topbar-widgets text-right clearfix ">
                    <div className="widget induscity-office-location-widget">
                        <div className="office-location clearfix">
                            <ul className="office-1 topbar-office active" id="cargohub-office-1">
                            <li className="phone"><i className="flaticon-tool"></i>+(234) 810 683 210 8</li>
                                <li className="time"><i className="flaticon-time"></i>Mon - Sun: 05:45 - 10:00 </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <div className="header2 header-main header-auth">
                <div className="container">
                    <div className="menu-row justify-content-between">
                        <div className="site-logo col-md-9 col-sm-9 col-xs-9">
                            <a href="/" className="logo">
                                <img src="assets/logo.svg" alt="Induscity" className="logo"/>
                            </a>
                            
                        </div>
                        <div className="site-menu hidden-md hidden-sm hidden-xs">
                            <nav id="site-navigation" className="main-nav primary-nav nav">
                                <ul className="menu">
                                <li className="nav_item"><a href="/">Home</a></li>
                                <li className="nav_item"><a href="/our-menu">Our Menu</a></li>
                                <li className="nav_item"><a href="/categories">Categories</a></li>
                                    

                                <li className="nav_item"><a href="https://github.com/charlesik">About Us</a></li>
                                {/* <li className="nav_item"><Link to='/login' className="nav-link">Login</Link></li> */}

                                <li className="nav_item"><a href="/">Blog</a></li>
                              <li className="nav_item"><a href="/">Contact Us</a></li>
                                    
                                <li id="mf-active-menu" className="mf-active-menu" style={{left: '40.25px', width: '0px'}}></li></ul>
                            </nav>
                            {/* <SearchButton /> */}

                            {/* <div className="mf-header-item-button"><a href="/#" className="mf-btn cst-btn">Contact Us</a></div> */}


                        </div>
                        <div className=" col-md-3 col-sm-3 col-xs-3 navbar-toggle">
                            <div className="d-flex align-items-center justify-content-center">
                                <a href="/cart" className="shop-icon d-block  d-lg-none mr-3">
                                    <Badge badgeContent={quantity} color="primary">
                                                            
                                    <ShoppingCartOutlined/>
                                    </Badge>
                                </a>
                                
                                <MobileNav/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}