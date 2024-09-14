/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))", // Define a 16-column grid for your layout
      },
      gridTemplateRows: {
        8: "repeat(8, minmax(0, 1fr))", // Define an 8-row grid
      },
      colors: {
        "navy-400": "#2B88FF",
        "purple-400": "#C388FF",
        "yellow-400": "#FFCC24",
        "lime-400": "#C3F051",
        "green-400": "#58F399",
        "orange-400": "#FF8A4E",
        "blue-400": "#61E8EE",
        "gray-300": "#e2e8f0",
        "gray-500": "#a0aec0",
        "gray-600": "#718096",
        "gray-700": "#666",
        background: "var(--background)", // Adding background and foreground colors from variables
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class", // Enable dark mode based on a class
  plugins: [nextui()],
};
