import React, { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CarCard } from "../CarCard";
import { Sidebar } from "../Sidebar";
import { Text } from "../Text";

export const FilterResult: FC = () => {
    return (
        <>
            <Text size="large" isBold>
                Available cars
            </Text>
            <Text size="large">Showing 10 of 100 results</Text>
            {new Array(10).fill(10).map(() => {
                return (
                    <Row>
                        <Col>
                            <CarCard />
                        </Col>
                    </Row>
                );
            })}
        </>
    );
};
