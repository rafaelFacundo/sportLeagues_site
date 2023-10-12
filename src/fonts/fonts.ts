import { createGlobalStyle } from "styled-components";
import RobotoCondensed from "./Roboto-Condensed-Bold.woff";

const FontStyle = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url({RobotoCondensed}) format('woff');
    }
`;

export default FontStyle;
