import { Send } from '@material-ui/icons';
import React from 'react'
// import { Container } from 'react-bootstrap';
import styled from 'styled-components'

const Container = styled.div`
    height: 60vh;
    background: #fcf6f6;
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

`;
const Title = styled.h2`
    // font-size:70px;
    margin-bottom: 20px;

`;
const Desc = styled.div`
    font-size:24px;
    font-weight: 300;
    margin-bottom:20px
`;
const InputContainer = styled.div`
    width:50%;
    height:55px;
    background-color: white;
    display:flex;
    justify-content: space-between;
    border:1px solid lightgray;
    line-height: 58px;
`;
const Input= styled.input`
    border: none;
    flex: 8;
    padding: 10px 10px 10px 20px;
    line-height: 58px;
    border-right: none;

`;
const Button= styled.button`
    flex:1;
        height: 55px;
        line-height: 58px;
        color: #252525;
        border: 0;
        -webkit-box-shadow: none;
        box-shadow: none;
        outline: none;
        background-color: #f7c02d;
    

`;



const Newsletter = () => {
    return(
//        <Container>
//            <Title>
//            Subscribe For Newsletter

//            </Title>
//            <Desc>
// Get daily updates on our menu
//            </Desc>

//            <InputContainer>
//             <Input placeholder="your email"/>
//             <Button>
//                 <Send />
//             </Button>
//            </InputContainer>
//        </Container>

        <div className="newsletter-1">
            <div className="container">
                <div className="mf-section-title text-center dark large-size margbtm20">
                    <h2>Subscribe For Newsletter</h2>
                </div>
                <div className="titlepara">Subscribe now and receive weekly newsletter with latest news and interesting activities.</div>
                <div className="mf-newletter ">
                    <div className="form-area">
                        <form className="mc4wp-form">
                            <div className="mc4wp-form-fields">
                                <p className="field name">
                                    <input type="text" name="Name" placeholder="Your Name" required=""/>
                                </p>
                                <p className="field email">
                                    <input type="email" name="EMAIL" placeholder="Your email address" required=""/>
                                </p>

                                <p className="field submit">
                                    <input className="mf-btn" type="submit" value="Sign up"/>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default Newsletter;