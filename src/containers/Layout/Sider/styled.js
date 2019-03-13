import styled from 'styled-components';
import {MAIN_THEME_COLOR, MAIN_THEME_COLOR_DARKER} from '../../../constants/colors';

export const SiderContainer = styled.nav`
    grid-area: sider;
    width: 150px;
    min-height: 100vh;
    /* min-height: auto; */
    background-color: ${MAIN_THEME_COLOR};
    color: #fff;

    transition: width ease .3s;
`;

export const SiderCategoryButton = styled.div`
    display: none;
    width: auto;
    position: absolute;
    bottom: ${props => (props.edit ? '11px' : '2px')};
    right: 20px;
    font-size: 17px;
    color: inherit;
    line-height: 1;

    cursor: pointer;

    &:hover {
        font-size: 18px;
    }
`;

export const SiderHeader = styled.span`
    display: inline-block;
    width: 100%;
    position: relative;
    color: inherit;
    font-size: inherit;
    text-transform: uppercase;
    padding: 20px 20px 0;
    font-weight: 500;

    &:hover ${SiderCategoryButton} {
        display: block;
    }
`;

export const SiderCategotyListItem = styled.li`
    color: inherit;
    padding: 10px 30px;
    background-color: transparent;
    position: relative;

    cursor: pointer;
    transition: background-color ease .3s;

    &:hover {
        background-color: ${MAIN_THEME_COLOR_DARKER};

        & ${SiderCategoryButton} {
            display: block;
        }
    }
`;

/* Modal data start*/
export const ModalDataWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 400px;
    padding-bottom: 80px;
    position: relative;
`;
export const ModalButtonsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    position: absolute;
    right: 0;
    bottom: 0;

    & button {
        margin-left: 10px;
    }
`;
/* Modal data end*/


