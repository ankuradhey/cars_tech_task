import React, { FC } from "react";
import * as Styled from "./ImgCard.style";
import { ImgProps } from ".";

export const ImgCard: FC<ImgProps> = ({ src, width, height }) => {
    return (
        <Styled.ImgCard width={width} height={height}>
            <img src={src} alt="car" />
        </Styled.ImgCard>
    );
};
