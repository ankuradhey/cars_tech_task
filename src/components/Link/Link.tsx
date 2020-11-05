import React, { FC } from "react";
import * as Styled from "./Link.style";

export enum VARIANT {
    BUTTON,
    LINK,
}

type LinkProps = {
    variant?: VARIANT;
};

export const Link: FC<LinkProps> = ({ variant = VARIANT.BUTTON, ...props }) => {
    return <Styled.Link variant={variant} {...props} />;
};
