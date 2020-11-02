import React, { FC } from "react";
import * as Styled from "./Footer.style";

export const Footer: FC = () => {
    return (
        <Styled.Footer className="footer text-center mt-3">
            <span className="margin-auto">© AUTO1 Group 2018</span>
        </Styled.Footer>
    );
};
