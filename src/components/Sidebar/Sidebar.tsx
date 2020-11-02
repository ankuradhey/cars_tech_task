import React, { FC } from "react";
import { Card, Form } from "react-bootstrap";
import { Button } from "../Button";
import { Text } from "../Text";

export const Sidebar: FC = () => {
    return (
        <Card>
            <Card.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>
                            <Text size="small">Color</Text>
                        </Form.Label>
                        <Form.Control as="select" custom>
                            <option value="">All car colors</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            <Text size="small">Manufacturer</Text>
                        </Form.Label>
                        <Form.Control as="select" custom>
                            <option value="">All manufacturers</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Button variant="primary">Filter</Button>
            </Card.Body>
        </Card>
    );
};
