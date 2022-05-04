import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import './menu.css'
import {AllMenu} from './../../data'
import { Spinner } from 'react-bootstrap';



const Menu = () => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

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

    // https://sage-server.herokuapp.com/api/products/
    useEffect(()=>{

        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        const getProducts = async ()=>{
            try{
                const res = await axios.get( "https://sage-server.herokuapp.com/api/products/", { cancelToken: source.token } );
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

    



    const getProductRow = () =>{



        
        return products.slice(0, 12).map((prod)=>{
            return(
                <div className="col-lg-3 col-md-4 col-sm-12" key={prod.id}>
                    <div className="item p-3" >
                       

                            <div className="kt-widget5__pic text-center">
                            <a  href={`/our-menu/product/${prod.id}`}>
                                {prod.image ? 
                                    <img  className="mr-2 card-img-top img-fluid cat-img-loop menu-img-sty img-sty" src={prod.image} alt={prod.name} />
                                    : (
                                    <img  className="mr-2 card-img-top img-fluid cat-img-loop menu-img-sty img-sty" src="/assets/service1.jpg"  />

                                )}
                                </a>

                                <a className="menu-cart-icon" href={`/our-menu/product/${prod.id}`}>
                                    <i className="fas fa-cart-plus ml-1"></i>
                                </a>
                                {/* <img  className="mr-2 card-img-top img-fluid cat-img-loop" src={prod.image}  /> */}
                            </div>
                        
                        <div className="my-3 text-left">
                            <h4>
                            <a className="kt-widget5__title " href={`/our-menu/product/${prod.id}`}>
                                {prod.name}
                            </a>
                            </h4>
                            <div className=" my-2">
                            {prod.deleted_price && 

                                <span className="mr-3" style={{marginRight:"10px"}}>
                                        <del> $<span>{prod.deleted_price}</span></del>
                                </span>

                            }
        
                                {prod.price ? 
                                <span className="kt-widget5__desc pl-4">$<span>{prod.price}</span></span>: (
                                        <span className="bg-danger text-white p-2">No price yet</span> 
                                    )}
                            </div>
                            
                            {/* <a className="btn btn-outline-dark order " href={`/our-menu/product/${prod.id}`} >
                                Order Now <i className="fas fa-cart-plus ml-1"></i>
                            </a>            */}
                        </div>
                    </div>    
                            
                </div>
            )
        })
    
        
    }

        return(
            <React.Fragment>
                <section className="mf-latest-post" style={{background: '#f2f2f2'}}>
                    <div className="kt-portlet container">
                        <div className="mf-latest-post-header">
                            <div className="mf-section-title text-left dark large-size ">
                                <h2>Our Menu</h2>
                            </div>
                            <a href="/our-menu" className="mf-btn-2 cat-btn d-none d-lg-block">View More</a>
                        </div>
                        <div className="row">
                                {/* {products == null ? getProductRow() : <span className="text-center"> <Spinner
                                  animation="border"
                                  variant="secondary"
                                  size="xl"
                                  role="status"
                                  aria-hidden="true"
                                /> </span> } */}
                                {getProductRow()}

                               <div className="mf-button d-flex justify-content-center align-center style-1 margtop40">
                                    <a href="/our-menu" className="mf-btn-2 view-more d-block d-lg-none ">View More</a>
                                </div> 
                        </div>

                        


                    </div>

                    
                </section>
            
            </React.Fragment>
        )
}

export default Menu;