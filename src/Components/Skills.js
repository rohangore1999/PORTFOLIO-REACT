import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import Title from '../Components/Title'
import ProgressBar from './ProgressBar'

function Skills() {
    return (
        <SkillsStyled>
            <Title title={'My Skills'} span={'My Skills'} />

            <InnerLayout>
                <div className="skills">
                    <ProgressBar title={'REACT'} width={'75%'} text={'75%'} />
                    <ProgressBar title={'ANGULAR'} width={'65%'} text={'65%'} />
                    <ProgressBar title={'PYTHON'} width={'85%'} text={'85%'} />
                    <ProgressBar title={'WEB SCRAPING'} width={'70%'} text={'70%'} />
                    <ProgressBar title={'MACHINE LEARNING'} width={'60%'} text={'60%'} />

                </div>
            </InnerLayout>
        </SkillsStyled>
    )
}

export default Skills

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;

        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);

        }
    }
`;