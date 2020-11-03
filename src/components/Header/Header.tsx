import React, { FC } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export const Header: FC = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <Link className="brand my-0 mr-md-auto font-weight-normal" to="/">
                <img src={logo} alt="Auto1.com" />
            </Link>
            <nav className="my-2 my-md-0 mr-md-3">
                <Link className="p-2 text-dark" to="/">
                    Purchase
                </Link>
                <Link className="p-2 text-dark" to="/">
                    My Orders
                </Link>
                <Link className="p-2 text-dark" to="/">
                    Sell
                </Link>
            </nav>
        </div>
    );
};
