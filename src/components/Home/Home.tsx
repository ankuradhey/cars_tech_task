import React, { FC, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FilterState } from "../../types";
import { FilterResult } from "../FilterResult";
import { Sidebar } from "../Sidebar";

export const Home: FC = () => {
    const [filter, setFilter] = useState<FilterState>({ color: "", manufacturer: "" });

    const submitFilter = (val) => {
        setFilter({ ...val });
    };

    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Sidebar setFilter={submitFilter} />
                </Col>
                <Col md={8}>
                    <FilterResult
                        color={filter?.color ?? ""}
                        manufacturer={filter?.manufacturer ?? ""}
                    />
                </Col>
            </Row>
        </Container>
    );
};
