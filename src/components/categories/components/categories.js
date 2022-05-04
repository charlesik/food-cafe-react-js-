import React, { Component, useState, useEffect } from 'react'
import {AllCategoryItems} from './../../data'
import '../../home/components/category.css'
// import styled from 'styled-components'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Categories = () => {

    const [category, setCategory] = useState([]);




    useEffect(()=>{

        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        const getCategories = async ()=>{
            try{
                const res = await axios.get( "http://127.0.0.1:8000/api/category/", { cancelToken: source.token } );
                setCategory(res.data)
                // console.log(res)
            }catch(err){
                if(axios.isCancel(err)){
                    console.log("cancelled");
                } else{
                    throw err
                }
            }
        };
        getCategories();
        return () => {
            source.cancel();
        }
    }, [category])


    const getCategoryRow = () =>{
        return category.map((cat)=>{
    
            return(
                <div className="col-lg-3 col-md-6 col-sm-12 p-4 cat" key={cat.id} >
                    <a href={`/category/${cat.name}`}>
                    <div className="item mb-2">
    
                        <div className="media d-flex align-items-center justify-space-between">
                            <div className="kt-widget5__pic" >
                                <span className="category-text">
                                    {cat.name}
                                </span>
                                <img  className="mr-2 img-fluid cat-img-loop" src={cat.image}  />
                            </div>
                            
                        </div>
                        
                    </div>
                    </a>
                </div>
    
            )
        })
    
        
    
    // }
    }



        return(
            <React.Fragment>
                <section style={{background: '#f2f2f2'}}>
                    <div className="container">
                        

                        <div className="row category d-flex justify-content-center align-items-center">
                            {getCategoryRow()}
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
    
export default Categories;
