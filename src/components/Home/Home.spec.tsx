import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../theme";
import { Home } from "./Home";

describe("Home Component", () => {
    it("Should render Home component", () => {
        const history = createMemoryHistory();
        const route = "/";
        history.push(route);

        const { container, getByText } = render(
            <ThemeProvider theme={defaultTheme}>
                <Router history={history} initialEntries={["/"]}>
                    <Home />
                </Router>
            </ThemeProvider>
        );
        expect(getByText("Color")).toBeInTheDocument();
        expect(getByText("Manufacturer")).toBeInTheDocument();
        expect(getByText("Available cars")).toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
    });
});
