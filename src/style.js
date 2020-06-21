import styled from "styled-components";

//set color

export const setColor = {
    primaryColor:"#afa278",
    secondaryColor:'#191919',
    whiteColor:'#fff',
    offWhiteColor:'#f8f7f5',


}

//Set font
export const setFont = {
main:"'Lato', sans-serif",
secondary:"'Raleway',sans-serif"
  };
//Set rem
  export const setRem = (number = 16) => {
    return `${number / 16}rem`;
  };