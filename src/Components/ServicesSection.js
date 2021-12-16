import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import ServiceCard from './ServiceCard'
import Title from './Title'
import design from '../img/design.svg'
import intelligence from '../img/intelligence.svg'
import gamedev from '../img/game-dev.svg'
import scrape from '../img/scrape.png'
import python from '../img/python.png'
import webdev from '../img/webdev.png'



function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'Services'} />

                <div className="services">
                    <ServiceCard image={webdev} title={'Web Development'} paragraph={'Technology: ANGULAR 12, REACT JS, NEXT JS'} />

                    <div className="mid-card">
                        <ServiceCard image={scrape} title={'Web Scraping'} paragraph={'Technology: PYTHON - BEAUTIFUL SOUP, SELENIUM, REQUESTS'} />
                    </div>

                    <ServiceCard image={python} title={'Data Engineering'} paragraph={'Technology: PYTHON - NUMPY, DATAFRAMES, PANDAS'} />

                </div>

            </ServicesSectionStyled>
        </InnerLayout>
    )
}

export default ServicesSection

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;

        @media screen and (max-width: 1000px){
            flex-direction: column;
        }

        @media screen and (max-width: 950px){
            grid-template-columns: repeat(2, 1fr);

        }

        @media screen and (max-width: 650px){
            grid-template-columns: repeat(1, 1fr);

        }
    }
`