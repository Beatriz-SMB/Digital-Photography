import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { Grey } from './variables';

export const GlobalStyled = createGlobalStyle`
  *{
      box-sizing: border-box;
      font-family: 'Nunito', sans-serif;
      font-size: 62.5%;
      font-weight: 500;
      margin: 0;
      padding: 0;
      scroll-behavior: smooth;
      text-decoration: none;
  }

`
