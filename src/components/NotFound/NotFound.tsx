import React, { FC } from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { Text } from "../Text";
import { Link } from "../Link";

export const NotFound: FC = () => {
    const history = useHistory();
    return (
        <Container
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ minHeight: "calc(100vh - 160px)" }}
        >
            <img src={Logo} width="190px" alt="logo" className="margin-bottom-3 d-flex" />
            <Text size="heading" className="margin-bottom-3 d-flex">
                404 - Not Found
            </Text>
            <Text size="large" className="margin-bottom-3 d-flex">
                Sorry, the page you are looking for does not exist.
            </Text>
            <Text size="large" className="margin-bottom-2 d-flex">
                You can always go back to the &nbsp;
                <Link onClick={() => history.push("/")}> homepage</Link>
            </Text>
        </Container>
    );
};
