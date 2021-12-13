import React from 'react'
import styled from 'styled-components'

function ContactItem({ icon, title, contact1, contact2 }) {
    return (
        <ContactItemsStyled>
            <div className="left-content">
                {icon}
            </div>

            <div className="right-content">
                <h6>
                    {title}
                </h6>

                <p>{contact1}</p>
                <p>{contact2}</p>
            </div>
        </ContactItemsStyled>
    )
}

export default ContactItem

const ContactItemsStyled = styled.div`
    padding: 1.5rem 2rem;
    background-color: var(--background-dark-grey);
    display: flex;
    align-items: center;
    
    /* give apply margin-bottom css except last child */
    &:not(:last-child){
        margin-bottom: 2rem;
    }

    .left-content{
        padding: 1.5rem;
        border: 1px solid var(--border-color);
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.5rem;

        

        svg{
            font-size: 2.3rem;
            @media screen and (max-width: 430px){
                font-size: 1rem;
        }
        }
    }

    .right-content{
        h6{
            color: var(--white-color);
            font-size: 1.2rem;
            padding-bottom: .6rem;

            @media screen and (max-width: 430px){
                font-size: 1rem;
            }
        }

        p{
            padding: .1rem 0;

            @media screen and (max-width: 430px){
                font-size: 1rem;
            }

        }
    }
`