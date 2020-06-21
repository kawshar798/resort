import { createGlobalStyle } from "styled-components";
import {setColor,setFont,setRem} from "../style";
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Raleway:wght@300;400;500;600;700&display=swap');

*{
    padding:0%;
    margin:0;
    box-sizing:border-box;
}
  body {
font-family:${setFont.main};
color:${setColor.primaryColor};
font-size:${setRem(16)};
   
  };
  a{
      display: block;
      text-decoration:none;
  }
`
export default GlobalStyle;