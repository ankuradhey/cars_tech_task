import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./App.css";
import { Home } from "./components/Home";
import { CarDetails } from "./components/CarDetails/CarDetails";

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/car/:id" component={CarDetails} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
