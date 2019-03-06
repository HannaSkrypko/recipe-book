import React, { Component } from 'react';
import { Icon } from 'antd';

import {
    SiderContainer, SiderCategoryButton, SiderHeader, SiderCategotyListItem,
} from './styled';

class Sider extends Component {
    state = {
        isCollapsed: false,
        categoties: [
            'Супы','Салаты','Соусы','Десерты','Суши'
        ],
    }


    addCategoryHandler = () => {
        const categoriesArr = this.state.categoties;
        categoriesArr.push('BLABLA');

        this.setState({
            categories: categoriesArr
        })
    }

    removeCategoryHandler = ( categoryIndex ) => {
        const categoriesArr = this.state.categoties;
        categoriesArr.splice(categoryIndex, 1);

        this.setState({
            categories: categoriesArr
        })
    }

    render() {
        return (
            <SiderContainer
                collapsed={this.state.isCollapsed}
                {...this.props}
            >
                <SiderHeader> 
                    категории
                    <SiderCategoryButton
                        onClick={this.addCategoryHandler}
                    >
                        <Icon type="plus" />
                    </SiderCategoryButton>
                </SiderHeader>
                <ul>
                    {this.state.categoties.map((categoty, index) => {
                        return <SiderCategotyListItem key={index}> 
                                    {categoty} 
                                    <SiderCategoryButton edit
                                        onClick={() => this.removeCategoryHandler(index)}
                                    >
                                        <Icon type="edit" />
                                    </SiderCategoryButton>
                                </SiderCategotyListItem>
                    })}
                </ul>
            </SiderContainer>
        );
    }
};

export default Sider;