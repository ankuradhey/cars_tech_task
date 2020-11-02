import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./App.css";
import { Home } from "./components/Home";

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <Header />
                <Route path="/" component={Home} />
                <Footer />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
