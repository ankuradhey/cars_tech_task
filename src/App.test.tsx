import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { MemoryRouter } from "react-router-dom";
import nock from "nock";
import { defaultTheme } from "./theme";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { constant } from "./constant";
import * as carsMock from "./mock/cars.json";
import * as carDetailMock from "./mock/carDetail.json";
import * as colorsMock from "./mock/colors.json";
import * as manufacturersMock from "./mock/manufacturers.json";

describe("App Component", () => {
    let history;
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
    });

    it("Should do full app rendering/navigating", () => {
        const { container } = render(
            <ThemeProvider theme={defaultTheme}>
                <MemoryRouter initialEntries={["/"]}>
                    <App />
                </MemoryRouter>
            </ThemeProvider>
        );
        expect(screen.getByText(/Available cars/i)).toBeInTheDocument();
        expect(screen.getByText(/AUTO1 Group 2018/i)).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });

    it("Should be landing on a bad page", () => {
        const { container, getByText } = render(
            <ThemeProvider theme={defaultTheme}>
                <MemoryRouter initialEntries={["/unknown"]}>
                    <App />
                </MemoryRouter>
            </ThemeProvider>
        );
        expect(container).toMatchSnapshot();
        expect(getByText(/404 - Not Found/i)).toBeInTheDocument();
        expect(
            getByText(/Sorry, the page you are looking for does not exist./i)
        ).toBeInTheDocument();
    });

    it("Should be landing on a car details", async () => {
        nock(`${constant.host}`)
            .defaultReplyHeaders({
                "access-control-allow-origin": "*",
                "access-control-allow-credentials": "true",
            })
            .get(`${constant.carDetailsUrl.replace("{stockNumber}", "10058")}`)
            .reply(200, carDetailMock);

        history.push({ pathname: "/car/10058" });
        const { container, getByText } = render(
            <ThemeProvider theme={defaultTheme}>
                <MemoryRouter initialEntries={["/car/10058"]}>
                    <App />
                </MemoryRouter>
            </ThemeProvider>
        );
        expect(getByText("Loading...")).toBeInTheDocument();
        await waitFor(() =>
            screen.findByText(
                `${carDetailMock.car.manufacturerName} ${carDetailMock.car.modelName}`
            )
        );
        expect(container).toMatchSnapshot();
        expect(
            getByText(`${carDetailMock.car.manufacturerName} ${carDetailMock.car.modelName}`)
        ).toBeInTheDocument();
    });
});
