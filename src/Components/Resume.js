import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import SmallTitle from './SmallTitle'
import Title from './Title'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import SchoolIcon from '@material-ui/icons/School'
import ResumeItem from './ResumeItem'


function Resume() {
    // so as to pass the icon as a props
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />

    return (
        <ResumeStyle>
            <Title title={'Resume'} span={'Resume'} />

            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>

                <div className="resume-content">
                    <ResumeItem year={'MARCH 2021 - Present'} title={'HCL Technologies'} subTitle={'Software Engineer'} text={'Full Time'} />

                    <ResumeItem year={'JAN 2020 - APRIL 2020'} title={'Omam Consultant Pvt Ltd'} subTitle={'Data Engineer'} text={'Internship'} />


                </div>

                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualification'} />
                </div>

                <div className="resume-content">
                    <ResumeItem year={'2016 - 2020'} title={'IT - Engineering'} subTitle={'Pillai College of Engineering'} text={'Pursed Engeering with 7.92 CGPA'} />

                    <ResumeItem year={'2014 - 2016'} title={'HSC - 12th'} subTitle={'C.K.T Junior College'} text={'State Board'} />
                </div>


            </InnerLayout>
        </ResumeStyle>
    )
}

export default Resume

const ResumeStyle = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }

    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`

