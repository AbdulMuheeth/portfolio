import React, { useRef, useState } from "react";
import { FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import data from "../../assets/data.json";
import emailjs from "@emailjs/browser";

import "./Section6.css";

const Section6 = () => {
  const [showErr, setShowErr] = useState(false);
  const [showSent, setShowSent] = useState(false);
  const [eMsg, SetEMsg] = useState("");
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestMsg, setGuestMsg] = useState("");
  let nameCopy;

  const sendEmail = (event) => {
    event.preventDefault();

    // const alertText = (errMsg) => {
    //   return (

    //   );
    // };

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    console.log(emailRegex.test(guestEmail));

    if (
      guestName.length > 3 &&
      emailRegex.test(guestEmail) &&
      guestMsg.length > 5
    ) {
      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          {
            name: guestName,
            email: guestEmail,
            message: guestMsg,
          },
          process.env.REACT_APP_PUBLIC_URL
        )
        .then((res) => {
          console.log(res);
              localStorage.setItem("guestName",guestName);
              console.log(guestName,nameCopy);
              setShowSent(true);
              setGuestName("")
              setGuestEmail("");
              setGuestMsg("");
        })
        .catch((err) => {
          console.log(err);
        });
      
    } else {
      if (guestName.length <= 3) {
        console.log("ename");
        setShowErr(true);
        SetEMsg("Name should be aleast 3 characters");
        // alertText(true,"Name should be aleast 3 characters")
      } else if (!emailRegex.test(guestEmail)) {
        console.log("email");
        setShowErr(true);
        SetEMsg("Please enter a valid email address");
        // alertText(true,"Please enter a valid email address")
      } else if (guestMsg.length <= 5) {
        console.log("msg");
        setShowErr(true);
        SetEMsg("Message must be atleast 5 characters");
        // alertText(true,"Message must be atleast 5 characters")
      }
    }
  };

  return (
    <div className="section-6 sec">
      <div className="map">
        {/* <iframe src=" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        <iframe
          src={data.contact.location}
          className="iframe"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        ></iframe>
      </div>

      <div className="contact-content">
        <div className="contact">
          <div className="other">
            <div className="info">
              <h2>More Methods </h2>
              <h3>Email</h3>
              <div className="svg-wrap">
                <a
                  className="contact-anchor"
                  href="mailto:shaikabdulmuheeth@gmail.com"
                >
                  <span className="svg">
                    <FaEnvelope />
                  </span>
                  {data.email}
                </a>
              </div>
              <h3>Connect</h3>
              <div className="svg-wrap">
                {data.contact.linkedin ? (
                  <a href={data.contact.linkedin} target="_blank">
                    <span className="svg">
                      <FaLinkedinIn />
                    </span>
                  </a>
                ) : (
                  ""
                )}

                {data.contact.twitter ? (
                  <a href={data.contact.twitter} target="_blank">
                    <span className="svg">
                      <FaTwitter />
                    </span>
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="form" id="contact-form">
            <h1>Get In Touch</h1>
            <form action="">
              <div className="flex-rev">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                  value={guestName}
                  onChange={(event) => {
                    setGuestName(event.target.value);
                  }}
                  required
                />
                <label htmlFor="name">Full Name</label>
              </div>
              <div className="flex-rev">
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  id="email"
                  value={guestEmail}
                  onChange={(event) => {
                    setGuestEmail(event.target.value);
                  }}
                  required
                />
                <label htmlFor="email">Your Email</label>
              </div>

              <div className="flex-rev">
                <textarea
                  placeholder="Hello, type a message"
                  name="message"
                  id="message"
                  value={guestMsg}
                  onChange={(event) => {
                    setGuestMsg(event.target.value);
                  }}
                  required
                ></textarea>
                <label htmlFor="message">Message</label>
              </div>
              {showErr ? (
                <center>
                  <div
                    class="alert alert-danger alert-dismissible fade show"
                    role="alert"
                    style={{ zIndex: "1000" }}
                  >
                    <strong>{eMsg}</strong>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                      onClick={() => {
                        setShowErr(false);
                      }}
                    ></button>
                  </div>
                </center>
              ) : (
                ""
              )}
              {showSent ? (
                <center>
                  <div
                    class="alert alert-success alert-dismissible fade show"
                    role="alert"
                    style={{ zIndex: "1000" }}
                  >
                    <strong>Hello {localStorage.getItem('guestName')??"There"},</strong> I will reach out to you soon:)
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                      onClick={() => {
                        setShowSent(false);
                      }}
                    ></button>
                  </div>
                </center>
              ) : (
                ""
              )}
              <button className="bttn" type="submit" onClick={sendEmail}>
                Send Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
