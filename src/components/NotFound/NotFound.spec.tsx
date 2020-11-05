import React from "react";
import { render } from "@testing-library/react";
import { NotFound } from "./NotFound";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../theme";

describe("Button Component", () => {
    it("Should render Button component", () => {
        const { container, getByText } = render(
            <ThemeProvider theme={defaultTheme}>
                <NotFound />
            </ThemeProvider>
        );
        expect(getByText("404 - Not Found")).toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
    });
});
