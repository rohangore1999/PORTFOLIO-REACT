import React from 'react'
import styled from 'styled-components'
import resume from '../img/avatar2.jpg'
import PrimaryButton from './PrimaryButton'


function ImageSection() {

    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="aboutimage" />
            </div>

            <div className="right-content">
                <h4>My <span>Details</span></h4>

                <p className="paragraphy"></p>

                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Birth Date</p>
                        <p>Nationality</p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>

                    <div className="info">
                        <p>: Rohan Gore</p>
                        <p>: 19-01-1999</p>
                        <p>: Indian</p>
                        <p>: Navi Mumbai</p>
                        <p>: Cashfree Payments</p>
                    </div>
                </div>

                <PrimaryButton title={'Download CV'} downloads={true}/>
            </div>
        </ImageSectionStyled>
    )
}

export default ImageSection

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;

    @media screen and (max-width: 1000px){
        flex-direction: column;
        
        .left-content{
            margin-bottom: 2rem;
        }
    }

    .left-content{
        width: 100%;
        /* height: 90vh; */
        img{
            width: 95%;
            object-fit: cover;
            height: 100%;
        }

    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }

        .paragraphy{
            padding: 1rem 0;
        }
    
        .about-info{
            display: flex;
            padding-bottom: 1.5rem;
            .info-title{
                padding-right: 3rem;

                p{
                    font-weight: 600;
                }
            }

            .info-title, .info{

                p{
                    padding: .3rem 0;
                    }

            }
        }

    }
`