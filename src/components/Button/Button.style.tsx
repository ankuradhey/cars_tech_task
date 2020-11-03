import styled, { css } from "styled-components";

export enum VARIANT {
    PRIMARY = "primary",
    SECONDARY = "secodary",
    TERTIARY = "tertiary",
}
interface IProps {
    variant?: VARIANT;
}

export const Button = styled.button<IProps>`
    border-radius: ${(props) => props.theme.borderRadius};
    border: none;
    width: 128px;
    height: 32px;
    :focus {
        outline: none;
    }

    ${(props) => {
        switch (props.variant) {
            case VARIANT.TERTIARY:
                return tertiaryBtnCss;
            case VARIANT.SECONDARY:
                return secondaryBtnCss;
            case VARIANT.PRIMARY:
            default:
                return primaryBtnCss;
        }
    }}
`;

const secondaryBtnCss = css`
    color: ${(props) => props.theme.palette.secondary.contrastText};
    background-color: ${(props) => props.theme.palette.secondary.main};
    :hover {
        color: ${(props) => props.theme.palette.secondary.contrastText};
        background-color: ${(props) => props.theme.palette.secondary.main};
    }
    :active {
        color: ${(props) => props.theme.palette.secondary.contrastText};
        background-color: ${(props) => props.theme.palette.secondary.main};
    }
`;

const primaryBtnCss = css`
    color: ${(props) => props.theme.palette.primary.contrastText};
    background-color: ${(props) => props.theme.palette.primary.main};
    :hover {
        color: ${(props) => props.theme.palette.secondary.contrastText};
        background-color: ${(props) => props.theme.palette.secondary.main};
    }
    :active {
        color: ${(props) => props.theme.palette.secondary.contrastText};
        background-color: ${(props) => props.theme.palette.secondary.main};
    }
`;

const tertiaryBtnCss = css`
    color: ${(props) => props.theme.palette.tertiary.contrastText};
    color: ${(props) => props.theme.palette.tertiary.main};
    background-color: ${(props) => props.theme.palette.tertiary.contrastText};
    :active {
        color: ${(props) => props.theme.palette.tertiary.main};
        background-color: ${(props) => props.theme.palette.tertiary.contrastText};
    }
`;
