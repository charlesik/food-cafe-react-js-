import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import RelatedProducts from './components/related'
import Reviews from './components/reviews'
import ProductDetails from './components/product-details'
import SideBar from './components/sidebar'
import Navbar from '../layout/navbar'
import Navbar2 from '../layout/navbar2'
import Footer from '../layout/footer'
import '../layout/style.css'
import './components/details.css'
import './single.css'
import Hero from './components/hero'

import { useLocation } from 'react-router-dom';
import { useState, useEffect} from 'react';
import {axios} from 'axios'
import { publicRequest } from '../requestMethods'
import ScrollToTop from '../layout/scrollToTop'
import toast, { Toaster } from 'react-hot-toast';


const SingleProduct = () => {

    const location = useLocation();
    const id = (location.pathname.split("/")[3]);
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(10);
    const [cat, setCat] = useState()



    useEffect(() => {
        const getProduct = async() => {
            try{
                const res = await publicRequest.get("/products/" + id)
                
                setProduct(res.data);
                setCat(res.data.category)
                // console.log(cat, "cattt");
                
            }catch{

            }
        }
        getProduct()
    }, [id])

    return(
        <React.Fragment>
            <Toaster/>
            <div className="home   header-sticky  header-v5 hide-topbar-mobile">
                <div id="page" className="hfeed site">
                    <Navbar />
                    <Hero product={product}/>
                    <div id="content" className="site-content woocommerce sidebar-content">
                        <div className="container">
                            <div className="single row">
                            <SideBar></SideBar>
                                <div id="primary" className="content-area col-md-8 col-sm-12 col-xs-12">
                                    <div className="product">
                                        <ProductDetails product={product}></ProductDetails>

                                        <Reviews product={product} props={product}></Reviews>

                                        <RelatedProducts product={product} cat={cat}></RelatedProducts>
                                        
                                    </div>
                                </div>

                                
                            
                            </div>
                        </div>
                    </div>
                    {/* <ScrollToTop /> */}
                
                <Footer></Footer>
                
                </div>


            </div>
        
        </React.Fragment>
    )
}

export default SingleProduct;