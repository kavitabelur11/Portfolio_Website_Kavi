import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>QA Engineer</h4>
                <h5>Event Panel (Berlin)</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Built Appium hybrid framework for Android & iOS testing on real devices. Implemented API-based session authentication to bypass UI logins, reducing E2E runtime by ~30%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior QA Auto Eng.</h4>
                <h5>EPAM Systems</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Led test cycles for complex financial applications (Santander Bank). Designed API automation frameworks using Java, Spring Boot, and Cucumber BDD, enhancing APIs coverage by 50%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>QA Auto Engineer</h4>
                <h5>Ubus Technologies</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed data-driven and Page Object Model (POM) frameworks using Selenium WebDriver, reducing regression suite execution time radically by ~40%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sales Specialist</h4>
                <h5>Valueadd Softtech (Pune)</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Executed Smoke, System, Regression, and User Acceptance (UAT) manual testing phases. Created reusable execution utilities, reducing defect tracking redundancy.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Trainee Engineer</h4>
                <h5>Asset Analytix (Pune)</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Analyzed requirements to generate test cases. Supported Agile QA teams resolving bugs actively utilizing JIRA and Rally tracking lifecycles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
