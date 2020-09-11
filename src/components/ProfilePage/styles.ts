import styled, { css } from 'styled-components';

import { LocationOn, Cake } from '../../styles/icons';
import  Button from '../Button'; 

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    max-height: 100%;
    overflow-y: auto;

    scrollbar-width: none; /** Firefox */

    /** chrome */
    ::-webkit-scrollbar{ 
        display: none;
    }
`;

export const Banner = styled.div`
    flex-shrink: none;

    width: 100%;
    height: min(33vw, 199px); /** tamanho é 33vw ou no min 199 */

    background: var(--twitter);

    position: relative;
`;
export const Avatar = styled.div`
    width: max(45px, min(135px, 22vw)); /**min 45 e max135 baseado no 22vw */
    height: max(45px, min(135px, 22vw));

    border: 3.75px solid var(--primary);
    background: var(--gray);
    border-radius: 50%;

    position: absolute; /*só funciona se o elemento pai estiver com position relative*/
    bottom: max(-60px, -10vw); /**maior valor entra -60 e -10 */
    left: 15px;
`;
export const ProfileData = styled.div`
    padding: min(calc(10vw + 7px), 67px) 16px 0; /** cima 10vw + 7px), 67px) direita e esqueda 16px 0 */
    display: flex;
    flex-direction: column; 
    position: relative;

    > h1 {
        font-weight: bold;
        font-size: 19px;
    }

    >h2 {
        font-weight: normal;
        font-size: 15px;

        color: var(--gray);
    }

    > p {
        font-size: 15px;
        margin-top: 11px;
    

    > a {
        text-decoration: none;
        color: var(--twitter); 
    }
    }
    > ul {  
        list-style: none;
        margin-top: 10px;
        margin-bottom: 10px;

        > li {
            font-size: 15px;
            color: var(--gray);            
        

            > svg{
                fill: var(--gray);
                margin-right: 5px;
            }
        }

    }
`;

const iconCSS = css`
    width: 20px;
    height: 20px;

    color: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`${iconCSS}`;
export const CakeIcon = styled(Cake)`${iconCSS}`;

export const Fallowage = styled.div`
    display: flex;

    > span{
        font-size: 15px;
        color: var(--gray);

        /**pegar todos span dps do primeiro */
       & + span{
           margin-left: 20px;
       }
    }
`;


export const EditButton = styled(Button)`
    position: absolute;
    top: 2vw;
    right: 7px;

    padding: 4px 16px;
    font-size: 13px;

    @media(min-width: 320px){
        top: 10px;
        padding: 10px 19px;
        font-size: 15px;
    }
`;