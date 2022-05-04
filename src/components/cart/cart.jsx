import React, {useEffect, useState} from 'react'
import Navbar from '../layout/navbar'
import Hero from './components/hero'
import Footer from '../layout/footer'
import ContentArea from '../home/components/cta'
import {CartItems} from '../data'
import {useSelector, useDispatch} from 'react-redux'
import { addProduct, clearCart, removeProduct } from '../../redux/cartRedux';
import ClearRounded from '@material-ui/icons/ClearRounded';
import {Link, useHistory} from 'react-router-dom'
import axios  from 'axios'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Form } from 'react-bootstrap';
import { useTheme } from '@material-ui/styles'
import './cart.css'
import { Box, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@material-ui/core'
import SelectInput from '@material-ui/core/Select/SelectInput'
import StripeCheckout from 'react-stripe-checkout';
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';
import ScrollToTop from '../layout/scrollToTop'



const KEY = 'pk_test_51KS9QcHOYXT3XuO9qWpL49f82YFfnM1heqVUS6iLbF0C0zWTzLOPYmxa6xI4WgjvYT5NAnc9anzRyLyDlxHSICpX00m39OyO40'
// const KEY = process.env.REACT_APP_STRIPE

const Cart = () =>{

    const history = useHistory()
    const dispatch = useDispatch();

    const [stripeToken, setStripeToken] = useState(null)
    const onToken = (token) => {
        setStripeToken(token);
    }

    


    const cart = useSelector(state=>state.cart)

    // console.log(cart)
    
    const [address, setAddress] = useState('');

    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const [states, setStates] = useState('')
    const [billAddress, setBillAddress] = useState('')
    const [meals, setMeals] = useState()
    const [products, setProducts] = useState()
    // cart.products
    const handleChange = (event) => {
        setStates(event.target.value);
    }

    const handleDelete = (id) =>{
        // toast.success('hellooo');

        // setProducts(products.filter((item) => item.id !== id));
        removeProduct(id, dispatch)
    }

    const onChange = (event) =>{
        setAddress(event.target.value);
    }

    // const onChange = (e) =>{
    //     const value = e.target.value;
    //     setAddress({
    //         [e.target.name]:value
    //     });
    // }
    // const handleRemove = (id) =>{
    //     cart = cart.filter((item) => item.id !== id);
    //     // deleteProduct(id, dispatch)
    // }

    const getcartproduct = () =>{
        return cart.products.map((prod)=>{
    
            return(
                <tr value={prod.name} key={prod.id}>
                    
    
                    <td className="flex_item clear_fix" width="30%" >
                    <Link to={`/our-menu/product/${prod.id}`}>
                        <img src={prod.image} alt="images" className="" width="70" height="80"/>

                        <h6 className="">{prod.name}</h6>
                    </Link>
                    </td>
    
                    <td width="10%" >
                        {/* <input name="quantity" min="0" defaultValue= type="number"/> */}
                        <p className="d-flex align-items-center justify-content-center">{prod.quantity}</p>
                    </td>
    
                    <td width="20%">
                        <span>$ {prod.price}</span>
                    </td>
                    <td width="25%">
                        <span className="color2">$ {prod.price*prod.quantity}</span>
                    </td>
                    {/* <td width="15%">
                        <div className=" remove_btn d-flex align-items-center justify-content-start">
                        <ClearRounded onClick={()=>handleRemove(prod.id)}/> <span className="ml-3">Remove</span>
                        </div>
                    </td> */}


                    
                </tr>
    
            )
        })
    
    }

    // const cartproduct = () =>{
    //     return CartItems.map((prod)=>{
    
    //         return(
    //             <li key={prod.id}>
    //                 {prod.name}
    //             </li>
                
                
    
    //         )
    //     })
    
    // }

  
    const smsOrder = (event) => {
        setOpen(true);
        toast.success('Your order was successful', {
            duration: 4000,
            position: 'bottom-center',
            // Styling
            style: {},
            className: '',
            // Custom Icon
            // icon: '👏',
            // Change colors of success/error/loading icon
            // iconTheme: {
            //   primary: '#000',
            //   secondary: '#fff',
            // },
            // Aria
            ariaProps: {
              role: 'status',
              'aria-live': 'polite',
            },
          });
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    



    const onSubmit = (event) => {
        const data = {
            state: states,
            address: address,
            // meals: cartproduct()
        };
        // console.log(data);

    }

    const clearCartItems =() =>{
        dispatch(clearCart())
    }

    const quantity = useSelector(state=>state.cart.quantity)
    // console.log(quantity);
    // const RemoveCartItem =() =>{
    //     dispatch(removeProduct({...product, quantity}))
    // }

    // const user = useSelector((state) => state.user.currentUser);
    const user = "praise";

    useEffect(()=> {
        const makeRequest = async () => {
            try{
                const res = await axios.post(
                    "https://sage-server.herokuapp.com/api/payment/", {
                        tokenId: stripeToken.id,
                        amount: cart.total,
                        description : `Total payment is $${cart.total}`,
                        cart: cart.products
                        // billingAddress: billAddress
                    }
                );
                console.log(res.data);
                dispatch(clearCart());
                toast.success('Your order was successful', {
                    duration: 6000,
                    position: 'bottom-center',
                    // Styling
                    style: {},
                    className: '',
                    // Custom Icon
                    // icon: '👏',
                    // Change colors of success/error/loading icon
                    // iconTheme: {
                    //   primary: '#000',
                    //   secondary: '#fff',
                    // },
                    // Aria
                    ariaProps: {
                      role: 'status',
                      'aria-live': 'polite',
                    },
                  });
                  
                    // history.push("/our-menu", {data: res.data});
                // setTimeout(() => {
                //     Swal.fire({
                //         icon: 'success',
                //         title: 'Weldone!',
                //         text: 'You have succesfully placed an order!',
                //         footer: '<a href="/our-menu">Continue ordering?</a>'
                //     });
                //   }, 1000);
            } catch(err){
                console.log(err)
            }
        };
        stripeToken && cart.total >= 1 && makeRequest()
    }, [stripeToken, cart.total]);

    // cart.total >= 1 && 
    return (
        <>
        <Toaster/>
            <div className="home   header-sticky  header-v5 hide-topbar-mobile">
                <div id="page" className="hfeed site">
                    <Navbar />
                    <Hero /><div className="site-content">
                        {user ? 
                            
                            <div className="cartpage cart">
                                <div className="shop_cart_table container">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="table-responsive">
                                                <table className="table table-1">
                                                    <tbody>
                                                        <tr>
                                                            <th><span>Meal</span></th>
                                                            <th><span>Quantity (Plates)</span></th>
                                                            <th><span>Meal Price</span></th>
                                                            <th><span>Total</span></th>
                                                            {/* <th><span>Remove</span></th> */}
                                                        </tr>

                                                        {/* {getcartproduct()} */}
                                                        {quantity == null ? (
                                                        <tr>
                                                            <td colSpan="8">
                                                                <span className="h1 py-3"> Cart is empty, <a href="/our-menu" className="text-underline empty_cart_link">go back to our menu</a></span>
                                                            </td>
                                                        </tr>
                                                        ) : getcartproduct()}

                                                        </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        {/* <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <input placeholder="Enter Coupon Code..." className="coupon" type="text"/>
                                            <button className="cart_btn1 mf-btn-2 tran3s color1_bg">Apply Coupon</button>
                                        </div> */}
                                        {quantity !== null && (
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 cart_update text-right">


                                                <button className="mf-btn-2 tran3s" onClick={clearCartItems}>Clear Cart</button>
                                                
                                            </div>
                                            
                                            )
                                        }


                                        
                                    </div>

                                    <div className="row shipping_address align-items-center justify-content-center">
                                        

                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 wow fadeInUp ">
                                            <h4>Cart Totals</h4>
                                            <div className="table-responsive">
                                                <table className="table table-2">
                                                    <tbody>
                                                        <tr>
                                                            <td><span>Cart Subtotal</span></td>
                                                            <td><span>$ {cart.total}</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Shipping and Handling</span></td>
                                                            <td><span>Free Shipping</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Order Total</span></td>
                                                            <td><span>$ {cart.total}</span></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div className="d-flex align-items-center justify-content-between">
                                                {/* {stripeToken ? (<span>Processing. Please wait....</span>) : ( 
                                                    onClick={()=> setBillAddress(billingAddress)}
                                                    */}

                                            {quantity !== null ? (
                                                <StripeCheckout 
                                                    name= "Sage Restaurant" 
                                                    image= "/assets/logo.svg"
                                                    billingAddress 
                                                    shippingAddress
                                                    description = {`Your total is $${cart.total}`} 
                                                    amount={cart.total*100} 
                                                    token={onToken} 
                                                    stripeKey={KEY}
                                                    
                                                    >


  
                                                        
                                                       
                                                    <button className="cart_btn2 tran3s color1_bg">Proceed to Checkout</button>
                                                        {/* {quantity == null ? (
                                                        <button className="cart_btn2 tran3s color1_bg" disabled>Proceed to Checkout</button>
                                                        ) : <button className="cart_btn2 tran3s color1_bg">Proceed to Checkout</button>} */}

                                                        
                                                </StripeCheckout>    
                                        
                                                ) : <button className="cart_btn2 tran3s color1_bg" disabled>Proceed to Checkout</button>

                                            }
                                            {/* <button className="cart_btn2 tran3s" style={{background: '#121d2f'}} onClick={smsOrder}>Order via SMS</button> */}
                                            </div>


                                            {/* <button className={`${
                                                            quantity == null ? 'disabled' : 'not-disabled'
                                                          } cart_btn2 tran3s mt-4 cart_custom-btn2`} style={{background: '#121d2f'}} onClick={smsOrder}>Order via SMS</button> */}

                                            {quantity == null ? (
                                                        <button className="cart_btn2 tran3s mt-4 cart_custom-btn2" disabled style={{background: '#121d2f'}} onClick={smsOrder}>Order via Whatsapp</button>
                                                        ) : <button className="cart_btn2 tran3s mt-4 cart_custom-btn2" disabled style={{background: '#121d2f'}} onClick={smsOrder}>Order via Whatsapp</button>}
{/* href={`https://wa.me/2349028950691?text=${}`} */}
                                            
                                            <Form onSubmit={onSubmit}>

                                                <Dialog
                                                    open={open}
                                                    onClose={handleClose}
                                                    aria-labelledby="form-dialog-title"
                                                    
                                                >
                                                    <DialogTitle id="form-dialog-title">Order Meals</DialogTitle>
                                                    <DialogContent>
                                                        <DialogContentText>
                                                        channels are where your team communicates. They're best when organized around a topic - #marketing, for example.
                                                        </DialogContentText>
                                                    <Box component="form" sx={{display: 'flex', flexWrap: 'wrap'}}>
                                                    <table className="table table-1">
                                                    <tbody>
                                                        <tr>
                                                            <th><span>Product</span></th>
                                                            <th><span>Quantity (Plates)</span></th>
                                                            <th><span>Product Price</span></th>
                                                            <th><span>Total</span></th>
                                                        </tr>

                                                        {/* {cart.products} */}

                                                        {
                                                            cart.products.map((prod)=>{
                                                                return(
                                                                    

                                                                <tr value={prod.name} key={prod.id}>
                    
    
                                                                    <td>{prod.name}</td>
                                                    
                                                                    <td>{prod.quantity}</td>
                                                    
                                                                    <td>
                                                                        <span>$ {prod.price}</span>
                                                                    </td>
                                                                    <td>$ {prod.price*prod.quantity}
                                                                    </td>
                                                                </tr>
                                                                
                                                                )
                                                            })
                                                                
                                                        }
                                                        <tr>
                                                            <td><span>Total</span></td>
                                                            <th><span>{cart.total}</span></th>
                                                        </tr>

                                                        </tbody>
                                                    </table>
                                                        

                                                        <TextField
                                                        name="address" 
                                                        margin="dense"
                                                        id="address"
                                                        label="Your Address"
                                                        type="text"
                                                        fullWidth
                                                        defaultValue=''
                                                        required
                                                        onChange={onChange} 
                                                        // input={<OutlinedInput label="Address" />}
                                                        />

                                                        <FormControl fullWidth variant="standard" required>
                                                            {/* <InputLabel id="demo-simple-select-label"> */}
                                                            <InputLabel id="demo-simple-select-label">State</InputLabel>
                                                            <Select labelId="demo-simple-select-label" 
                                                            id="demo-simple-select" 
                                                            value={states}
                                                            label="State *"
                                                            onChange={handleChange} 
                                                            >
                                                                <MenuItem value="" disabled><em>None</em></MenuItem>
                                                                <MenuItem value={'Enugu'}>Enugu</MenuItem>
                                                                <MenuItem value={'Lagos'}>Lagos</MenuItem>
                                                                <MenuItem value={'Abuja'}>Abuja</MenuItem>
                                                            </Select>

                                                        </FormControl>

                                                        <TextField
                                                        name="mobno"
                                                        margin="dense"
                                                        id="mobno"
                                                        label="Phone Number"
                                                        type="text"
                                                        fullWidth
                                                        defaultValue=''
                                                        required
                                                        onChange={onChange} 
                                                        // input={<OutlinedInput label="Address" />}
                                                        />

                                                        
                                                        {/* {getcartproduct()} */}
                                                    </Box>
                                                    </DialogContent>
                                                    <DialogActions>
                                                    <Button onClick={handleClose} color="primary">
                                                        Cancel
                                                    </Button>
                                                    <Button onClick={onSubmit} color="primary">
                                                        Order
                                                    </Button>
                                                    </DialogActions>
                                                </Dialog>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        : 
                            <div className="row d-flex align-items-center text-center justify-content-center">
                                <div className="col-12">
                                    <h2><span><a href="/login">Log in</a> to view cart</span></h2>
                                </div>
                            </div>
                        
                        }
                    </div>
                         
                        <ContentArea />
                        {/* <ScrollToTop /> */}
                    <Footer></Footer>
                
                </div>
            </div>
        
        </>
    )
}

export default Cart;
