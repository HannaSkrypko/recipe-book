import styled from 'styled-components';
import { FONT_COLOR } from '../../../constants/colors';

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 900;
    color: ${FONT_COLOR};

`;

export const ModalOverlay = styled.div`
    position: absolute;
    width:100%;
    height: 100%;
    z-index: 901;
    background-color: #202C39;
    opacity: .25;
`;

export const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 37px;
    z-index: 902;
    background-color: #fff;
    border-radius: 10px;
    max-height: 90vh;
    overflow-y: auto;
    min-width: 300px;
    color: inherit;
`;

export const ModalTitle = styled.div`
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 22px;
    color: inherit;
`;

export const ModalCloseButton = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 20px;

    cursor: pointer;

    &:hover {
        font-size: 22px;
    }
`;