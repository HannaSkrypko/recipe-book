import React, { Component } from 'react';
import { Icon } from 'antd';

import Button from '../../../UI/Button/Button';

import {
    ModalContainer, ModalOverlay,
    ModalContent, ModalTitle, ModalCloseButton,
} from './styled';

export default class Modal extends Component {
    
    render() {
        const title = this.props.title ? <ModalTitle>{this.props.title}</ModalTitle> : null;

        const closeButton = (
            <ModalCloseButton>
                <Icon type="close" />
            </ModalCloseButton>
        )

        return(
            <ModalContainer>
                <ModalContent>
                    { title }
                    { this.props.children }
                    { closeButton }

                    <Button danger> default </Button>
                    <Button filled danger> empty danger </Button>
                    <Button disabled danger> disabled </Button>
                </ModalContent>
                <ModalOverlay />
            </ModalContainer>
        );
    };
} ;