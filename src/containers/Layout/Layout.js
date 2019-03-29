import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sider from './Sider';
import Content from './Content';

import * as actions from '../../store/actions';
import LayoutContainer from './styled';


class Layout extends Component {

    componentDidMount() {
        this.props.onInitCategories();
    }
    
    render() {
        return (
            <LayoutContainer>
                <Sider categories={this.props.categories}/>
                <Content />
            </LayoutContainer>
        );
    };
};

const mapStateToProps = state => {
    return {
        categories: state.categories,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitCategories: () => dispatch(actions.initCategories()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);