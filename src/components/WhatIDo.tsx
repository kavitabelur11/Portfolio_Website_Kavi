import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO" style={{ flexDirection: "column", justifyContent: "center", alignItems: "flex-end", paddingRight: "10%" }}>
      <div className="what-box" style={{ width: "auto", marginBottom: "40px" }}>
        <h2 style={{ fontSize: "70px", fontWeight: 500, margin: "0", textAlign: "left" }}>
          What <span style={{ color: "var(--accentColor)" }}>I Do</span>
        </h2>
      </div>
      <div className="what-box" style={{ width: "auto", justifyContent: "flex-end", display: "flex" }}>
        <div className="what-box-in" style={{ margin: "0" }}>
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>UI AUTOMATION</h3>
              <h4>End-to-End Testing</h4>
              <p>
                Developing robust data-driven automation frameworks with Page Object Models to accelerate regression cycles and improve software stability.
              </p>
              <h5>Core Tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Playwright</div>
                <div className="what-tags">Selenium</div>
                <div className="what-tags">Appium</div>
                <div className="what-tags">Java</div>
                <div className="what-tags">Cucumber BDD</div>
                <div className="what-tags">TestNG</div>
                <div className="what-tags">JUnit</div>
                <div className="what-tags">POM</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>API & BACKEND</h3>
              <h4>Integration & Security</h4>
              <p>
                Validating complex financial transactions, API responses, message queues, and ensuring CI/CD pipeline integration.
              </p>
              <h5>Core Tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">REST Assured</div>
                <div className="what-tags">JMeter</div>
                <div className="what-tags">Postman</div>
                <div className="what-tags">RabbitMQ</div>
                <div className="what-tags">Jenkins CI/CD</div>
                <div className="what-tags">Kubernetes</div>
                <div className="what-tags">JIRA & Agile</div>
                <div className="what-tags">SQL Testing</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
