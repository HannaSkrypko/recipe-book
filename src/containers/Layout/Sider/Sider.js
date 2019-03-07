import React, { Component } from 'react';
import { Icon } from 'antd';

import {
    SiderContainer, SiderCategoryButton, SiderHeader, SiderCategotyListItem,
} from './styled';
import { Modal } from '../../../UI';

class Sider extends Component {
    state = {
        isCollapsed: false,
        categoties: [
            'Супы','Салаты','Соусы','Десерты','Суши'
        ],
        isModalShown: false,
        categoryIndex: 0,
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

    editCategory = (index) => {
        this.setState({
            isModalShown: true,
            categoryIndex: index,
        });
    }

    render() {
        let modal = null;
        if (this.state.isModalShown) {
            modal = <Modal
                        title={"Редактировать"}
                        inputValue={this.state.categoties[this.state.categoryIndex]}
                        labelValue="Название категории"
                    />
        }
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
                                        onClick={() => this.editCategory(index)}
                                    >
                                        <Icon type="edit" />
                                    </SiderCategoryButton>
                                </SiderCategotyListItem>
                    })}
                </ul>
               {modal}
            </SiderContainer>
        );
    }
};

export default Sider;