import React from 'react'
import Footer from '../layout/footer'
import Navbar from '../layout/navbar';
import Hero from './components/hero';
import CategoryProducts from './components/products';
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';
import { useState, useEffect} from 'react';
import {axios} from 'axios'
import './style.css'
import { publicRequest } from '../requestMethods'
import ScrollToTop from '../layout/scrollToTop';


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



const Categories = () => {
    const location = useLocation();
    const cat = (location.pathname.split("/")[2]);
    const [category, setCategory] = useState({});

    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("Latest");

    const handleFilters = (e) =>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]:value
        });
    }





    // useEffect(() => {
    //     const getProduct = async() => {
    //         try{
    //             const res = await publicRequest.get("/category/" + cat)
    //             setCategory(res.data);
    //             console.log(category);
    //         }catch{

    //         }
    //     }
    //     getProduct()
    // }, [cat])

   
    return (
        <>
        <div className="home   header-sticky  header-v5 hide-topbar-mobile">
                <div id="page" className="hfeed site">
                    <Navbar />
                    <Hero cat={cat}/>
                    <section className="products">
                        <div className="kt-portlet container">
                            <FilterContainer>
                                {/* <Filter>
                                    <FilterText>
                                        Filter Meals
                                    </FilterText>
                                    
                                    <Select name="color" onChange={handleFilters}>
                                        <Option disabled>
                                            Color
                                        </Option>
                                        <Option>
                                            white
                                        </Option>
                                        <Option>
                                            red
                                        </Option>
                                        <Option>
                                            yellow
                                        </Option>
                                        <Option>
                                            green
                                        </Option>
                                        <Option>
                                            blue
                                        </Option>
                                    </Select>
                                    <Select name="size" onChange={handleFilters}>
                                        <Option disabled>
                                            Size
                                        </Option>
                                        <Option>
                                            XS
                                        </Option>
                                        <Option>
                                            S
                                        </Option>
                                        <Option>
                                            M
                                        </Option>
                                        <Option>
                                            L
                                        </Option>
                                        <Option>
                                            XL
                                        </Option>
                                    </Select>
                                </Filter> */}

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
                            </FilterContainer>

                            <CategoryProducts cat={cat} filters={filters} sort={sort}/>
                        </div>
                    </section>
                    {/* <ScrollToTop /> */}
                    <Footer />  
                </div>
          </div>
        </>
    )
}

export default Categories;