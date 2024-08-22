import React, { useState } from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";

import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactItem from "../components/ContactItem";

function ContactPage() {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;

  // form inputs
  const [name, setname] = useState("");
  const [client_email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");

  console.log("name>>> ", name);
  console.log("client_email>>> ", client_email);
  console.log("subject>>> ", subject);
  console.log("message>>> ", message);

  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className="contact-section" style={{ overflow: "hidden" }}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>
            <form className="form">
              <div className="form-field">
                <label htmlFor="name" id="name">
                  Enter you name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                />
              </div>

              <div className="form-field">
                <label htmlFor="email" id="email">
                  Enter you email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={client_email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
              </div>

              <div className="form-field">
                <label htmlFor="subject" id="subject">
                  {" "}
                  Subject*
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => {
                    setsubject(e.target.value);
                  }}
                />
              </div>

              <div className="form-field">
                <label htmlFor="teaxt-area">Enter you Message*</label>
                <textarea
                  name="textarea"
                  id="text"
                  cols="30"
                  rows="10"
                  value={message}
                  onChange={(e) => {
                    setmessage(e.target.value);
                  }}
                ></textarea>
              </div>

              <div className="form-field f-button">
                <PrimaryButton
                  title={"Send Email"}
                  downloads={false}
                  name={name}
                  setname={setname}
                  email={client_email}
                  setemail={setemail}
                  subject={subject}
                  setsubject={setsubject}
                  message={message}
                  setmessage={setmessage}
                />
              </div>
            </form>
          </div>

          <div className="right-content">
            <ContactItem
              icon={phone}
              title={"Phone"}
              contact1={"+917021984685"}
              contact2={""}
            />

            <ContactItem
              icon={email}
              title={"Email"}
              contact1={"gorerohan15@gmail.com"}
              contact2={""}
            />

            <ContactItem
              icon={location}
              title={"Address"}
              contact1={"A-401, Vasant Vihar, M.C.C.H Society, Navi Mumbai"}
              contact2={"India"}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

export default ContactPage;

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;

    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);

      .f-button {
        margin-bottom: 3rem;
      }
    }

    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        width: 100%;
      }
    }

    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
        margin-bottom: 2rem;
      }
    }

    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }

      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;

        label {
          position: absolute;
          left: 20px;
          top: -17px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }

        @media screen and (max-width: 430px) {
          label {
            font-size: 1rem;
          }
        }

        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;

          @media screen and (max-width: 430px) {
            font-size: 1rem;
          }
        }

        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;

          @media screen and (max-width: 430px) {
            font-size: 1rem;
          }
        }
      }

      .f-button {
        margin-bottom: 2rem;
      }
    }
  }
`;
