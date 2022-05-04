import React from 'react';

import { useLocation } from 'react-router-dom';
import { useState, useEffect} from 'react';
import axios from 'axios'
import { publicRequest } from '../requestMethods'
import Navbar from '../layout/navbar';
import Footer from '../layout/footer';


const Search = () => {



    const search = useLocation().search;
    const query = new URLSearchParams(search).get("query");

    const [product, setProduct] = useState({});
    const [products, setProducts] = useState({});

    // let uri = window.location.search.substring(1)
    // console.log(uri, "iddddd");
    // const res = await axios.post( "http://127.0.0.1:8000/api/products/search/", {

    
    console.log(query, "query");

    useEffect(() => {
        const getProduct = async() => {
            try{
                const res = await axios.post( "https://sage-server.herokuapp.com/api/products/search/", {
                // const res = await axios.post( "http://127.0.0.1:8000/api/products/search/", {
                    'query': query
                });
                console.log(res.data);
                setProduct(res.data);                
            }catch{

            }
        }
        query && getProduct()
    }, [query])

    const number = product.length
    console.log(number, "numberrrrr");
    // useEffect(()=>{
    //     const getProduct = async ()=>{
    //         try{
    //             const res = await axios.post( "products/search/", {'query': query} );
    //             setProduct(res.data)
    //             console.log(products);
    //         }catch(err){}
    //     };
    //     getProduct()
    // }, [query])

    const getProductRow = () =>{
        if(number >= 2){
            return product.map((prod)=>{
        
                return(
                    <div className="col-lg-3 col-md-6 col-sm-12" key={prod.id}>
        
                        <div className="item p-3" >
                            <a href={`/our-menu/product/${prod.id}`} className="product__link">
                                <div className="prod-div h-100 text-center">
                                        {/* <span className="like-icon">
                                            {prod.name}
                                        </span> */}
                                    <img className="mr-2 img-fluid img-loop" src={prod.image}  />
                                </div>
                            </a>
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
                                    <span className="kt-widget5__desc pl-4">$<span>{ prod.price}</span></span>: (
                                            <span className="bg-danger text-white p-2">No price yet</span> 
                                        )}
                                </div>
                                    
                                <a className="btn btn-outline-dark order " href={`/our-menu/product/${prod.id}`} style={{borderRadius: '0px'}}>
                                Order Now <i className="fas fa-cart-plus ml-1"></i>
                            </a>
                                
                                            
                            </div>
                        </div>    
                                
                    </div>
                )
            })
        } else if(number == 1){
            return(
                <div className="col-lg-3 col-md-6 col-sm-12" key={product[0].id}>
    
                    <div className="item p-3" >
                        <a href={`/our-menu/product/${product[0].id}`} className="product__link">
                            <div className="prod-div h-100 text-center">
                                    {/* <span className="like-icon">
                                        {prod.name}
                                    </span> */}
                                <img className="mr-2 img-fluid img-loop" src={product[0].image}  />
                            </div>
                        </a>
                        <div className="my-3 text-left">
                            <h4>
                                <a className="kt-widget5__title " href={`/our-menu/product/${product[0].id}`}>
                                    {product[0].name} 
                                </a>
                            </h4>
                            <div className=" my-2">
                                {product[0].deleted_price && 

                                <span className="mr-3" style={{marginRight:"10px"}}>
                                        <del> $<span>{product[0].deleted_price}</span></del>
                                </span> 
                                }
                                
        
                                {product[0].price ? 
                                <span className="kt-widget5__desc pl-4">$<span>{ product[0].price}</span></span>: (
                                        <span className="bg-danger text-white p-2">No price yet</span> 
                                    )}
                            </div>
                                
                            <a className="btn btn-outline-dark order " href={`/our-menu/product/${product[0].id}`} style={{borderRadius: '0px'}}>
                            Order Now <i className="fas fa-cart-plus ml-1"></i>
                        </a>
                            
                                        
                        </div>
                    </div>    
                            
                </div>
            )
        }else{
            return(
                <h1>No product found</h1>
            )
        }
    }

    

    return (
        <>
            <div className="home header-sticky  header-v5 hide-topbar-mobile">
                <div id="page" className="hfeed site">
                    <Navbar />
                        <div className="page-header has-image">
                            <div className="page-header-content">
                                <div className="featured-image" style={{backgroundImage: 'url(/assets/img.png)'}}></div>

                                <div className="container">
                                    <h1>Search term: {query}</h1>
                                    <nav className="breadcrumbs">
                                        <a href="#/">Search</a>
                                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                                        <span> {query} </span>
                                    </nav>
                                </div>
                            </div>
                        </div>

                        <section className="products">
                            <div className="kt-portlet container">

                                <div className="row">
                                    { query && getProductRow()
                                    
                                    }
                                    
                                </div>
                            </div>
                        </section>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Search;
