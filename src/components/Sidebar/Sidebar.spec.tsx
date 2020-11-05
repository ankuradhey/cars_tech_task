import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import nock from "nock";
import { render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../theme";
import { Sidebar } from "./Sidebar";
import { constant } from "../../constant";
import * as colorsMock from "../../mock/colors.json";
import * as manufacturersMock from "../../mock/manufacturers.json";

describe("Sidebar Component", () => {
    let history, component, setFilter;
    beforeEach(() => {
        setFilter = jest.fn(() => {});
        history = createMemoryHistory();
        const route = "/";
        history.push(route);

        component = render(
            <ThemeProvider theme={defaultTheme}>
                <Router history={history} initialEntries={["/"]}>
                    <Sidebar setFilter={setFilter} />
                </Router>
            </ThemeProvider>
        );

        nock(`${constant.host}`)
            .defaultReplyHeaders({
                "access-control-allow-origin": "*",
                "access-control-allow-credentials": "true",
            })
            .get(constant.colorsUrl)
            .reply(200, colorsMock);

        nock(`${constant.host}`)
            .defaultReplyHeaders({
                "access-control-allow-origin": "*",
                "access-control-allow-credentials": "true",
            })
            .get(constant.manufacturersUrl)
            .reply(200, manufacturersMock);

        history = createMemoryHistory();
    });

    it("Should render Sidebar component", () => {
        const { container, getByText } = component;
        expect(getByText("Color")).toBeInTheDocument();
        expect(getByText("Manufacturer")).toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
    });

    it("Should have default values in dropdowns", () => {
        const { getByTestId } = component;
        expect(getByTestId("color").value).toBe("");
        expect(getByTestId("manufacturer").value).toBe("");
    });

    it("Should have button filter button that triggers search", () => {
        const { getByTestId } = component;
        expect(getByTestId("filter")).toBeInTheDocument();

        fireEvent.click(
            getByTestId("filter"),
            new MouseEvent("click", {
                bubbles: true,
                cancelable: true,
            })
        );

        expect(setFilter).toHaveBeenCalledWith({ color: "", manufacturer: "" });
    });
});
