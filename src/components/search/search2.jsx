import React, { Component} from 'react'

import axios from 'axios';








class SearchDemo extends Component {
  // function Sidebar() {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
        products: [],
        productsData: [],
    };
  }




  componentDidMount() {
    // setInterval(() => {
    axios
      .get( "http://127.0.0.1:8000/api/products/search/", {
        'query': query
    }).then((response) => {
        //   console.log(response.data)
        this.setState({
            productsData: response.data,
        });

        // console.log(this.state.productsData);
      })
      .catch((error) => {
      });
    
  }



//   style={{background: '#f2f2f2'}}
// {this.state.productsData.sort(()=> Math.random() - Math.random())


  render() {

    return (
  

        <div className="home header-sticky  header-v5 hide-topbar-mobile">
                <div id="page" className="hfeed site">
                    <Navbar />
                        <div className="page-header has-image">
                            <div className="page-header-content">
                                <div className="featured-image" style={{backgroundImage: 'url(/assets/img.png)'}}></div>

                                <div className="container">
                                    <h1>Search term: {query}</h1>
                                    <nav className="breadcrumbs">
                                        <a href="#/">search</a>
                                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                                        <span> {query} </span>
                                    </nav>
                                </div>
                            </div>
                        </div>

                        <section className="products">
                            <div className="kt-portlet container">

                                <div className="row">
                                    {this.state.productsData.map((prod, i)=>(
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
                                                                <del> $<span>{prod.deleted_price}</span> </del>
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
                                    ))}
                                </div>
                            </div>
                        </section>
                    <Footer />
                </div>
        </div>
      
    );
  }
}

export default SearchDemo;
