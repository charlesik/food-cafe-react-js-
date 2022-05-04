import React from 'react'
import './searchform.css'
import { useState } from 'react';
import cn from 'classnames'
import {Badge} from "@material-ui/core"
import { Link, withRouter } from 'react-router-dom';
import {ShoppingCartOutlined } from '@material-ui/icons';

function MobileNav() {
    const quantity = null
    const user = null
    const [open, setOpen ] = useState(null)



    return (
        <>

            <div className="navbar-toggle">
                <span id="mf-navbar-toggle" className="navbar-icon" onClick={() => {
            setOpen(!open); 
            }}>
                {/* <i className="fa fa-bars"></i> */}
                <span className="navbars-line"></span>
                </span>

            </div>

            <div className={cn("primary-mobile-nav header-v1", {open})} id="primary-mobile-nav" role="navigation">
                <span className="close-canvas-mobile-panel" onClick={() => {
                    setOpen(false)
                }}>×</span>
                <ul className="menu">
                    <li className=""><a href="/">Home</a></li>
                    <li><a href="/our-menu" className="">Our Menu</a></li>
                    <li><a href="/categories" className="">Categories</a></li>
                    <li><a href="https://github.com/charlesik" className="">About Us</a></li>
                    <li><a href="/" className="">Blog</a></li>
                    <li><a href="/" className="">Contact Us</a></li>
                    <li>
                        {user ? <span><h5>user is logged in</h5></span> 
                        : <span>
                            <h5><a href="/login">Login</a> / <a href="/signup">Sign Up</a>
                            </h5> 
                        </span>
                                                
                        }
                    </li>
                    {/* <li>
                    <Link to="/cart">
                        <Badge badgeContent={quantity} color="primary">
                                                  
                            <ShoppingCartOutlined/>
                        </Badge>
                        </Link>
                    </li> */}
                    <li className="extra-menu-item last-child">
                        <form method="get" className="sidebar-search-form" action="/search">
                            <input className="search-field" placeholder="Search..." defaultValue="" name="query" type="search" autoComplete="false"/>
                            <button className="search-btn" type="submit">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </form>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default MobileNav
