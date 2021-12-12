import React from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../styles/Layouts'
import Title from '../Components/Title'
import PrimaryButton from '../Components/PrimaryButton'

import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import ContactItem from '../Components/ContactItem'

function ContactPage() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />
    
    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'} />
            <ContactPageStyled>
                <InnerLayout className="contact-section">
                    <div className="left-content">
                        <div className="contact-title">
                            <h4>Get In Touch</h4>
                        </div>
                        <form className="form">
                            <div className="form-field">
                                <label htmlFor="name" id='name' >Enter you name*</label>
                                <input type="text" id="name" />
                            </div>

                            <div className="form-field">
                                <label htmlFor="email" id='email' >Enter you email*</label>
                                <input type="email" id="email" />
                            </div>

                            <div className="form-field">
                                <label htmlFor="subject" id='subject' > Subject*</label>
                                <input type="text" id="subject" />
                            </div>

                            <div className="form-field">
                                <label htmlFor="teaxt-area">Enter you Message*</label>
                                <textarea name="textarea" id="text" cols="30" rows="10"></textarea>
                            </div>

                            <div className="form-field f-button">
                                <PrimaryButton title={'Send Email'} downloads={false}/>
                            </div>
                        </form>
                    </div>

                    <div className="right-content">
                        <ContactItem icon={phone} title={'Phone'} contact1={'+917021984685'} contact2={''} />

                        <ContactItem icon={email} title={'Email'} contact1={'gorerohan15@gmail.cm'} contact2={''} />

                        <ContactItem icon={location} title={'Address'} contact1={'A-401, Vasant Vihar, M.C.C.H Society, Navi Mumbai'} contact2={'India'} />
                    </div>

                </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

export default ContactPage

const ContactPageStyled = styled.section`
    .contact-section{
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;

        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            
            .f-button{
                margin-bottom: 3rem;
            }
        }

        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }

        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
                margin-bottom: 2rem;
            }
        }

        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }

            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;

                label{
                    position: absolute;
                    left: 20px;
                    top: -17px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding: 0 .5rem;
                    color: inherit;
                }

                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding: 0 15px;
                    width: 100%;
                    color: inherit;

                }

                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
            }

            .f-button{
                margin-bottom: 2rem;
            }
        }
    }
`