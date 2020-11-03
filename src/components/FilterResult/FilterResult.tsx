import React, { FC, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { constant } from "../../constant";
import { Car, FilterResultProps } from "../../types";
import { CarCard } from "../CarCard";
import { LoadingCarCard } from "../Loader/LoadingCard";
import { Paginator } from "../Paginator/Paginator";
import { Text } from "../Text";

export const FilterResult: FC<FilterResultProps> = ({ color, manufacturer }) => {
    const [cars, setCars] = useState(new Array(10).fill(null));
    const [page, setPage] = useState(1);
    const [carsData, setCarsData] = useState({});
    const [loading, setLoading] = useState(true);

    const navigateToPage = (page) => {
        setPage(page);
    };

    useEffect(() => {
        setLoading(true);
        const fetchData = async (color, manufacturer) => {
            let url = `${constant.url}?page=${page}`;

            // If color is found then add to url string
            if (color) {
                url += `&color=${color}`;
            }
            // If manufacturer is found then add to url string
            if (manufacturer) {
                url += `&manufacturer=${manufacturer}`;
            }

            const result = await fetch(`${url}`);
            const data = await result.json();
            setCars(data.cars);
            setCarsData({ totalPages: data.totalPageCount, totalRecords: data.totalCarsCount });
            setLoading(false);
        };
        fetchData(color, manufacturer);
    }, [page, color, manufacturer]);

    // Another useeffect to set first page when fresh record appears
    useEffect(() => {
        setPage(1);
    }, [color, manufacturer]);

    return (
        <>
            <Text size="large" isBold className="d-block margin-bottom-2">
                Available cars
            </Text>
            <Text size="large" className="margin-bottom-3">
                {loading ? "Loading" : `Showing ${cars.length} of ${carsData.totalRecords} results`}
            </Text>

            {cars.map((car: Car) => {
                if (loading) return <LoadingCarCard />;

                const title = `${car?.manufacturerName} ${car?.modelName}`;
                const subTitle = `Stock # ${car?.stockNumber}-${
                    car?.mileage?.number
                }${car?.mileage?.unit.toUpperCase()}-${car?.fuelType}-${car?.color}`;

                return (
                    <Row>
                        <Col>
                            <CarCard
                                title={title}
                                subTitle={subTitle}
                                id={car?.stockNumber}
                                pictureUrl={car?.pictureUrl}
                            />
                        </Col>
                    </Row>
                );
            })}
            <Paginator
                totalPages={carsData.totalPages}
                currentPage={page}
                navigateToPage={navigateToPage}
            />
        </>
    );
};
