import styled, { css } from "styled-components";

type TextProps = {
    size: string;
    isBold: boolean;
};

export const Text = styled.div<TextProps>`
    ${(props) =>
        props.size === "small" &&
        css`
            font-size: 12px;
        `}
    ${(props) =>
        props.size === "regular" &&
        css`
            font-size: 14px;
        `}
    ${(props) =>
        props.size === "large" &&
        css`
            font-size: 18px;
        `}
    ${(props) =>
        props.size === "heading" &&
        css`
            font-size: 32px;
            font-weight: bold;
        `}
    ${(props) => (props.isBold ? "font-weight:bold;" : "")}
`;
