import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const WhatIDo = () => {
    const containerRef = useRef([]);
    const setRef = (el, index) => {
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
    return (_jsxs("div", { className: "whatIDO", style: { flexDirection: "column", justifyContent: "center", alignItems: "flex-end", paddingRight: "10%" }, children: [_jsx("div", { className: "what-box", style: { width: "auto", marginBottom: "40px" }, children: _jsxs("h2", { style: { fontSize: "70px", fontWeight: 500, margin: "0", textAlign: "left" }, children: ["What ", _jsx("span", { style: { color: "var(--accentColor)" }, children: "I Do" })] }) }), _jsx("div", { className: "what-box", style: { width: "auto", justifyContent: "flex-end", display: "flex" }, children: _jsxs("div", { className: "what-box-in", style: { margin: "0" }, children: [_jsx("div", { className: "what-border2", children: _jsxs("svg", { width: "100%", children: [_jsx("line", { x1: "0", y1: "0", x2: "0", y2: "100%", stroke: "white", strokeWidth: "2", strokeDasharray: "7,7" }), _jsx("line", { x1: "100%", y1: "0", x2: "100%", y2: "100%", stroke: "white", strokeWidth: "2", strokeDasharray: "7,7" })] }) }), _jsxs("div", { className: "what-content what-noTouch", ref: (el) => setRef(el, 0), children: [_jsx("div", { className: "what-border1", children: _jsxs("svg", { height: "100%", children: [_jsx("line", { x1: "0", y1: "0", x2: "100%", y2: "0", stroke: "white", strokeWidth: "2", strokeDasharray: "6,6" }), _jsx("line", { x1: "0", y1: "100%", x2: "100%", y2: "100%", stroke: "white", strokeWidth: "2", strokeDasharray: "6,6" })] }) }), _jsx("div", { className: "what-corner" }), _jsxs("div", { className: "what-content-in", children: [_jsx("h3", { children: "UI AUTOMATION" }), _jsx("h4", { children: "End-to-End Testing" }), _jsx("p", { children: "Developing robust data-driven automation frameworks with Page Object Models to accelerate regression cycles and improve software stability." }), _jsx("h5", { children: "Core Tools" }), _jsxs("div", { className: "what-content-flex", children: [_jsx("div", { className: "what-tags", children: "Playwright" }), _jsx("div", { className: "what-tags", children: "Selenium" }), _jsx("div", { className: "what-tags", children: "Appium" }), _jsx("div", { className: "what-tags", children: "Java" }), _jsx("div", { className: "what-tags", children: "Cucumber BDD" }), _jsx("div", { className: "what-tags", children: "TestNG" }), _jsx("div", { className: "what-tags", children: "JUnit" }), _jsx("div", { className: "what-tags", children: "POM" })] }), _jsx("div", { className: "what-arrow" })] })] }), _jsxs("div", { className: "what-content what-noTouch", ref: (el) => setRef(el, 1), children: [_jsx("div", { className: "what-border1", children: _jsx("svg", { height: "100%", children: _jsx("line", { x1: "0", y1: "100%", x2: "100%", y2: "100%", stroke: "white", strokeWidth: "2", strokeDasharray: "6,6" }) }) }), _jsx("div", { className: "what-corner" }), _jsxs("div", { className: "what-content-in", children: [_jsx("h3", { children: "API & BACKEND" }), _jsx("h4", { children: "Integration & Security" }), _jsx("p", { children: "Validating complex financial transactions, API responses, message queues, and ensuring CI/CD pipeline integration." }), _jsx("h5", { children: "Core Tools" }), _jsxs("div", { className: "what-content-flex", children: [_jsx("div", { className: "what-tags", children: "REST Assured" }), _jsx("div", { className: "what-tags", children: "JMeter" }), _jsx("div", { className: "what-tags", children: "Postman" }), _jsx("div", { className: "what-tags", children: "RabbitMQ" }), _jsx("div", { className: "what-tags", children: "Jenkins CI/CD" }), _jsx("div", { className: "what-tags", children: "Kubernetes" }), _jsx("div", { className: "what-tags", children: "JIRA & Agile" }), _jsx("div", { className: "what-tags", children: "SQL Testing" })] }), _jsx("div", { className: "what-arrow" })] })] })] }) })] }));
};
export default WhatIDo;
function handleClick(container) {
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
