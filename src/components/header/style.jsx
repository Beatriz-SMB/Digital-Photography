import styled from 'styled-components';
import { DarkBlue } from '../UI/variables';

export const Menu = styled.ul`
    align-items: center;
    display: flex;
    height: 10vh;
    justify-content: space-around;
    margin: 0 auto;
    width: 25%;
    li{
        list-style: none;
        a{
            color: ${DarkBlue};
            font-size: 2rem;
            text-decoration: none;

            &:hover{
                border-bottom: 2px solid ${DarkBlue};
            }
        }
    }
`