import { useState } from "react";
import "./Form.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebookF,FaTwitter,FaLinkedinIn ,FaInstagram   } from "react-icons/fa";


const Form = () => {
    const [focus, setFocus] = useState({
        name: false,
        email: false,
        phone: false,
        message: false
      });
    
      const handleFocus = (field) => {
        setFocus({ ...focus, [field]: true });
      };
    
      const handleBlur = (field, value) => {
        if (!value) {
          setFocus({ ...focus, [field]: false });
        }
      };
    return (
        <div>
              <div className="container">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Lets get in touch</h3>
          <p className="text text-sm text-gray-600">
          Engage with us through our user-friendly form. Share your details and messages conveniently for seamless communication and interaction.
          </p>

          <div className="info">
            <div className="information space-x-2">
            <FaMapLocationDot />
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className="information space-x-2">
            <MdEmail />
              <p>lorem@ipsum.com</p>
            </div>
            <div className="information space-x-2">
                <BiSolidPhoneCall  />
              <p>123-456-789</p>
            </div>
          </div>

          <div className="social-media">
            <p className="text-left">Connect with us :</p>
            <div className="social-icons ">
              <a href="#">
              <FaFacebookF className="text-3xl pt-1 pl-2" />
              </a>
              <a href="#">
                {/* <FontAwesomeIcon icon={faTwitter} /> */}
                <FaTwitter className="text-3xl pt-1 pl-2" />
              </a>
              <a href="#">
                {/* <FontAwesomeIcon icon={faInstagram} /> */}
                <FaInstagram className="text-3xl pt-1 pl-2" />
              </a>
              <a href="#">
                {/* <FontAwesomeIcon icon={faLinkedinIn} /> */}
                <FaLinkedinIn className="text-3xl pt-1 pl-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className={focus.name ? "circle one focus" : "circle one"}></span>
          <span className={focus.message ? "circle two focus" : "circle two"}></span>

          <form action="index.html" autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input
                type="text"
                name="name"
                className="input"
                onFocus={() => handleFocus("name")}
                onBlur={(e) => handleBlur("name", e.target.value)}
              />
              <label>Username</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email"
                className="input"
                onFocus={() => handleFocus("email")}
                onBlur={(e) => handleBlur("email", e.target.value)}
              />
              <label>Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input
                type="tel"
                name="phone"
                className="input"
                onFocus={() => handleFocus("phone")}
                onBlur={(e) => handleBlur("phone", e.target.value)}
              />
              <label>Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea
                name="message"
                className="input"
                onFocus={() => handleFocus("message")}
                onBlur={(e) => handleBlur("message", e.target.value)}
              ></textarea>
              <label>Message</label>
              <span>Message</span>
            </div>
            <input   value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Form; 