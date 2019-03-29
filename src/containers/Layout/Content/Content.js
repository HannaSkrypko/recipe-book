import React, { Component } from 'react';
// import { connect } from 'react-redux';

import {
    ContentWrapper, ContextHeader,
} from './styled';
import { Search } from '../../../UI';

class Content extends Component {
    render() {
        return (
            <ContentWrapper>
                <ContextHeader>
                    <Search width="250px"/>
                </ContextHeader>
            </ContentWrapper>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         categories: state.categories,
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         ''
//     }
// }

export default Content;