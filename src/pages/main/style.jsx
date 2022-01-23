import styled from 'styled-components';
import { Beige, DarkBlue, Grey } from '../../components/UI/variables';

export const Container = styled.div`
    background: ${Beige};
    width: 100%;

    div#home{
        align-items: center;
        display: flex;
        height: calc(100vh - 10vh);
        margin: 0 auto;
        width: 60%;

        h1{
            color: ${DarkBlue};
            font-size: 8rem;
            font-weight: 900;
            text-transform: capitalize;
        }
    
        img{
            height: 50vh;
            width: 50%;
        }
    }

    div.video-container{
        background: ${Grey};
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
        width: 100%;

        iframe{
            height: 60vh;
            margin: 0 auto;
            width: 50%;
        }
        
        div{
            display: flex;
            justify-content: space-around;
            margin: 20px auto;
            width: 10%;

            figure{

                img{
                    cursor: pointer;
                    height: 40px;
                    width: 40px;
                }

                figcaption{
                    font-size: 1.6rem;
                    margin-top: 2px
                }
            }
        }
    }

`