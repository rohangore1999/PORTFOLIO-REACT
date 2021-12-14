import { Snackbar } from '@material-ui/core'
import { Button } from '@material-ui/core'

import React from 'react'
import styled from 'styled-components'
import Alert from '@material-ui/lab/Alert';
// to send data to Flask python
// import axios from 'axios'


function PrimaryButton({ title, downloads, name, email, subject, message, setname, setemail, setsubject, setmessage }) {
    const [open, setOpen] = React.useState(false);

    const call_api = (e) => {
        setname("")
        setemail("")
        setsubject("")
        setmessage("")
        // making json
        // const data = {
        //     name: name,
        //     email: email,
        //     subject:subject,
        //     message:message
        // }

        // console.log(data)
        // // It will send post data to python flask backend
        // axios.post('http://127.0.0.1:5000/api/', data)
        //     .then(response => {
        //         console.log(response)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
    }

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            {downloads ? (
                <PrimaryButtonStyled href="Rohan_Gore_2021.pdf" download>
                    {title}
                </PrimaryButtonStyled>
            ) :
                (
                    <PrimaryButtonStyled onClick={call_api} onClick={handleClick}>
                        {title}
                    </PrimaryButtonStyled>
                )
            }

            {name && email && subject && message &&
                (
                    <Muibuttonstyled>
                        <Snackbar open={open} onClose={handleClose}>
                            <Alert className="alert" onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                Email Sent !
                            </Alert>
                        </Snackbar>
                    </Muibuttonstyled>

                )
            }



        </>
    )

}

export default PrimaryButton

const Muibuttonstyled = styled.div`
    .MuiAlert-message{
            font-size: 1rem !important;
    }
`


const PrimaryButtonStyled = styled.a`
    background-color: var(--primary-color);
    padding: .8rem 2.5rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    text-transform: uppercase;
    position: relative;
    transition: all .4s ease-in-out;

    &::after{
        content: "";
        position: absolute;
        width: 0;
        height: .2rem;
        transition: all .4s ease-in-out;
        left: 0;
        bottom: 0;
        opacity: .7;
    }
    &:hover::after{
        width: 100%;
        background-color: var(--white-color);
    }
`