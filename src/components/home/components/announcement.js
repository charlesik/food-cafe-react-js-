import React from 'react'
import styled from "styled-components"
import './anon.css'

const TopAnnouncement = styled.div`
    height:30px;
    background-color: teal;
    color:white;
    display: flex;
    align-items: center;
    justify-content:center;
    font-size:14px;
    font-weight: 500;
    position:relative
`
// .announcement{
//     height:30px;
//     background-color: teal;
//     color:white
// }

const Announcement = () => {
    return (
        <>
            <TopAnnouncement>
                <p className="my-0 annon">
                    Super Deal! Free delivery on orders over $50
                </p>
            </TopAnnouncement>  
        </>
    )
}

export default Announcement