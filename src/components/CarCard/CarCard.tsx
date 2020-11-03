import React, { FC } from "react";
import { Card } from "react-bootstrap";
import { CarCardProps } from "../../types";
import { ImgCard } from "../ImgCard";
import { Link } from "../Link/Link.style";
import { Text } from "../Text";
import * as Styled from "./CarCard.style";

export const CarCard: FC<CarCardProps> = ({ pictureUrl, title, subTitle }) => {
    return (
        <Card className="margin-bottom-2">
            <Styled.CardWrap>
                <Styled.ImgWrap>
                    <ImgCard width="100px" height="80px" src={pictureUrl} />
                </Styled.ImgWrap>
                <Styled.ContentWrap>
                    <Card.Title>{title}</Card.Title>
                    <Text size="regular">{subTitle}</Text>
                    <Link className="d-block">View details</Link>
                </Styled.ContentWrap>
            </Styled.CardWrap>
        </Card>
    );
};
