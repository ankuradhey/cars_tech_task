import { ReactNode } from "react";
import styled from "styled-components";

export const ImgCard = styled.div<{ width: string; height: string; children: ReactNode }>`
    width: ${(props) => props.width ?? "100px"};
    height: ${(props) => props.height ?? "80px"};
    background: #ededed;
    img {
        width: 100%;
        height: auto;
    }
`;
