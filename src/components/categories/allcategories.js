import React, { Component, useState, useEffect } from 'react'
// import { Navbar } from 'react-bootstrap'
import Navbar from '../layout/navbar'
import Footer from '../layout/footer'
import Hero from './components/hero'
// import Categories from './components/categories'
import ContentArea from '../home/components/cta'
import axios from 'axios'
import ScrollToTop from '../layout/scrollToTop'

const Categories = () => {

    const [category, setCategory] = useState([]);




    useEffect(()=>{

        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        const getCategories = async ()=>{
            try{
                const res = await axios.get( "https://sage-server.herokuapp.com/api/category/", { cancelToken: source.token } );
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
                <div key={cat.id} obj={cat} className="col-lg-3 col-md-6 col-sm-12 p-4 cat" >
                    <a href={`/category/${cat.name}`}>
                        <div className="item mb-2">
        
                            <div className="media align-items-center justify-space-between">
                                <div className="kt-widget5__pic">
                                    <span className="category-text">
                                        {cat.name}
                                    </span>
                                    <img  className="mr-2 img-fluid cat-img-loop" src={cat.image}  />
                                </div>
                                
                            </div>
                            
                        </div>
                    </a>
                </div>

                // <div className="col-lg-4 col-md-6 col-sm-12 p-4 cat" key={cat.id} >
                //     <a href={`/category/${cat.name}`}>
                //     <div className="item mb-2">
    
                //         <div className="media d-flex align-items-center justify-space-between">
                //             <div className="kt-widget5__pic" >
                //                 <span className="category-text">
                //                     {cat.name}
                //                 </span>
                //                 <img  className="mr-2 img-fluid cat-img-loop" src={cat.image}  />
                //             </div>
                            
                //         </div>
                        
                //     </div>
                //     </a>
                // </div>
    
            )
        })
    
        
    
    // }
    }



        return(
            <React.Fragment>
                <Hero category={category}/>
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
    
// export default Categories;


export default function AllCategories() {
    return (
        <>
            <div className="home   header-sticky  header-v5 hide-topbar-mobile">
                <div id="page" className="hfeed site">
                    <Navbar />
                    
                    <Categories />
                    <ContentArea />
                    {/* <ScrollToTop /> */}
                    <Footer />
                </div>
            </div>
        </>
    )
}
