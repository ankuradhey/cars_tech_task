import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../theme";
import { Header } from "./Header";

describe("Header Component", () => {
    it("Should render Header component", () => {
        const history = createMemoryHistory();
        const route = "/";
        history.push(route);

        const { container, getByText } = render(
            <ThemeProvider theme={defaultTheme}>
                <Router history={history} initialEntries={["/"]}>
                    <Header />
                </Router>
            </ThemeProvider>
        );
        expect(getByText("Purchase")).toBeInTheDocument();
        expect(getByText("My Orders")).toBeInTheDocument();
        expect(getByText("Sell")).toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
    });
});
