import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
    borderRadius: "2px",
    palette: {
        common: {
            black: "#4A4A4A",
            white: "#EDEDED",
        },
        primary: {
            main: "#EA7F28",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#D37324",
            contrastText: "#ffffff",
        },
        tertiary: {
            main: "#ffffff",
            contrastText: "#EDEDED",
        },
    },
    gutterSize: {
        sm: "8px",
        md: "12px",
        lg: "24px",
    },
};
