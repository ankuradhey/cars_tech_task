import styled from "styled-components";

export const Link = styled.button`
    font-size: 12px;
    background: none;
    border: none;
    padding: 0;
    outline: none;
    color: ${(props) => props.theme.palette.primary.main};
    :hover {
        color: ${(props) => props.theme.palette.primary.main};
        text-decoration: underline;
    }
    :active {
        ${(props) => props.theme.palette.primary.main};
    }
    :focus {
        outline: none;
    }
`;
