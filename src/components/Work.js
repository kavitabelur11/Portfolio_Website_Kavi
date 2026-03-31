import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
const workData = [
    {
        company: "Event Panel (Berlin)",
        role: "QA Engineer (Dec 2025 - Feb 2026)",
        tools: "Appium, Playwright, Cucumber BDD",
        bullets: [
            "Built Appium hybrid framework for Android & iOS testing.",
            "Automated React/Angular platform using Playwright.",
            "Implemented API-based session authentication bypassing UI log-ins.",
            "Used Playwright Inspector for deep root-cause failure analysis."
        ]
    },
    {
        company: "EPAM Systems",
        role: "Senior QA Auto Engineer (2023 - 2025)",
        tools: "Java, Spring Boot, REST Assured, Jenkins",
        bullets: [
            "Executed E2E testing for complex financial applications (Santander).",
            "Improved API regression coverage by ~50% with Java & Spring Boot.",
            "Contributed to ISO 20022 payments implementations.",
            "Performed log analysis across Kubernetes and Kibana."
        ]
    },
    {
        company: "Ubus Technologies",
        role: "QA Auto Engineer (2021 - 2023)",
        tools: "Selenium WebDriver, TestNG, JUnit",
        bullets: [
            "Built data-driven frameworks alongside Page Object Models.",
            "Reduced main regression suite execution time by ~40%.",
            "Performed cross-browser parallel testing executing across Selenium Grid."
        ]
    },
    {
        company: "Valueadd Softtech",
        role: "Sales Specialist / QA (2019 - 2021)",
        tools: "System Testing, Smoke Testing, UAT",
        bullets: [
            "Performed Functional, Integration, and Regression phases comprehensively.",
            "Generated detailed Extent Reports for managing project stakeholders.",
            "Created highly reusable utility methods reducing deep code redundancy."
        ]
    },
    {
        company: "Asset Analytix",
        role: "Trainee Engineer (2019)",
        tools: "JIRA, Rally, Agile, Defect Triage",
        bullets: [
            "Analyzed fresh application requirements and drafted robust test cases.",
            "Logged, tracked, retested, and closed defects directly within JIRA.",
            "Actively participated in daily Stand-ups and Retrospective Scrum meetings."
        ]
    }
];
const Work = () => {
    useGSAP(() => {
        let translateX = 0;
        function setTranslateX() {
            const box = document.getElementsByClassName("work-box");
            const rectLeft = document
                .querySelector(".work-container")
                .getBoundingClientRect().left;
            const rect = box[0].getBoundingClientRect();
            const parentWidth = box[0].parentElement.getBoundingClientRect().width;
            let padding = parseInt(window.getComputedStyle(box[0]).padding) / 2;
            translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
        }
        setTranslateX();
        let timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".work-section",
                start: "top top",
                end: `+=${translateX}`, // Use actual scroll width
                scrub: true,
                pin: true,
                id: "work",
            },
        });
        timeline.to(".work-flex", {
            x: -translateX,
            ease: "none",
        });
        return () => {
            timeline.kill();
            ScrollTrigger.getById("work")?.kill();
        };
    }, []);
    return (_jsx("div", { className: "work-section", id: "work", children: _jsxs("div", { className: "work-container section-container", children: [_jsxs("h2", { children: ["My ", _jsx("span", { children: "Work" })] }), _jsx("div", { className: "work-flex", children: workData.map((data, index) => (_jsxs("div", { className: "work-box", style: { justifyContent: "center" }, children: [_jsxs("div", { className: "work-info", children: [_jsxs("div", { className: "work-title", children: [_jsxs("h3", { children: ["0", index + 1] }), _jsxs("div", { children: [_jsx("h4", { children: data.company }), _jsx("p", { children: data.role })] })] }), _jsx("h4", { children: "Tools & Features" }), _jsx("p", { children: data.tools })] }), _jsx("div", { className: "work-bullets", style: { marginTop: "20px" }, children: _jsx("ul", { style: { paddingLeft: "20px", margin: "0" }, children: data.bullets.map((bullet, i) => (_jsx("li", { style: { marginBottom: "12px", fontSize: "16px", color: "#adacac", fontWeight: 200, lineHeight: "1.4" }, children: bullet }, i))) }) })] }, index))) })] }) }));
};
export default Work;
