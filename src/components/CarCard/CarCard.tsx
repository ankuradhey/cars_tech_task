import React, { FC } from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { CarCardProps } from "../../types";
import { ImgCard } from "../ImgCard";
import { Link } from "../Link";
import { Text } from "../Text";
import * as Styled from "./CarCard.style";

export const CarCard: FC<CarCardProps> = ({ id, pictureUrl, title, subTitle }) => {
    const history = useHistory();

    const navigateTo = () => {
        history.push(`/car/${id}`);
    };

    return (
        <Card className="margin-bottom-2">
            <Styled.CardWrap>
                <Styled.ImgWrap>
                    <ImgCard width="100px" height="80px" src={pictureUrl} />
                </Styled.ImgWrap>
                <Styled.ContentWrap>
                    <Card.Title>{title}</Card.Title>
                    <Text size="regular">{subTitle}</Text>
                    <Link data-testid="viewDetailsLink" className="d-block" onClick={navigateTo}>
                        View details
                    </Link>
                </Styled.ContentWrap>
            </Styled.CardWrap>
        </Card>
    );
};
