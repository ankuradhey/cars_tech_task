import React, { FC } from "react";
import { Card } from "react-bootstrap";
import { ImgCard } from "../ImgCard";
import { Link } from "../Link/Link.style";
import * as Styled from "../CarCard/CarCard.style";

export const LoadingCarCard: FC = () => {
    return (
        <Card className="margin-bottom-2">
            <Styled.CardWrap>
                <Styled.ImgWrap>
                    <ImgCard width="100px" height="80px" loading />
                </Styled.ImgWrap>
                <Styled.ContentWrap>
                    <ImgCard width="100%" height="18px" className="margin-bottom-1" loading />
                    <ImgCard width="100%" height="12px" className="margin-bottom-2" loading />
                    <ImgCard
                        width="auto"
                        height="12px"
                        className="margin-bottom-2 d-inline-block"
                        loading
                    >
                        <Link className="invisible">View details</Link>
                    </ImgCard>
                </Styled.ContentWrap>
            </Styled.CardWrap>
        </Card>
    );
};
