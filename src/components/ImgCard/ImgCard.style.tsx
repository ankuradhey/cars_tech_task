import { ReactNode } from "react";
import styled, { css } from "styled-components";

export const ImgCard = styled.div<{
    width: string;
    height: string;
    loading: boolean;
    children: ReactNode;
}>`
    width: ${(props) => props.width ?? "100px"};
    height: ${(props) => props.height ?? "80px"};
    position: relative;
    overflow: hidden;
    background: #ededed;
    img {
        width: 100%;
        height: auto;
    }
    ${(props) =>
        props.loading &&
        css`
            :before {
                content: "";
                display: block;
                position: absolute;
                left: -150px;
                top: 0;
                height: 100%;
                width: 150px;
                background: linear-gradient(
                    to right,
                    transparent 0%,
                    #e8e8e8 50%,
                    transparent 100%
                );
                animation: load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            }
        `}
`;
