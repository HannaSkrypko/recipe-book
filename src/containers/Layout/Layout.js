import React, { Component } from 'react';
// import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';
// import { Spin } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Sider from './Sider';
import Content from './Content';

import * as actions from '../../store/actions';

const LayoutContainer = styled.div`
    min-width: 320px;
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-areas: 'sider content';
    grid-template-columns: auto 1fr;
`;

class Layout extends Component {

    componentDidMount() {
        this.props.onInitCategories();
    }
    
    render() {
        return (
            <LayoutContainer>
                <Sider />
                <Content />
            </LayoutContainer>
        );
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onInitCategories: () => dispatch(actions.initCategories()),
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Layout));