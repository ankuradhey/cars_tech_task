import React, { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FilterResult } from "../FilterResult/FilterResult";
import { Sidebar } from "../Sidebar";

export const Home: FC = () => {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Sidebar />
                </Col>
                <Col md={8}>
                    <FilterResult />
                </Col>
            </Row>
        </Container>
    );
};
