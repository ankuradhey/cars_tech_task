import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import nock from "nock";
import { CarDetails } from "./CarDetails";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../theme";
import * as carDetailMock from "../../mock/carDetail.json";
import { constant } from "../../constant";

describe("CarDetails Component", () => {
    beforeEach(() => {
        nock(constant.host)
            .defaultReplyHeaders({
                "access-control-allow-origin": "*",
                "access-control-allow-credentials": "true",
            })
            .get(`${constant.carDetailsUrl.replace("{stockNumber}", "10058")}`)
            .reply(200, carDetailMock);
    });

    it("Should render CarDetails component", async () => {
        const history = createMemoryHistory();
        const route = "/car/10058";
        history.push(route);

        const { container, getByText } = render(
            <ThemeProvider theme={defaultTheme}>
                <Router history={history} initialEntries={["/car/10058"]}>
                    <Route path="/car/:id" component={CarDetails} />
                </Router>
            </ThemeProvider>
        );
        expect(getByText("Loading...")).toBeInTheDocument();
        await waitFor(() =>
            screen.findByText(
                `${carDetailMock.car.manufacturerName} ${carDetailMock.car.modelName}`
            )
        );
        expect(
            getByText(`${carDetailMock.car.manufacturerName} ${carDetailMock.car.modelName}`)
        ).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });
});
