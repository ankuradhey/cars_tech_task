import styled from "styled-components";

export enum VARIANT {
    PRIMARY = "primary",
    SECONDARY = "secodary",
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
    :active {
        color: ${(props) => props.theme.palette.secondary.contrastText};
        background-color: ${(props) => props.theme.palette.secondary.main};
    }
    :hover {
        color: ${(props) => props.theme.palette.secondary.contrastText};
        background-color: ${(props) => props.theme.palette.secondary.main};
    }
    ${(props) => {
        switch (props.variant) {
            case VARIANT.SECONDARY:
                return `
          color: ${props.theme.palette.secondary.contrastText};
          background-color: ${props.theme.palette.secondary.main};
        `;
            case VARIANT.PRIMARY:
            default:
                return `
          color: ${props.theme.palette.primary.contrastText};
          background-color: ${props.theme.palette.primary.main};
        `;
        }
    }}
`;
