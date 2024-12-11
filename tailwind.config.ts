import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import { nextui } from "@nextui-org/react";

export default {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: colors.pink[500],
                    ...colors.pink,
                },
                link: {
                    DEFAULT: colors.blue[500],
                    ...colors.blue,
                },
                error: {
                    DEFAULT: colors.red[500],
                    ...colors.red,
                },
            },

            // Animation
            animation: {
                zoomIn: "zoomIn .2s ease-in-out",
                fadeIn: "fadeIn .2s ease-in-out",
                fadeInLeft: "fadeInLeft .2s ease-in-out",
            },

            // that is actual animation
            keyframes: () => ({
                zoomIn: {
                    "0%": {
                        opacity: "0",
                        transform:
                            "translateY(100px) scale(0.6) translateZ(100px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0px) scale(1) translateZ(0px)",
                    },
                },
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                fadeInLeft: {
                    "0%": { opacity: "0", transform: "translateX(-20px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
            }),
        },
    },
    darkMode: "class",
    plugins: [nextui()],
} satisfies Config;
