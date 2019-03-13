import React, { Component } from 'react';
import { Icon } from 'antd';

import {
    SiderContainer, SiderCategoryButton, SiderHeader, SiderCategoryListItem,
    ModalDataWrapper, ModalButtonsWrapper,
} from './styled';
import { Modal, Input, DeletButton, Button } from '../../../UI';

class Sider extends Component {
    state = {
        isCollapsed: false,
        categories: [
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
                case "confirm":
                    this.setState({
                        modals: {
                            edit: true,
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
            const categoriesArr = this.state.categories;
            categoriesArr.splice(categoryIndex, 1);
    
            this.setState({
                categories: categoriesArr,
                modals: {
                    edit:  false,
                    confirm: false,
                },
            })

        },
        cancelRemove: () => {
            this.setState({
                modals: {
                    edit:  true,
                    confirm: false,
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
        saveCategory: ( index, e ) => {
            const categoryArr = this.state.categories;
            categoryArr[index] = this.state.inputValue;
            this.setState({categories: categoryArr});            
        }
    }

    render() {
        let editModal = null;
        let modalContent;
        if (this.state.modals.edit) {
            if(this.state.modals.confirm) {
                modalContent = <ModalDataWrapper>
                                    <h2> Вы уверены, что хотите удалить категорию "{this.state.categories[this.state.categoryIndex]}"? Её невозможно будет восстановить. </h2>
                                    <ModalButtonsWrapper>
                                        <Button 
                                            width="100px"
                                            onClick={() => this.categoryAction.cancelRemove()}
                                        > 
                                            Отменить
                                        </Button>
                                        <Button
                                            filled
                                            width="150px"
                                            onClick={() => this.categoryAction.remove(this.state.categoryIndex)}
                                        > 
                                            Удалить
                                        </Button>
                                    </ModalButtonsWrapper> 
                                </ModalDataWrapper>;
            }
            else {
                modalContent = <ModalDataWrapper>
                                    <Input 
                                        inputValue={this.state.inputValue}
                                        labelValue={"Название категории"}
                                    />
                                    <DeletButton onClick={() => this.categoryAction.openModal('confirm')}/> 
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
            }
            editModal = (
                <Modal
                    closeModal={() => this.categoryAction.closeModal('edit')}
                    title={"Редактировать"}
                >
                    { modalContent }
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
                    {this.state.categories.map((category, index) => {
                        return <SiderCategoryListItem key={index}> 
                                    {category} 
                                    <SiderCategoryButton edit
                                        onClick={() => this.categoryAction.edit(index)}
                                    >
                                        <Icon type="edit" />
                                    </SiderCategoryButton>
                                </SiderCategoryListItem>
                    })}
                </ul>
               {editModal}
               {addModal}
            </SiderContainer>
        );
    }
};

export default Sider;