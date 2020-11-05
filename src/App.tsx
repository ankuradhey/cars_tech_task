import React from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./App.css";
import { Home } from "./components/Home";
import { CarDetails } from "./components/CarDetails/CarDetails";
import { NotFound } from "./components/NotFound";

function App() {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/car/:id" component={CarDetails} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </>
    );
}

export default App;
