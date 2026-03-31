import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:kavita.nadlamani@ue-germany.de" data-cursor="disable">
                kavita.nadlamani@ue-germany.de
              </a>
            </p>
            <div style={{ paddingBottom: "30px" }} />
          </div>
          <div className="contact-box">
            <h4>Location</h4>
            <p style={{marginBottom: "20px"}}>
              Spandau, Berlin
              <br/>Germany
            </p>
            <h4>Social</h4>
            <a
              href="https://linkedin.com/in/kavita-n-991132119"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Kavita Nadlamani</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
