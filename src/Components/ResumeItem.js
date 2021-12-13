import React from 'react'
import styled from 'styled-components'

function ResumeItem({ year, title, subTitle, text }) {
    return (
        <ResumeItemStyled>
            <div className="left-content">
                <p>{year}</p>
            </div>

            <div className="right-content">
                <h5>{title}</h5>
                <h6>{subTitle}</h6>
                <p>{text}</p>
            </div>

        </ResumeItemStyled>
    )
}

export default ResumeItem

const ResumeItemStyled = styled.div`
    display: flex;
    
    @media screen and (max-width: 421px){
        p, h5, h6{
            font-size: 80%;
        }
    }

    &:not(:last-child){
        padding-bottom: 3rem;
    }

    .left-content{
        padding-left: 20px;
        width: 30%;
        position: relative;

        &::before{
            content: "";
            position: absolute;
            left: -12px;
            top: 5px;
            height: 17px;
            width: 17px;
            border-radius: 50%;
            border: 2px solid var(--border-color);
            background-color: var(--background-dark-color);

            @media screen and (max-width: 430px){
                left: -9px;
            }
        }

        p{
            display: inline-block;
            font-size: .9rem;
            @media screen and (max-width: 430px){
                /* font-size: .8rem; */
            }
        }
    }

    .right-content{
        padding-left: 5rem;
        position: relative;
        @media screen and (max-width: 430px){
            padding-left: 2rem;

        }

        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 15px;
            height: 2px;
            width: 3rem;
            background-color: var(--border-color);

            @media screen and (max-width: 430px){
                width: 0.9rem;
            }
        }

        h5{
            color: var(--primary-color);
            font-size: 2rem;
            padding-bottom: inherit.4rem;
            
            @media screen and (max-width: 430px){
                font-size: 1.3rem;
            }
        }

        h6{
            padding-bottom: .6rem;
            font-size: 1.3rem;
            color: var(--white-color);
            
            @media screen and (max-width: 430px){
                font-size: .9rem;
            }
        }

        p{
            font-size: 1rem;
            @media screen and (max-width: 430px){
                font-size: .8rem;
            }
        }
    }
`