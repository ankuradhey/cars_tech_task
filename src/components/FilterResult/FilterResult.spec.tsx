import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Router, Route, MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import nock from "nock";
import { FilterResult } from "./FilterResult";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../theme";
import * as carsMock from "../../mock/cars.json";
import * as colorsMock from "../../mock/colors.json";
import * as manufacturersMock from "../../mock/manufacturers.json";

import { constant } from "../../constant";

describe("FilterResult Component", () => {
    let history, component;

    beforeEach(() => {
        nock(`${constant.host}`)
            .defaultReplyHeaders({
                "access-control-allow-origin": "*",
                "access-control-allow-credentials": "true",
            })
            .get(`${constant.carsUrl}?page=1`)
            .reply(200, carsMock);

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

        component = render(
            <ThemeProvider theme={defaultTheme}>
                <MemoryRouter initialEntries={["/"]}>
                    <FilterResult />
                </MemoryRouter>
            </ThemeProvider>
        );
    });

    it("Should do full app rendering/navigating", async () => {
        const { container } = component;
        expect(screen.getByText(/Available cars/i)).toBeInTheDocument();
        await waitFor(() => screen.findByText("Showing 10 of 1000 results"));
        expect(container).toMatchSnapshot();
    });

    it("Should display pagination items", async () => {
        await waitFor(() => screen.findByText("Showing 10 of 1000 results"));
        expect(screen.getByText(/First/i)).toBeInTheDocument();
        expect(screen.getByText(/Previous/i)).toBeInTheDocument();
        expect(screen.getByText(/Next/i)).toBeInTheDocument();
        expect(screen.getByText(/Last/i)).toBeInTheDocument();
        expect(screen.getByText(/Page 1 of 10/i)).toBeInTheDocument();
    });

    it("Should display car list", async () => {
        await waitFor(() => screen.findByText("Showing 10 of 1000 results"));
        expect(
            screen.getByText(`${carsMock.cars[0].manufacturerName} ${carsMock.cars[0].modelName}`)
        ).toBeInTheDocument();
    });
});
