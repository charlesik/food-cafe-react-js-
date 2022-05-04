import React, { useState, useEffect } from 'react'
import {SingleCategoryMenu} from './../../data'
import Product from '../../home/components/product'
import '../../home/components/category.css'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../style.css'



const onClick = () => {
    console.log('index')
}



const CategoryProducts = ({cat, filters, sort}) => {
    
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filtProducts] = useState(()=>{
        console.log("yoo")

    });


    useEffect(()=>{
        const getProducts = async ()=>{
            try{
                const res = await axios.get( cat ? `https://sage-server.herokuapp.com/api/products/?category=${cat}` : "https://sage-server.herokuapp.com/api/products/" );
                setProducts(res.data)
            }catch(err){}
        };
        getProducts()
    }, [cat])
    
    useEffect(() => {
        cat && setFilteredProducts(
            products.filter(item=> Object.entries(filters).every(([key, value])=>
                item[key].include(value)
            ))
        )
    }, [products, cat,filters])

    useEffect(()=>{
        if((sort === "Latest")){
            setFilteredProducts((prev)=>
                [...prev].sort((a, b)=> a.date_added - b.date_added)
                );
                // console.log(setFilteredProducts)
        } else if ((sort === "asc")){
            setFilteredProducts((prev)=>
            [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilteredProducts((prev)=>
            [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort])



    const getProductRow = () =>{
        return filteredProducts.map((prod)=>{
    
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
    }
    

    
        return(
            <React.Fragment>
                <div className="row">
                    {getProductRow()}
                </div>
            </React.Fragment>
        )
    }
    
export default CategoryProducts;
