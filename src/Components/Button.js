import React from 'react'
import styled from 'styled-components'

function Button({filter, button}) {
    return (
        <ButtonsStyled>
            {
                button.map((but, i) => {
                    // filter(but) >> passing category so as to filter
                    return <ButtonStyled key={i} onClick={()=> filter(but)}>
                        {/* displaying button (category) got as a props */}
                        {but}
                        {console.log(button)}
                    </ButtonStyled>
                })
            }
        </ButtonsStyled>
    )
}

export default Button

const ButtonsStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 70%;
    margin: 2.5rem auto;
    
    @media screen and (max-width:429px){
        button{
            width: 100%;
        }
    }
`

const ButtonStyled = styled.button`
    cursor: pointer;
    outline: none;
    border: none;
    background-color: var(--background-light-color-2);
    padding: .5rem 2rem;
    font-size: inherit;
    color: var(--white-color);
    transition: all .4s ease-in-out;
    margin-bottom: .6rem;
    

    &:active, &:focus{
        background-color: var(--primary-color);
    }

    &:hover{
        background-color: var(--primary-color);
    }
    /* &:not(:last-child){
        margin-right: .6rem;
    } */

    @media screen and (min-width:429px){
        &:not(:last-child){
            margin-right: .6rem;
        }
    }
`

