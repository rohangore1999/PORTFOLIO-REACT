import React from 'react'
import styled from 'styled-components'

function ProgressBar({title, width, text}) {
    return (
        <ProgressBarStyled>
            <h6>{title}</h6>
            <div className="progress-bar">
                <p>{text}</p>

                <div className="progress">
                    <span style={{width: width}}></span>
                </div>
            </div>
        </ProgressBarStyled>
    )
}

export default ProgressBar

const ProgressBarStyled = styled.div`

        h6{
            @media screen and (max-width: 430px){
                font-size: 1rem;
            }
        }

        p{
            @media screen and (max-width: 430px){
                font-size: .8rem;
            }
        }

    .progress-bar{
        display: flex;
        align-items: center;

        p{
            padding-right: 1.1rem;
        }

        .progress{
            position: relative;
            width: 100%;
            height: .4rem;
            background-color: var(--border-color);

            span{
                position: absolute;
                left: 0;
                bottom: 0;
                height: .4rem;
                background-color: var(--primary-color);
            }
        }

    }
`;