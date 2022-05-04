import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import MobileNav from './sidebar'

const TopBar = () => {
    const [open, setOpen] = useState(null)

    return (
        <>
          <div id="topbar" className="topbar hidden-md hidden-sm hidden-xs">
            <div className="container">

                <div className="topbar-left topbar-widgets text-left clearfix">
                    <div id="custom_html-9" className="widget_text widget widget_custom_html">
                        <div className="textwidget custom-html-widget">
                            <div><i className="flaticon-sign main-color"></i>Get your sweet and delicious meals from us.

                            {/* <Button onClick={() => {setOpen(!open); }}>Open</Button> */}
                            
                            </div>
                        </div>
                    </div>
                </div>

                <div className="topbar-right topbar-widgets text-right clearfix">
                    <div className="widget induscity-office-location-widget">
                        <div className="office-location clearfix">
                            {/* <div className="office-switcher"><a className="current-office" href="#">California</a>
                                <ul>
                                    <li className="location active" data-tab="cargohub-office-1">California</li>
                                    <li className="location" data-tab="cargohub-office-2">Newyork</li>
                                    <li className="location" data-tab="cargohub-office-3">Houston</li>
                                </ul>
                            </div> */}
                            <ul className="office-1 topbar-office active" id="cargohub-office-1">
                                <li className="phone"><i className="flaticon-tool"></i>+(234) 810 683 210 8</li>
                                <li className="time"><i className="flaticon-time"></i>Mon - Sun: 05:45 - 10:00 </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
          </div>  
        
          
        </>
    )
}

export default TopBar
