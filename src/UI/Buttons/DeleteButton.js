import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import { DANGER_RED } from '../../constants/colors';

export default (props) => {
    const DeleteButton = styled.button`
        color: ${DANGER_RED};
        font-size: 16px;
        background-color: transparent;
        border: none;
        display: inline-block;
        height: 40px;
        line-height: 40px;
        width: 40px;
        
        cursor: pointer;

        &:hover {
            font-size: 18px;
        }
    `;

    return(
        <DeleteButton {...props}>
            <Icon type="delete" />
        </DeleteButton>
    );
};