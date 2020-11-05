import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../theme";
import { Button } from "./Button";

describe("Button Component", () => {
    it("Should render Button component", () => {
        const { container, getByText } = render(
            <ThemeProvider theme={defaultTheme}>
                <Button>Test me!</Button>
            </ThemeProvider>
        );
        expect(getByText("Test me!")).toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
    });
});
