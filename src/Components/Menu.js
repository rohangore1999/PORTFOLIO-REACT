import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@material-ui/icons/GitHub'
import LanguageIcon from '@material-ui/icons/Language'

function Menu({ menuItem }) {
    return (
        <MenuItemStyled>
            {
                menuItem.map((item) => {
                    return <div key={item.id} className="grid-item">
                        <div className="portfolio-content">
                            <div className="portfolio-image">
                                <img src={item.image} alt="" />

                                <ul>
                                    <li>
                                        <a href={item.link1} target="_blank" rel="noreferrer">
                                            <GitHubIcon />
                                        </a>
                                    </li>

                                    {!item.link2 ? '' : 
                                    (
                                        <li>
                                            <a href={item.link2} target="_blank" rel="noreferrer">
                                                <LanguageIcon />
                                            </a>
                                        </li>
                                    )}


                                </ul>
                            </div>

                            <h6>{item.text}</h6>
                            <p>{item.category}</p>

                        </div>
                    </div>
                })
            }

        </MenuItemStyled>
    )
}

export default Menu

const MenuItemStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;

    @media screen and (max-width: 920px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 670px){
        grid-template-columns: repeat(1, 1fr);
    }

    .grid-item{
        .portfolio-content{
            .portfolio-image{
                img{
                    object-fit:contain;
                }
                &:before{
                    content: "";
                    position: absolute;
                    left: 2%;
                    top: 2%;
                    transform: scale(1);
                    height: 0;
                    width: 0;
                    transition: all .4s ease-in-out;

                }
            }

            .portfolio-image:hover{
                ul{
                    transform: translateY(0);
                    transition: all .4s ease-in-out;
                    transform: translate(-50%, -50%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 1;
                    li{
                        transition: all .4s ease-in-out;
                        
                        &:hover{
                            background-color: var(--primary-color);
                        }
                        a{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: all .4s ease-in-out;

                        }
                    }

                    li:hover{
                        svg{
                            color: var(--white-color);
                            cursor: pointer;
                        }
                    }
                    svg{
                        font-size: 2rem;
                    }
                }
                &:before{
                    top:11%;
                    height: calc(100% - 50%);
                    width: calc(100% - 3%);
                    background-color: var(--white-color);
                    opacity: 0.9;
                    transform-origin: left;
                    transition: all .4s ease-in-out;
                }
            }
            display: block;
            position: relative;
            overflow: hidden;

            h6{
                font-size: 1.5rem;
            }

            img{
                width: 100%;
                height: 30vh;
                object-fit: cover;
            }

            ul{
                transform: translateY(-600px);
                transition: all .4s ease-in-out;
                position: absolute;
                left: 50%;
                top:35%;
                opacity: 0;


                li{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 1rem;
                    border-radius: 50%;
                    width: 3rem;
                    height: 3rem;
                    background-color: var(--border-color);
                    margin: 0 2.5rem;
                    &:hover{
                        background-color: var(--primary-color);
                    }
                    a{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    }
            }
        }
    }
`