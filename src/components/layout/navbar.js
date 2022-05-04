import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import './navbar.css'
import TextInputGroup from './../TextInputGroup';

import {Badge} from "@material-ui/core"
import { Link, withRouter } from 'react-router-dom';
import {ShoppingCartOutlined } from '@material-ui/icons';
import {CategoryItems} from '../data'

import Announcement from '../home/components/announcement'
import TopBar from './topbar';
import {useSelector} from 'react-redux'

import SearchButton from './searchbutton';
import MobileNav from './sidebar';


const Navbar = () =>{

 

  const getCategoryRow = () =>{
    return CategoryItems.map((cat)=>{

        return(
          <li key={cat.id}>
            <Link to={`/category/${cat.category_name}`}>{cat.category_name}</Link>
          </li>

        )
    })
  }



    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="\profile" className="nav-link">
            Profile
          </Link>
        </li>

        <li className="nav-item">
          <a href="/" className="nav-link">
            LogOut
          </a>
        </li>
      </ul>
    );

    const quantity = useSelector(state=>state.cart.quantity)
    // const quantity = null
    // const user = useSelector((state) => state.user.currentUser);
    const user = null;
    // console.log(user)
    return (
      <React.Fragment>
        <Announcement />
          <TopBar />

            {/* <div id="mf-header-minimized" className="mf-header-minimized mf-header-v5"></div> */}
            <header id="masthead" className="site-header">
                <div className="header-main clearfix container">
                    <div className="site-contact">
                        <div className="container">
                            <div className="menu-row justify-content-between">
                                <div className="site-logo col-md-9 col-sm-9 col-xs-9">
                                    <a href="/" className="logo">
                                        <img src="/assets/logo.svg" alt="Capat" className="logo"/>
                                    </a>
                                    <h1 className="site-title"><a href="#" rel="home">Sage</a></h1>
                                </div>
                                <div className="site-extra-text hidden-md hidden-sm hidden-xs">
                                    <div className="widget induscity-social-links-widget">
                                        <a href="#" className="share-facebook tooltip-enable social" title="Facebook" target="_blank">
                                          <i className="fab fa-facebook"></i>
                                        </a>
                                        <a href="#" className="share-twitter tooltip-enable social" rel="nofollow" title="Twitter" target="_blank">
                                          <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href="#" className="share-skype tooltip-enable social" rel="nofollow" title="Instagram" target="_blank">
                                          <i className="fab fa-instagram"></i>
                                          </a>
                                        {/* <a href="#" className="share-linkedin tooltip-enable social" rel="nofollow" title="Linkedin" target="_blank"><i className="fab fa-linkedin"></i></a> */}
                                    </div>
                                    <div className="widget_text widget widget_custom_html">
                                        <div className="textwidget custom-html-widget">
                                          {/* <Route exact path="/signup">
                  {user ? <Redirect to="/" /> : <SignUp/> }
                </Route> */}
                                            <Link to="/cart">
                                              <div className="header-contact mail">
                                              
                                                {/* <div> */}
                                                    <h5 className="" style={{marginLeft:'15px'}}>Cart</h5> 
                                                
                                                <Badge badgeContent={quantity} color="primary">
                                                  <ShoppingCartOutlined/>
                                                </Badge>
                                              {/* </div> */}
                                            </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="widget_text widget widget_custom_html menu">
                                        <div className="textwidget custom-html-widget has_children ">
                                            <div className="header-contact mail ">
                                                <div>
                                                {user ? 
                                                    <span><h5>user is logged in</h5></span> : 

                                                   <span><h5><a href="/login">Login</a> / <a href="/signup">Sign Up</a></h5> </span>
                                                }

                                                {/* {user ? 
                                                    <span>user logged in</span>: 

                                                   <span> user not logged in</span>
                                                } */}
                                                </div>

                                                <i className="fa fa-user"></i>
                                                
                                                {/* <PersonOutlineOutlined/> */}

                                            </div>
                                            
                                        </div>
                                        
                                    </div>
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
                    <div className="site-menu container">
                        <nav id="site-navigation" className="main-nav primary-nav nav ">
                            <ul className="menu mx-auto">
                                <li className="nav_item"><a href="/">Home</a></li>
                                <li className="nav_item"><a href="/our-menu">Our Menu</a></li>
                                <li className="nav_item"><a href="/categories">Categories</a>
                                
                                    {/* <ul className="sub-menu">
                                      
                                        <li><a href="/categories">All Categories</a></li>
                                        {getCategoryRow()}
                                        
                                    </ul> */}
                                  </li>
                                  {/* <li className="has-children nav_item"><a href="" className="dropdown-toggle">Shop</a>
                                      <ul className="sub-menu">
                                          <li><a href="/cart">Cart</a></li>
                                          <li><a href="/single-product">Single Product</a></li>
                                          <li><a href="/#">Checkout</a></li>
                                          <li className="last-child"><a href="">My account</a></li>
                                      </ul>
                                  </li> */}
                                
                                
                                
                                <li className="nav_item"><a href="https://github.com/charlesik">About Us</a></li>
                                {/* <li className="nav_item"><Link to='/login' className="nav-link">Login</Link></li> */}

                                <li className="nav_item"><a href="/">Blog</a></li>
                              <li className="nav_item"><a href="/">Contact</a></li>

                              {/* {user ? <li className="active nav_item d-none"><a href="/login">Login</a></li> : <li className="active nav_item"><a href="/login">Login</a></li>}


                              {user ? <li className="active nav_item d-none"><a href="/signup">Signup</a></li> : <li className="active nav_item "><a href="/signup">Signup</a></li>}
                                 */}


                                

                                

                        
                                <li id="mf-active-menu" className="mf-active-menu"></li>
                            </ul>

                            <SearchButton />
                            
                        </nav>

                        
                    </div>
                    
                </div>
            </header>

            

            
      </React.Fragment>

       
    
    );
  // }
}
export default Navbar;

{/* <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom sticky-top">
         <div className="container">
           <a className="navbar-brand" href="/">
             <img src="assets/logo.svg" className="img-fluid" />
           </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar1"
            aria-controls="navbar1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar1">
            <ul className="navbar-nav mx-auto">
              {/* <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li> 

              <li className="nav-item">
                <a href="" className="nav-link">
                  Why Our App?
                </a>
              </li>
             
              <li className="nav-item">
                <a href="" className="nav-link">
                  Resources
                </a>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">
                  Enterprise
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">
                  Pricing
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/signup" className="nav-link">
                        Sign Up
                    </Link>
                </li>
            </ul>

            {/* {localStorage.usertoken ? userLink : loginRegLink} 
          </div>
        </div>
      </nav>
     */}
