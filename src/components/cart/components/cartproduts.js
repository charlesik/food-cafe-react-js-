import React from 'react'



const getcartproduct = () =>{
    return CartItems.map((prod)=>{

        return(
            <div className="col-lg-4 col-md-6 col-sm-12 p-4 cat" key={prod.id} >
                <div className="item mb-2" onClick={() => (console.log(prod.id, prod.category_name))}>

                    <div className="media d-flex align-items-center justify-space-between">
                        <div className="kt-widget5__pic" >
                            <span className="category-text">
                                {prod.category_name}
                            </span>
                            <img  className="mr-2 img-fluid cat-img-loop" src={prod.bg_image}  />


                            
                        </div>
                        
                    </div>
                    
                </div>
            </div>


        )
    })

}
