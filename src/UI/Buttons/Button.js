import React from 'react';
import styled from 'styled-components';

import { 
    MAIN_THEME_COLOR, MAIN_THEME_COLOR_DARKER,
    DANGER_RED,
} from '../../constants/colors';

/* props: filled, disabled, danger */

export default ( props ) => {
    const elemWidth = props.width;

    const Button = styled.button`
        background-color: ${props => (props.filled ? MAIN_THEME_COLOR : props.disabled ? '#e1e1e1' : 'transparent')};
        color: ${props => ((props.filled || props.disabled) ? '#fff' : 'inherit')};
        width: ${elemWidth || '100%'};
        padding: 7px 10px;
        border: none;
        border-radius: 5px;

        cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

        &:hover {
            background-color: ${props => ((props.danger && props.filled) ?  DANGER_RED : (!props.danger && props.filled) ? MAIN_THEME_COLOR_DARKER : props.disabled ? '#e1e1e1' : 'transparent')};
            font-weight: ${props => ((props.filled || props.disabled) ? 'inherit' : '500')};
            color: ${props => ((props.danger && !props.filled && !props.disabled) ? DANGER_RED : (props.filled || props.disabled) ? '#fff' : 'inherit')};
        }

        &:focus {
            background-color: ${props => (props.filled ? MAIN_THEME_COLOR_DARKER : props.disabled ? '#e1e1e1' : 'transparent')};
        }
    `;


    return(
        <Button {...props} />
    );
}