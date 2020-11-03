import React, { FC, useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { constant } from "../../constant";
import { ImgCard } from "../ImgCard";
import { Text } from "../Text";
import { Car } from "../../types";
import { Button } from "../Button";

export const CarDetails: FC = () => {
    let { id } = useParams();
    const savedCars: number[] = JSON.parse(localStorage.getItem("savedCars") || "[]");
    const [saved, setSaved] = useState(!!savedCars.find((val) => val === id));
    const [carData, setCarData] = useState<Car>(null);

    const saveCar = () => {
        let newSavedCars = [...savedCars, id];
        localStorage.setItem("savedCars", JSON.stringify(newSavedCars));
        setSaved(true);
    };

    const unSaveCar = () => {
        let newSavedCars = savedCars.filter((val) => val !== id);
        localStorage.setItem("savedCars", JSON.stringify(newSavedCars));
        setSaved(false);
    };

    const saveClick = () => {
        if (saved) {
            unSaveCar();
        } else {
            saveCar();
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(
                `${constant.host}${constant.carDetailsUrl.replace("{stockNumber}", id)}`
            );
            const data = await result.json();
            setCarData(data.car);
        };
        fetchData();
    }, [id]);

    if (!carData) return <Text size="large">Loading...</Text>;

    const {
        manufacturerName,
        modelName,
        pictureUrl,
        stockNumber,
        mileage,
        fuelType,
        color,
    } = carData;

    return (
        <>
            <Container fluid className="margin-bottom-3">
                <Row>
                    <Col>
                        <ImgCard src={pictureUrl} width="100%" height="400px" />
                    </Col>
                </Row>
            </Container>
            <Container style={{ width: "800px" }}>
                <Row>
                    <Col md={7}>
                        <Text size="heading" className="d-block margin-bottom-3">
                            {manufacturerName} {modelName}
                        </Text>
                        <Text size="large" className="d-block margin-bottom-3">
                            Stock # {stockNumber} - {mileage?.number} {mileage?.unit?.toUpperCase()}{" "}
                            - {fuelType} - {color}
                        </Text>
                        <Text size="regular" className="d-block margin-bottom-3 text-justify">
                            This car is currently available and can be delivered as sson as tomorrow
                            morning. Please be aware that delivery times shown in this page are not
                            definitive and may change due to bad weather conditions.
                        </Text>
                    </Col>
                    <Col md={5}>
                        <Card>
                            <Card.Body>
                                <Text
                                    size="regular"
                                    className="d-block margin-bottom-1 text-justify"
                                >
                                    If you like this car, click the button and save it in your
                                    collection of favorite items.
                                </Text>
                                {saved ? (
                                    <Button
                                        variant="tertiary"
                                        className="float-right"
                                        onClick={saveClick}
                                    >
                                        Unsave
                                    </Button>
                                ) : (
                                    <Button
                                        variant="primary"
                                        className="float-right"
                                        onClick={saveClick}
                                    >
                                        Save
                                    </Button>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
