import styled from "styled-components";

export const Footer = styled.footer`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: solid 1px ${(props) => props.theme.palette.common.white};
`;
