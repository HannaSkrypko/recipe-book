import React, { Component } from 'react';
import { Icon } from 'antd';

import {
    ModalContainer, ModalOverlay,
    ModalContent, ModalTitle, ModalCloseButton,
} from './styled';

export default class Modal extends Component {
    render() {
        const title = this.props.title ? <ModalTitle>{this.props.title}</ModalTitle> : null;

        const closeButton = (
            <ModalCloseButton onClick={this.props.closeModal}>
                <Icon type="close" />
            </ModalCloseButton>
        )

        return(
            <ModalContainer>
                <ModalContent>
                    { title }
                    { this.props.children }
                    { closeButton }
                </ModalContent>
                <ModalOverlay onClick={this.props.closeModal}/>
            </ModalContainer>
        );
    };
} ;