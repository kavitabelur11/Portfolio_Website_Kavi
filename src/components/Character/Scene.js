import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { useLoading } from "../../context/LoadingProvider";
import { setProgress } from "../Loading";
import { setAllTimeline, setCharTimeline } from "../utils/GsapScroll";
const Scene = () => {
    const { setLoading } = useLoading();
    useEffect(() => {
        // Initialize scrolling timelines natively, passing null for the 3D character reference
        setCharTimeline(null, null);
        setAllTimeline();
        // Fallback: forcefully resolve loading screen after 1s just in case image cache misses
        const timeout = setTimeout(() => {
            let progress = setProgress((value) => setLoading(value));
            progress.loaded();
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);
    const handleImageLoad = () => {
        let progress = setProgress((value) => setLoading(value));
        progress.loaded();
    };
    return (_jsx("div", { className: "character-container", children: _jsx("div", { className: "character-model", children: _jsx("img", { src: "/images/female_avatar.png", alt: "Avatar", onLoad: handleImageLoad, style: {
                    width: "75%",
                    height: "auto",
                    maxHeight: "80vh",
                    objectFit: "contain",
                    transform: "scale(0.85) translateY(0%)",
                    pointerEvents: "none",
                    filter: "drop-shadow(0px 10px 20px rgba(100, 50, 255, 0.4))",
                    display: "block",
                    margin: "0 auto",
                } }) }) }));
};
export default Scene;
