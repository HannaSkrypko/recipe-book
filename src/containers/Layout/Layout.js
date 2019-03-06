import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';
// import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Sider from './Sider';
import Modal from '../../UI/Modals/Modal/index';

const LayoutContainer = styled.div`
    min-width: 320px;
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-areas: 'sider content';
    grid-template-columns: auto 1fr;
`;

const Content = styled.div`
    grid-area: content;
    width: 100%;
    height: 100%;
`;

class Layout extends Component {
    render() {
        return (
            <LayoutContainer>
                <Sider />
                <Content />
                <Modal title="Modal"/>
            </LayoutContainer>
        );
    };
};

export default withRouter(Layout);