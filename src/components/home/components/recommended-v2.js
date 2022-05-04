import React, { Component, useState, useEffect } from 'react'

import 'jquery/dist/jquery';
import 'popper.js/dist/umd/popper';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import './recommended.css'
import {RecommendedProducts} from './../../data'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import {Link} from 'react-router-dom'




const Recommended2 =()=>{

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const state={
        responsive:{
            0:{
                items:1
            },
            650:{
                items:2
            },			
            1024:{
                items:3
            },
            1200:{
                items:4
            }
        },
    }

    

    // useEffect(()=>{
    //     const getProducts = async ()=>{
    //         try{
    //             const res = await axios.get( "http://127.0.0.1:8000/api/products/" );
    //             setProducts(res.data)
    //             // console.log(res)
    //         }catch(err){}
    //     };
    //     getProducts()
    // }, [products])

    useEffect(()=>{

        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        const getProducts = async ()=>{
            try{
                const res = await axios.get( "http://127.0.0.1:8000/api/products/?is_recommended=True", { cancelToken: source.token } );
                setProducts(res.data)
                // console.log(res)
            }catch(err){
                if(axios.isCancel(err)){
                    console.log("cancelled");
                } else{
                    throw err
                }
            }
        };
        getProducts();
        return () => {
            source.cancel();
        }
    }, [products])

// .sort(()=> Math.random() - Math.random())
//    const array=[products];
// const random = products.sort(() => .5 - Math.random()).slice(0, 5);

// const selected = shuffled.slice(0,5);
// console.log(random)


// const item = products[~~(Math.random() * products.length)];
// console.log(item)

    const getProductRow = () =>{
        return products.sort((a, b)=> a.price - b.price).slice(0,4).map((prod, index)=>{
            return(
                <div className="col-lg-3 col-md-6 col-sm-12" key={prod.id}>
                    <div className="item p-3" >
                    <a href={`/our-menu/product/${prod.id}`}>
                        <div className="card h-100 text-center">
                            <img  className="mr-2 card-img-top img-fluid img-loop" src={prod.image} alt="Products" />
                        </div>  
                        </a>
                        <div className="my-3 text-center">
                            <h4>
                            <a className="kt-widget5__title " href={`/our-menu/product/${prod.id}`}>
                            {prod.name}
                            </a>
                            </h4>
                            <div className=" my-2">
                                <span className="mr-3 d-inline-block" style={{marginRight:"10px"}}>
                                    <del> $<span>{prod.deleted_price}</span></del>
                                </span>

                                {prod.price ? 
                                <span className="kt-widget5__desc pl-4">
                                $<span>{ prod.price}</span>
                                </span>: (
                                    <span className="bg-danger text-white p-2">No price yet</span> 
                                )}
                            </div>
                            

                        </div>
                        <div className=" d-flex justify-content-center align-items-center mt-3"> 
                            <button className="btn btn-outline-dark mr-3"><i className="fa fa-heart"></i></button>

                            
                            <button className="btn btn-outline-dark order ">
                                Order Now <i className="fas fa-cart-plus ml-1"></i>
                            </button>
                        
                        </div> 
                    </div>    
                </div>
            )
        })

        

    }

    // render(){
        return(
            <React.Fragment>
                <section className="bg-white ">
                    <div className="container">
                        <div className="row d-flex align-items-center text-center justify-content-center">
                            <div className="col-12 ">
                                <div className="section-title  mb-4 pb-4">
                                    <h2>Recommended</h2>

                                </div>
                            </div>
                        </div>
                        {/* <OwlCarousel 
                        items={4} 
                        className="owl-theme recommended px-1 px-lg-5" 
                        
                        nav 
                        margin={10} 
                        autoPlay={true}
                        smartSpeed= {800}
                        autoplaySpeed= {2000}
                        navspeed= {1000}
                        paginationspeed= {1000}
                        slidespeed={1000}
                        dots={false} 
                        responsive={state}
                        
                        > */}
                        <div className="row recommended">
                            {getProductRow()}
                        </div>

                            {/* </OwlCarousel> */}
                        
                        
                    </div>
                </section>
            </React.Fragment>
        )
    // }

    

    
}

export default Recommended2;

