import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../theme";
import { Footer } from "./Footer";

describe("Footer Component", () => {
    it("Should render Footer component", () => {
        const { container, getByText } = render(
            <ThemeProvider theme={defaultTheme}>
                <Footer />
            </ThemeProvider>
        );
        expect(getByText("© AUTO1 Group 2018")).toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
    });
});
