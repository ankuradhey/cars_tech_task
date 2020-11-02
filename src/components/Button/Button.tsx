import React, { FC } from "react";
import * as Styled from "./Button.style";

export const Button: FC = (props) => {
    return <Styled.Button {...props} />;
};
