import React, { FC } from "react";
import * as Styled from "./Text.style";

export const Text: FC = (props) => {
    return <Styled.Text {...props}>{props.children}</Styled.Text>;
};
