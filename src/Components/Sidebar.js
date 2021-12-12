import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'

function Sidebar({navToggle, setNavToggle, HamToggle, setHamToggle}) {
    return (
        <SidebarStyled className={`${navToggle ? 'nav-toggle':''}`}>
            <Navigation navToggle={navToggle} setNavToggle={setNavToggle} HamToggle={HamToggle} setHamToggle={setHamToggle}/>
        </SidebarStyled>
    )
}

export default Sidebar

const SidebarStyled = styled.div`
    width: 16.3rem;
    position: fixed;
    height: 100vh;
    background-color: var(--sidebar-dark-color);
    overflow:hidden;
    transition: all .4s ease-in-out;

    @media screen and (max-width: 1200px){
        transform: translateX(-100%);
        z-index: 20;
    }
`