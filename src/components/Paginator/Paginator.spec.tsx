import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../theme";
import { Paginator } from "./Paginator";

describe("Paginator Component", () => {
    let component, navigateToPage;
    beforeEach(() => {
        navigateToPage = jest.fn(() => {});
        component = render(
            <ThemeProvider theme={defaultTheme}>
                <Paginator currentPage={1} totalPages={10} navigateToPage={navigateToPage} />
            </ThemeProvider>
        );
    });

    it("Should render Paginator component", () => {
        let { container, getByText } = component;

        expect(getByText("First")).toBeInTheDocument();
        expect(getByText("Next")).toBeInTheDocument();
        expect(getByText("Previous")).toBeInTheDocument();
        expect(getByText("Last")).toBeInTheDocument();
        expect(getByText("Page 1 of 10")).toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
    });

    it("Should navigate to other pages", () => {
        let { getByTestId } = component;

        fireEvent.click(
            getByTestId("next-page"),
            new MouseEvent("click", {
                bubbles: true,
                cancelable: true,
            })
        );

        expect(navigateToPage).toHaveBeenCalledWith(2);
    });
});
