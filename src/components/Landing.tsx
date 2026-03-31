import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hallo I am</h2>
            <h1>
              Kavita
              <br />
              <span>Nadlamani</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Senior</h3>
            <h2 className="landing-info-h2">
              QA Automation
            </h2>
            <h2 style={{ marginTop: "10px", marginLeft: "20px" }}>
              Engineer
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
