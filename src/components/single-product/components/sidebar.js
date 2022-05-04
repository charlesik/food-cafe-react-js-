import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import PopularProducts from './popularproducts'


// export default function SideBar(){
//     return(
//         <>
//             <aside id="primary-sidebar" className="widgets-area primary-sidebar shop-sidebar col-xs-12 col-sm-12 col-md-3">
//                         <div className="induscity-widget">
//                             <div className="widget woocommerce widget_product_search">
//                                 <form className="woocommerce-product-search">
//                                     <input type="search" className="search-field" placeholder="Search products…" defaultValue=""/>
//                                     <input type="submit" defaultValue="Search"/>

//                                 </form>
//                             </div>
//                             <div className="widget woocommerce widget_product_categories">
//                                 <h4 className="widget-title">Categories</h4>
//                                 <ul className="product-categories">
//                                     <li><a href="#">Business Growth</a></li>
//                                     <li><a href="#">Consulting</a></li>
//                                     <li><a href="#">Customer Insights</a></li>
//                                     <li><a href="#">Management</a></li>
//                                     <li><a href="#">Organization</a></li>
//                                 </ul>
//                             </div>

//                             <div className="widget  widget_price_filter">
//                                 <h4 className="widget-title">Filter by price</h4>
//                                 <form>
//                                     <div className="price_slider_wrapper">
//                                         <div id="slider-range" className="price_slider"></div>
//                                         <div className="price_slider_amount clearfix">
//                                             <button type="submit" className="button">Filter</button>
//                                             <div className="price_label">
//                                                 Price:
//                                                 <input type="text" id="amount" defaultValue=""/>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </form>
//                             </div>
//                             <PopularProducts />
//                         </div>
//                     </aside>
                
//         </>
//     )
// }




// import './Sidebar.css';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const api = axios.create({
  baseURL: `http://localhost:8000/api`,
});



class SideBar extends Component {
  // function Sidebar() {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
        categories: [],
        products: [],
        id: '',
        Open: false,
        categoriesData: [],
        productsData: [],
        user: JSON.parse(localStorage.getItem('user')),
        workspace: JSON.parse(localStorage.getItem('workspace')),
        itemsToShow: 0,
        usersToShow: 0,
        expanded: false,
        userExpanded: false,
    };

    this.showMore = this.showMore.bind(this);
    this.showMoreUsers = this.showMoreUsers.bind(this);
  }

  onHandleOpen = () => {
    this.setState({
      open: true,
    });
  };

  onHandleClose = () => {
    this.setState({
      open: false,
    });
  };



  componentDidMount() {
    // setInterval(() => {
      
      const category = {
        category: this.state.categories,
      };
      
      axios
        .get(
          'https://sage-server.herokuapp.com/api/category/',
        )
        .then(
          (response) => {
            //   console.log(response);
            this.setState({
                categoriesData: response.data,
            });
          },
          (error) => {
            console.log(error);
          }
        );
       
    //   }, 1000);

    axios
      .get('https://sage-server.herokuapp.com/api/products/?is_popular=True')
      .then((response) => {
          console.log(response.data)
        this.setState({
            productsData: response.data,
        });

        console.log(this.state.productsData);
      })
      .catch((error) => {
        console.log('Error');
      });

    this.getPopularProducts();
    this.showMoreUsers();
    this.showMore();
  }



  getPopularProducts() {
    const products = {
        products: this.state.products,
    };

    
  }

  showMore() {
    this.state.itemsToShow === 4
      ? this.setState({
          itemsToShow: this.state.categoriesData.length,
          expanded: true,
        })
      : this.setState({ itemsToShow: 4, expanded: false });
  }

  showMoreUsers() {
    this.state.usersToShow === 4
      ? this.setState({
          usersToShow: this.state.productsData.length,
          userExpanded: true,
        })
      : this.setState({ usersToShow: 4, userExpanded: false });
  }



  render() {
    // const classes = useStyles();
    const { open } = this.state;
    const user = JSON.parse(localStorage.getItem('user'));
    const workspace = JSON.parse(localStorage.getItem('workspace'));

    // const [open, setOpen] = useState(false);

    return (



        <aside id="primary-sidebar" className="widgets-area primary-sidebar shop-sidebar col-xs-12 col-sm-12 col-md-4">
            <div className="induscity-widget">
                <div className="widget woocommerce widget_product_search">
                    <form method="get" className="woocommerce-product-search" action="/search">
                        <input type="search" className="search-field" placeholder="Search meals..." defaultValue="" name="query"/>
                        <input type="submit" defaultValue="Search"/>
                        {/* <button type="submit"><i className="fa fa-search"></i></button> */}

                    </form>
                </div>
                <div className="widget woocommerce widget_product_categories">
                    <h4 className="widget-title">Categories</h4>
                    <ul className="product-categories">
                        
                        {this.state.categoriesData.sort(()=> Math.random() - Math.random())
                        .slice(0, this.state.itemsToShow)
                        .map((cat, i) => (
                            <li key={cat.id} obj={cat}
                            ><a href={`/category/${cat.name}`}>{cat.name}</a></li>
                        ))}
                    </ul>
                </div>

                {/* <div className="widget  widget_price_filter">
                    <h4 className="widget-title">Filter by price</h4>
                    <form>
                        <div className="price_slider_wrapper">
                            <div id="slider-range" className="price_slider"></div>
                            <div className="price_slider_amount clearfix">
                                <button type="submit" className="button">Filter</button>
                                <div className="price_label">
                                    Price:
                                    <input type="text" id="amount" defaultValue=""/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div> */}
                <div className="widget woocommerce widget_products">
                    <h4 className="widget-title">Popular Products</h4>
                    <ul className="product_list_widget">

                        {this.state.productsData.sort(()=> Math.random() - Math.random())
                        .slice(0, 4).map((prod, i)=>(
                            <li key={prod.id}>
                            <a href={`/our-menu/product/${prod.id}`} key={prod.id}>
                                <img width="70" height="50" src={prod.image} alt=""/><span className="product-title">{prod.name}</span>
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
                        ))}
                    </ul>
                </div> 
            </div>
        </aside>
      
    );
  }
}

export default SideBar;
