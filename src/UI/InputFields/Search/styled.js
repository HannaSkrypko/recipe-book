
import styled from 'styled-components';
import { FONT_COLOR } from '../../../constants/colors';

export const Search = styled.div.attrs(({ width }) => ({
    width: width || "auto"
}))`
    width: ${props => props.width};
    position: relative;
`;

export const SearchButton = styled.button`
    position: absolute;
    right: 10px;
    bottom: 0;
    font-size: 16px;
    background-color: transparent;
    border: none;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    width: 40px;
    color: ${FONT_COLOR};
    
    cursor: pointer;

    &:hover {
        font-size: 18px;
    }
`;