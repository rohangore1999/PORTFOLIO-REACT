
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import avatar from '../img/avatar3.jpg'
import Sidebar from './Sidebar'

function Navigation({ navToggle, setNavToggle, HamToggle, setHamToggle }) {
    return (
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt="" />
            </div>

            <ul className="nav-items">
                <li className="nav-item" onClick={() => {
                    setNavToggle(!navToggle)
                    setHamToggle(false)
                }
                }>

                    <NavLink to='/' activeClassName="active-class" exact>Home</NavLink>
                    {/* <Sidebar navToggle={false}/> */}
                </li>

                <li className="nav-item" onClick={() => {
                    setNavToggle(!navToggle)
                    setHamToggle(false)
                }
                }>
                    <NavLink to='/about' activeClassName="active-class" exact>About</NavLink>
                </li>

                <li className="nav-item" onClick={() => {
                    setNavToggle(!navToggle)
                    setHamToggle(false)
                }
                }>
                    <NavLink to='/resume' activeClassName="active-class" exact>Resume</NavLink>
                </li>

                <li className="nav-item" onClick={() => {
                    setNavToggle(!navToggle)
                    setHamToggle(false)
                }
                }>
                    <NavLink to='/portfolio' activeClassName="active-class" exact>Portfolio</NavLink>
                </li>

                <li className="nav-item" onClick={() => {
                    setNavToggle(!navToggle)
                    setHamToggle(false)
                }
                }>
                    <NavLink to='/blogs' activeClassName="active-class" exact>Blogs</NavLink>
                </li>

                <li className="nav-item" onClick={() => {
                    setNavToggle(!navToggle)
                    setHamToggle(false)
                }
                }>
                    <NavLink to='/contact' activeClassName="active-class" exact>Contact</NavLink>
                </li>
            </ul>

            <footer className="footer">
                <p>@2022 Rohan Gore</p>
            </footer>
        </NavigationStyled>
    )
}

export default Navigation

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right : 1px solid var(--border-color);

    .avatar {
        width: 100%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 1rem 0;
        
        img {
            width: 70%;
            border-radius: 50%;
            border: 8px solid var(--border-color);
         
        }
    }

    .nav-items {
        width: 100%;
        text-align: center;

        .active-class {
            background-color: var(--primary-color);

        }
    

    li {
        display: block;

        a{
            display: block;
            padding: .45rem 0;
            position: relative;
            z-index:10;
            text-transform: uppercase;
            transition: all .4s ease-in-out;
            font-weight: 600;
            letter-spacing: 1px;
            
            &:hover{
                cursor:pointer;
                color: var(--white-color);
            }
            
            
            &::before{
                content: "";
                position: absolute;
                bottom:0 ;
                left: 0;
                width: 0;
                height: 50%;
                background-color: var( --primary-color);

                /* from cubic-bezier site transition*/
                transition: ALL 0.4s cubic-bezier(1, -0.2, .25, .95);
                z-index:-1;
                opacity: 0.21;
            }
        
        }

        a:hover::before{
            width: 100%;
            height: 100%;
        }
    }
}

footer {
        border-top: 1px solid var(--border-color);
        width: 100%;
        
        p{
            padding: 2rem 0;
            font-size: 1.1rem;
            display: block;
            text-align:center;
        }
}
    
`;