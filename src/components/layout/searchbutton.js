import React, {useState} from 'react'
import cn from 'classnames'
import SearchForm from './searchform'
import './search.css'


const SearchButton = () => {
    const [search, setSearch ] = useState(null)

    return (
        <React.Fragment>
        <div className={cn("mf-header-item-button menu-item-search", {search})} >
            <a className="mf-btn toggle-search" onClick={() => {
            setSearch(!search); 
            }}> 
                {search ? <i className="fa fa-times" aria-hidden="true"></i> : <i className="fa fa-search " aria-hidden="true"></i>}
                {/* <i className="fa fa-search" aria-hidden="true"></i> */}
            </a>

            <div className={cn("kt-quick-search kt-quick-search--inline", {search})} id="kt_quick_search_inline">
                <form method="get" className="kt-quick-search__form" action="/search">
                    <div className="input-group">
                        {/* <div className="input-group-prepend">
                            <span className="input-group-text">
                            <i className="fa fa-search" aria-hidden="true"></i>
                            </span>
                        </div> */}
                        
                        <input type="text" className="form-control kt-quick-search__input" placeholder="Search..." name="query" autoComplete="false"/>

                        <div className="input-group-append">
                        <button className="" type="submit">
                            <span className="input-group-text">
                                <i className="fa fa-search" aria-hidden="true"></i>
                                </span>                        
                            </button>
                            
                        </div>
                        {/* <div className="input-group-append">
                            <span className="input-group-text">
                                <i className="la la-close kt-quick-search__close"></i>
                            </span>
                        </div> */}
                    </div>
                </form>
			</div>
            

        </div>

        {/* <SearchForm /> */}
        </React.Fragment>
        
    )
}

export default SearchButton
