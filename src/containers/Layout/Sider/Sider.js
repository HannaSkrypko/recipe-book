import React, { Component } from 'react';
import { Icon } from 'antd';

import {
    SiderContainer, SiderCategoryButton, SiderHeader, SiderCategotyListItem,
    ModalDataWrapper, ModalButtonsWrapper,
} from './styled';
import { Modal, Input, DeletButton, Button } from '../../../UI';

class Sider extends Component {
    state = {
        isCollapsed: false,
        categoties: [
            'Супы','Салаты','Соусы','Десерты','Суши'
        ],
        modals: {
            edit: false,
            add: false,
            confirm: false,
        },
        categoryIndex: 0,
    }

    categoryAction = {
        openModal: ( modalName ) => {
            switch ( modalName ) {
                case "add":
                    this.setState({
                        modals: {
                            add:  true,
                        },
                    });
                    break;
                case "edit":
                    this.setState({
                        modals: {
                            edit:  true,
                        },
                    });
                    break;
                case "confirm":
                    this.setState({
                        modals: {
                            confirm:  true,
                        },
                    });
                    break;
                default:
                    break;
            }
        },
        closeModal: ( modalName ) => {
            switch ( modalName ) {
                case "add":
                    this.setState({
                        modals: {
                            add:  false,
                        },
                    });
                    break;
                case "edit":
                    this.setState({
                        modals: {
                            edit:  false,
                        },
                    });
                    break;
                case "confirm":
                    this.setState({
                        modals: {
                            confirm:  false,
                        },
                    });
                    break;
                default:
                    break;
            }
        },
        remove: ( categoryIndex ) => {
            const categoriesArr = this.state.categoties;
            categoriesArr.splice(categoryIndex, 1);
    
            this.setState({
                categories: categoriesArr,
                modals: {
                    edit:  false,
                },
            })
        },
        edit: ( index ) => {
            this.setState({
                modals: {
                    edit:  true,
                },
                categoryIndex: index,
            });
        },
    }

    render() {
        let editModal = null;
        if (this.state.modals.edit) {
            editModal = (
                <Modal
                    closeModal={() => this.categoryAction.closeModal('edit')}
                    title={"Редактировать"}
                >
                    <ModalDataWrapper>
                        <Input 
                            inputValue={this.state.categoties[this.state.categoryIndex]}
                            labelValue={"Название категории"}
                        />
                        <DeletButton onClick={() => this.categoryAction.remove(this.state.categoryIndex)}/> 
                        <ModalButtonsWrapper>
                            <Button 
                                width="100px"
                                onClick={() => this.categoryAction.closeModal('edit')}
                            > 
                                Отменить
                            </Button>
                            <Button
                                filled
                                width="150px"
                            > 
                                Сохранить
                            </Button>
                        </ModalButtonsWrapper>
                    </ModalDataWrapper>
                </Modal>
            )
        }

        let addModal = null;
        if (this.state.modals.add) {
            addModal = (
                <Modal
                    closeModal={() => this.categoryAction.closeModal('add')}
                    title={"Добавить категорию"}
                >
                <ModalDataWrapper>
                    <Input 
                        labelValue={"Название категории"}
                    />
                    <ModalButtonsWrapper>
                            <Button 
                                width="100px"
                                onClick={() => this.categoryAction.closeModal('add')}
                            > 
                                Отменить
                            </Button>
                            <Button
                                filled
                                width="150px"
                            > 
                                Добавить
                            </Button>
                    </ModalButtonsWrapper>
                </ModalDataWrapper>
                </Modal>
            )
        }

        return (
            <SiderContainer
                collapsed={this.state.isCollapsed}
                {...this.props}
            >
                <SiderHeader> 
                    категории
                    <SiderCategoryButton
                        onClick={() => this.categoryAction.openModal('add')}
                    >
                        <Icon type="plus" />
                    </SiderCategoryButton>
                </SiderHeader>
                <ul>
                    {this.state.categoties.map((categoty, index) => {
                        return <SiderCategotyListItem key={index}> 
                                    {categoty} 
                                    <SiderCategoryButton edit
                                        onClick={() => this.categoryAction.edit(index)}
                                    >
                                        <Icon type="edit" />
                                    </SiderCategoryButton>
                                </SiderCategotyListItem>
                    })}
                </ul>
               {editModal}
               {addModal}
            </SiderContainer>
        );
    }
};

export default Sider;