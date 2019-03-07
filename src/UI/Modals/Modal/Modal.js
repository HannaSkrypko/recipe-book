import React, { Component } from 'react';
import { Icon } from 'antd';

import { Button, Input } from '../../../UI';

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

                    <Input 
                        inputValue={this.props.inputValue || ''}
                        labelValue={this.props.labelValue || ''}
                    />
                    <Button />
                </ModalContent>
                <ModalOverlay />
            </ModalContainer>
        );
    };
} ;