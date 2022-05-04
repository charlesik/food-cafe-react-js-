import React from 'react'
import { SidebarPopularProductsItems } from '../../data'

const getProductRow = () =>{
    return SidebarPopularProductsItems.map((prod)=>{
        return(


            <li key={prod.id}>
                <a href="#">
                    <img width="70" height="70" src={prod.image} alt=""/><span className="product-title">{prod.name}</span>
                </a>
                <del>$<span>{prod.deleted_price}</span></del> 
                
                <ins>
                    
                {prod.price ? 
                        <span className="kt-widget5__desc pl-4">
                        $
                        { prod.price}
                        </span>: (
                             <span className="bg-danger text-white p-2">No price yet</span> 
                         )}
                    
                    </ins>
            </li>

           
        )
    })

    

}


const PopularProducts = () => {
    return (
        <>
          <div className="widget woocommerce widget_products">
                                <h4 className="widget-title">Popular Products</h4>
                                <ul className="product_list_widget">

                                    {getProductRow()}

                                    
                                </ul>
                            </div>  
        </>
    )
}
export default PopularProducts;
