import styled from 'styled-components';
import { FONT_COLOR } from '../../../constants/colors';

export const InputWrapper = styled.div`
    width: 100%;
    padding-top: 20px;
    font-size: 16px;
    position: relative;
    color: ${FONT_COLOR};
`;

export const InputField = styled.input`
    width: 100%;
    padding: 7px 15px;
    font-size: inherit;
    background-color: transparent;
    border: thin solid #787777;
    opacity: .8;
    border-radius: 5px;
    color: inherit;

    &::placeholder {
        display: none;
    }

    &:hover {
        opacity: .85;
    }

    &:focus {
        opacity: 1;
        outline: 0;
        outline-offset: 0;
    }
`;

export const InputLabel = styled.div`
    position: absolute;
    top: ${props => (props.toTop ? '-10px' : '27px')};
    left: ${props => (props.toTop ? '0' : '15px')};
    color: ${props => (props.toTop ?  'inherit' : '#cac7c7')};
    font-size: 16px;

    transition: all ease .3s;
`;