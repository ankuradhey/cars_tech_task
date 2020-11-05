import React from "react";
import { fireEvent, render, act } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router, Route } from "react-router-dom";
import { CarCard } from "./CarCard";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../theme";

describe("CarCard Component", () => {
    let renderComponent;
    const history = { ...createMemoryHistory(), push: jest.fn(() => {}) };

    beforeEach(() => {
        renderComponent = render(
            <ThemeProvider theme={defaultTheme}>
                <Router history={history}>
                    <Route path="/">
                        <CarCard
                            id="1"
                            pictureUrl="/image"
                            title="car title"
                            subTitle="car subtitle"
                        />
                    </Route>
                </Router>
            </ThemeProvider>
        );
    });

    it("Should render CarCard component", () => {
        const { container, getByText } = renderComponent;
        expect(getByText("car title")).toBeInTheDocument();
        expect(getByText("car subtitle")).toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
    });

    it("Should navigate to Car details page when view details link is clicked", () => {
        const { getByTestId } = renderComponent;
        act(() => {
            fireEvent.click(
                getByTestId("viewDetailsLink"),
                new MouseEvent("click", {
                    bubbles: true,
                    cancelable: true,
                })
            );
        });
        expect(history.push).toHaveBeenCalledWith("/car/1");
    });
});
