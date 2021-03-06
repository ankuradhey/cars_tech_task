import React, { FC, useState, useEffect } from "react";
import { Card, Form } from "react-bootstrap";
import { constant } from "../../constant";
import { FilterState } from "../../types";
import { Button } from "../Button";
import { Text } from "../Text";

type SidebarProp = {
    setFilter: (props: FilterState) => void;
};

export const Sidebar: FC<SidebarProp> = ({ setFilter }) => {
    const [colors, setColors] = useState([]);
    const [manufacturers, setManufacturers] = useState([]);
    const [formValue, setFormValue] = useState({ color: "", manufacturer: "" });

    const fetchColors = async () => {
        const result = await fetch(`${constant.host}${constant.colorsUrl}`);
        const data = await result.json();
        setColors(data.colors);
    };

    const fetchManufacturers = async () => {
        const result = await fetch(`${constant.host}${constant.manufacturersUrl}`);
        const data = await result.json();
        setManufacturers(data.manufacturers.map((val) => val.name));
    };

    const setFilterState = (key, val) => {
        setFormValue({ ...formValue, [key]: val });
    };

    const filterClick = () => {
        setFilter(formValue);
    };

    useEffect(() => {
        fetchColors();
        fetchManufacturers();
    }, []);

    return (
        <Card className="margin-bottom-3">
            <Card.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>
                            <Text size="small">Color</Text>
                        </Form.Label>
                        <Form.Control
                            as="select"
                            custom
                            data-testid="color"
                            onChange={(e) => setFilterState("color", e.target.value)}
                        >
                            <option value="">All car colors</option>
                            {colors.map((val) => {
                                return <option key={val}>{val}</option>;
                            })}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            <Text size="small">Manufacturer</Text>
                        </Form.Label>
                        <Form.Control
                            as="select"
                            custom
                            data-testid="manufacturer"
                            onChange={(e) => setFilterState("manufacturer", e.target.value)}
                        >
                            <option value="">All manufacturers</option>
                            {manufacturers.map((val) => {
                                return <option key={val}>{val}</option>;
                            })}
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Button
                    variant="primary"
                    data-testid="filter"
                    className="float-right"
                    onClick={filterClick}
                >
                    Filter
                </Button>
            </Card.Body>
        </Card>
    );
};
