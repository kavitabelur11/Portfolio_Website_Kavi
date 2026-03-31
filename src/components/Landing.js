import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "./styles/Landing.css";
const Landing = ({ children }) => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "landing-section", id: "landingDiv", children: [_jsxs("div", { className: "landing-container", children: [_jsxs("div", { className: "landing-intro", children: [_jsx("h2", { children: "Hallo I am" }), _jsxs("h1", { children: ["Kavita", _jsx("br", {}), _jsx("span", { children: "Nadlamani" })] })] }), _jsxs("div", { className: "landing-info", children: [_jsx("h3", { children: "A Senior" }), _jsx("h2", { className: "landing-info-h2", children: "QA Automation" }), _jsx("h2", { style: { marginTop: "10px", marginLeft: "20px" }, children: "Engineer" })] })] }), children] }) }));
};
export default Landing;
