import React, {Component, useState, useEffect} from 'react'
import axios from 'axios';

const RelatedProducts = ({product, cat}) =>{
    // const [category, setCategory] = useState()
    const [products, setProducts] = useState({})

    // const productCat = {
    //     category: product.categorycategory
    // }

    console.log(product.category)
    // let category = (product.category)
    // console.log(category)

//  const category = product.category
    useEffect(()=>{
        

        const getProducts = async ()=>{
            try{

                // const res = await axios.get( `http://127.0.0.1:8000/api/products/?category=${cat}`);
                const res = await axios.get( `https://sage-server.herokuapp.com/api/products/?category=${cat}`);
// const res = await axios.get( cat ? `https://sage-server.herokuapp.com/api/products/?category=${cat}` : "https://sage-server.herokuapp.com/api/products/" );

                setProducts(res.data)
                console.log(products, "productss")
            }catch(err){}
        };
        getProducts()
    }, [cat])
        
    const number = products.length
    console.log(number, "numberrrr");
    const getProductRow = () =>{

        if(number >= 2){
           return products.slice(0, 3).map((prod)=>{
    
                return(
                    <li className="product col-sm-12 col-xs-12 col-md-4" key={prod.id}>
                        <div className="product-inner">
                            <a href={`/our-menu/product/${prod.id}`} className="woocommerce-loop-product__link"><img width="270" height="270" src={prod.image} alt=""/></a>
                            <div className="product-info">
                                <h4><a href={`/our-menu/product/${prod.id}`}>{prod.name}</a></h4>
                                <span className="price">
                                
                                    {prod.deleted_price && 

                                        <span className="mr-3" style={{marginRight:"10px"}}>
                                                <del> $<span>{prod.deleted_price}</span></del>
                                        </span> 
                                    }
                                    $<span>{prod.price}</span> 
                                </span>
                                <div className="product-footer"><a href={`/our-menu/product/${prod.id}`} className="button add_to_cart_button"><i className="fas fa-cart-plus mr-2"></i>Add to cart</a></div>
                            </div>
                        </div>
                    </li>
                )
            }) 
        }else if(number == 1){
            return(
                <li className="product col-sm-12 col-xs-12 col-md-4" key={product.id}>
                        <div className="product-inner">
                            <a href={`/our-menu/product/${product.id}`}  className="woocommerce-loop-product__link"><img width="270px" height="270px" src={product.image} alt=""/></a>
                            <div className="product-info">
                                <h4><a href={`/our-menu/product/${product.id}`} >{product.name}</a></h4>
                                <span className="price">
                                
                                    {product.deleted_price && 

                                        <span className="mr-3" style={{marginRight:"10px"}}>
                                                <del> $<span>{product.deleted_price}</span></del>
                                        </span> 
                                    }
                                    $<span>{product.price}</span> 
                                </span>
                                <div className="product-footer"><a href={`/our-menu/product/${product.id}`}  className="button add_to_cart_button"><i className="fas fa-cart-plus mr-2"></i>Add to cart</a></div>
                            </div>
                        </div>
                    </li>
            )
        }else{
            return(
                <span></span>
            )
        }
        
    }
    
    

    //   componentDidMount() {
    //     axios
    //       .get('http://127.0.0.1:8000/api/products/?is_recommended=True')
    //       .then((response) => {
    //           console.log(response.data)
    //         this.setState({
    //             productsData: response.data,
    //         });
    
    //         console.log(this.state.productsData);
    //       })
    //       .catch((error) => {
    //         console.log('Error');
    //       });
    
    //   }


        return(
            <div>

            
            {
                number && 
                <section className="related products">
                <div className="container">
                    <div className="related-section-title">
                        <h2 className="related-title mf-heading-primary">Related Products</h2>
                    </div>
                    <ul className="row products" >
                    {getProductRow()}
                    {/* <li className="product col-sm-12 col-xs-12 col-md-4">
                                    <div className="product-inner">
                                        <a href="#" className="woocommerce-loop-product__link"><img width="270" height="270" src="/assets/products/product6.jpg" alt=""/></a>
                                        <div className="product-info">
                                            <h4><a href="#">Built to Last</a></h4>
                                            <span className="price">$19.99</span>
                                            <div className="product-footer"><a href="#" className="button add_to_cart_button"><i className="fas fa-cart-plus mr-2"></i>Add to cart</a></div>
                                        </div>
                                    </div>
                                </li> */}
                    </ul>
                </div>
            </section>

   
            }

</div>
            
    )
    
    
}

export default RelatedProducts;




// import React, { Component, useState, useEffect } from 'react'
// import { Button } from 'react-bootstrap';
// import axios from 'axios';
// import {Link} from 'react-router-dom'







// class RelatedProducts extends Component {
//   // function Sidebar() {
//   constructor(props) {
//     super(props);

//     // Setting up state
//     this.state = {
//         categories: [],
//         products: [],
//         Open: false,
//         productsData: [],
//         itemsToShow: 0,
//         usersToShow: 0,
//         expanded: false,
//         userExpanded: false,
//         color: false,
//         category: this.props.product.category
//     };

//   }




//   componentDidMount() {

//     axios
//       .get(`http://127.0.0.1:8000/api/products/?category=${this.state.category}`)
//       .then((response) => {
//           // console.log(response.data)
//         this.setState({
//             productsData: response.data,
//         });

//         // console.log(this.state.productsData);
//       })
//       .catch((error) => {
//         console.log('Error');
//       });

//   }



//   render() {

//     return (

//         <section className="related products">
//                 <div className="container">
//                     <div className="related-section-title">
//                         <h2 className="related-title mf-heading-primary">Related Products </h2>
//                     </div>
//                     <ul className="products">
//                         {this.state.productsData.sort(()=> Math.random() - Math.random())
//                         .slice(0, 4).map((prod, i)=>(
//                             <li className="product col-sm-12 col-xs-12 col-md-4">
//                                     <div className="product-inner">
//                                         <a href={`/our-menu/product/${prod.id}`} className="woocommerce-loop-product__link"><img width="270" height="270" src="/assets/products/product6.jpg" alt=""/></a>
//                                         <div className="product-info">
//                                             <h4><a href={`/our-menu/product/${prod.id}`}>{prod.name}</a></h4>
//                                             <span className="price">$ {prod.price}</span>
//                                             <div className="product-footer"><a href={`/our-menu/product/${prod.id}`} className="button add_to_cart_button"><i className="fas fa-cart-plus mr-2"></i>Add to cart</a></div>
//                                         </div>
//                                     </div>
//                                 </li>

//                         ))}
                    
//                     </ul>
//                 </div>
//             </section>


                
      
//     );
//   }
// }

// export default RelatedProducts;
