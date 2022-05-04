import React, { useEffect, useState, Component } from 'react'
import './category.css'
import {PopularProductsItems} from '../../data'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { publicRequest } from '../../requestMethods'

const PopularProductsDemo = () => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);


    // useEffect(() => {
    //     const abortController = new AbortController()
    //     const signal = abortController.signal

    //     const getProducts = async() => {
    //         try{
    //             const res = await publicRequest.get("/products/?is_popular=True", {signal: signal})
    //             setProducts(res.data);
    //         }catch{}
    //         return function cleanup(){
    //             abortController.abort()
    //         }
    //     }
    //     getProducts()
        
        
    // }, [products])



    useEffect(()=>{

        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        const getProducts = async ()=>{
            try{
                const res = await axios.get( "http://127.0.0.1:8000/api/products/?is_popular=True", { cancelToken: source.token } );
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




    const getCategoryRow = () =>{
        return products.slice(0,3).map((prod)=>{
            return(
                <div className="col-lg-12 col-md-6 col-sm-12" key={prod.id}>
                    <div className="item p-3">

                        <div className="media d-flex align-items-center justify-space-between">
                            <div className="kt-widget5__pic"> 
                                <a href={`/our-menu/product/${prod.id}`}>
                                    <img  className="mr-2 img-fluid cat-img-loop" src={prod.image}  />
                                </a>
                            </div>
                            <div className="media-body">
                                {/* <div className="card-body "> */}
                                <h4>
                                <a href={`/our-menu/product/${prod.id}`}>

                                        {prod.name}
                                    </a>
                                    </h4>
                                <div className=" my-2">
                                    <span className="mr-3 d-inline-block" style={{marginRight:"10px"}}>
                                        <del> $<span>{prod.deleted_price}</span> </del>
                                    </span>

                                    {prod.price ? <span className="kt-widget5__desc pl-4">
                                    $<span>{ prod.price}</span>
                                    </span>: (
                                        <span className="bg-danger text-white p-2">No price yet</span> 
                                    )}
                                </div>
                                    <p className="kt-widget5__desc">
                                        {prod.short_description}
                                    </p>
                                    <div className=" d-flex justify-space-between menu-btns align-items-center mt-3"> 
                                        <button className="btn btn-outline-dark "><i className="fa fa-heart"></i></button>

                                        
                                        <a className="btn btn-outline-dark order" href={`/our-menu/product/${prod.id}`}>
                                            Order Now <i className="fas fa-cart-plus ml-1"></i>
                                        </a>
                                    
                                    </div> 

                                </div>
                            </div>
                        
                    </div>
                </div>


            )
        })

    }
        return(
            <React.Fragment>
                <section style={{background: '#f2f2f2'}}>
                    <div className="container">
                        <div className="row d-flex align-items-center text-center justify-content-center mb-4 pb-4">
                            <div className="col-12 mb-2 pb-2 section-title">
                                <h2>Popular Products</h2>
                            </div>
                            <div className="col-12">
                                <p>Create an account and start enjoying our service fetbntrny bebebe ergeh th ethth th eheth ththr ehe</p>
                            </div>
                        </div>

                        <div className="row category d-flex justify-content-center align-items-center">
                            <div className="col-lg-5">
                                <div className="d-flex align-items-center justify-content-between">
                                    <img className="img-fluid" src="/assets/icon-startup.svg" alt=""  width="100%"/>

                                </div>

                            </div>
                            <div className="col-lg-7">
                               <div className="row">
                                {getCategoryRow()}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
}



export default PopularProducts;