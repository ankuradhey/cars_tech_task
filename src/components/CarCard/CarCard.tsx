import React, { FC } from "react";
import { Card } from "react-bootstrap";
import { ImgCard } from "../ImgCard";
import { Text } from "../Text";
import * as Styled from "./CarCard.style";

export const CarCard: FC = () => {
    return (
        <Card className="mb-2">
            <Styled.CardWrap>
                <Styled.ImgWrap>
                    <ImgCard
                        width="100px"
                        height="80px"
                        src="https://auto1-js-task-api--mufasa71.repl.co/images/car.svg"
                    />
                </Styled.ImgWrap>
                <Styled.ContentWrap>
                    <Card.Title>Card Title</Card.Title>
                    <Text size="regular">Stock # 61184 - 152.263 KM - Petrol - Yellow</Text>
                    <Card.Link href="#">View details</Card.Link>
                </Styled.ContentWrap>
            </Styled.CardWrap>
        </Card>
    );
};
