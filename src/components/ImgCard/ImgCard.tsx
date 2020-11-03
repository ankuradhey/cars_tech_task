import React, { FC } from "react";
import * as Styled from "./ImgCard.style";
import { ImgProps } from ".";

export const ImgCard: FC<ImgProps> = ({
    src,
    width,
    height,
    className,
    children,
    loading = false,
}) => {
    return (
        <Styled.ImgCard
            width={width}
            height={height}
            className={className}
            loading={loading.toString()}
        >
            {src && <img src={src} alt="car" />}
            {children}
        </Styled.ImgCard>
    );
};
