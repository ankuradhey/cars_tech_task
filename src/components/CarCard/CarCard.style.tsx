import styled from "styled-components";

export const CardWrap = styled.div`
    display: flex;
    padding: ${(props) => props.theme.gutterSize.md};
`;

export const ImgWrap = styled.div`
    display: flex-row;
`;

export const ContentWrap = styled.div`
    display: flex-row;
    padding-left: ${(props) => props.theme.gutterSize.sm};
`;
