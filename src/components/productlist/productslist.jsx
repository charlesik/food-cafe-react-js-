import React, { useState, useEffect } from 'react'
import Hero from './components/hero'
import Footer from '../layout/footer'
import Navbar from '../layout/navbar'
import ContentArea from '../home/components/cta'
import Products from './components/products'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ScrollToTop from '../layout/scrollToTop'



const FilterContainer = styled.div`
    display: flex;
    justify-content:space-between;
    margin-bottom:20px

`;
const Filter = styled.div`
    margin:20px;
`;
const FilterText = styled.span`
    font-size:20px;
    font-weight:600;
    margin-right:20px;

`;
const Select = styled.select`
    padding:10px 20px;
    margin-right:20px;
`;

const Option = styled.option``;


const ProductsList = () => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sort, setSort] = useState("Latest")
    const [filters, setFilters] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const handleFilters = (e) =>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]:value
        });
    }

    // const res = await axios.get( "http://localhost:8000/api/products/" );
    

    useEffect(()=>{
        const getProducts = async ()=>{
            setIsLoading(false)
            try{
                
                const res = await axios.get( "https://sage-server.herokuapp.com/api/products/" );
                    // const res = await axios.get( "http://localhost:8000/api/products/" );
                    
                setProducts(res.data)
                // console.log(res)
                
            }catch(err){}
            // setIsLoading(false);
            
        };
        
        getProducts()
    }, [products])


    useEffect(() => {
        products && setFilteredProducts(
            products.filter(item=> Object.entries(filters).every(([key, value])=>
                item[key].include(value)
            ))
        )
    }, [products, filters])

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


    return (
        <>
            <div className="home   header-sticky  header-v5 hide-topbar-mobile">
                <div id="page" className="hfeed site">
                    <Navbar />
                    <Hero />
                    
                            {/* <FilterContainer>
                            
                                <Filter>
                                    <FilterText>
                                        Sort Meals
                                    </FilterText>
                                    <Select onChange={(e)=>setSort(e.target.value)}>
                                        <Option value="latest">Latest</Option>
                                        <Option value="asc">Price (asc)</Option>
                                        <Option value="desc">Price (desc)</Option>
                                    </Select>
                                </Filter>
                            </FilterContainer> */}

                    <Products products={products} filteredProducts={filteredProducts} isLoading={isLoading}/>
                    <ContentArea />
                    {/* <ScrollToTop /> */}
                    <Footer/>
                </div>
            </div>

        </>
    )
}

export default ProductsList;