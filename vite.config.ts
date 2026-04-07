import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "gsap/ScrollTrigger": "gsap-trial/ScrollTrigger",
      "gsap/ScrollSmoother": "gsap-trial/ScrollSmoother",
      "gsap/SplitText": "gsap-trial/SplitText",
      "gsap": "gsap-trial",
    },
  },
});
