import React, { Component } from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';

import { MAIN_THEME_COLOR } from '../../../constants/colors';

import {
    SiderContainer, SiderCategoryButton, SiderHeader, SiderCategoryListItem,
    ModalDataWrapper, ModalDeleteConfirmText, ModalButtonsWrapper,
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
        categoryName:'',
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
        addNameCategory: ( newName ) => {
            const categoryArr = this.state.categories;
            if (categoryArr.indexOf(newName + "") == -1 && newName) {
                categoryArr.push(newName);
                this.setState({
                    categories: categoryArr,
                    modals: {
                        add:  false,
                    },
                })
            }
            else  if (!newName) {
                alert("Введите название");
            }
            else if (categoryArr.indexOf(newName + "") != -1 && newName){
                alert("Такая категория уже существует");
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
            });
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
            this.setState(state => {
                return(
                    {
                        modals: {
                            edit:  true,
                        },
                        categoryIndex: index,
                        categoryName: state.categories[this.categoryIndex],
                    }
                )
            });
            this.setState(state => {
                return(
                    {
                        categoryName: state.categories[state.categoryIndex],
                    }
                )
            });
        },
        changeNameCategory: ( newName ) => {
            this.setState(state => {
                return(
                    {
                        categoryName: newName,
                    }
                )
            });
        },
        saveCategoryName: ( newName ) => {
            const index = this.state.categoryIndex;
            const categoryArr = this.state.categories;
            if (categoryArr[index] != newName) {
                categoryArr[index] = newName;
                this.setState(state => {
                    return(
                        {
                            categories: categoryArr,
                            modals: {
                                edit:  false,
                            },
                        }
                    )
                });    
            }
        }
    }

    render() {
        let editModal = null;
        let modalContent;
        if (this.state.modals.edit) {
            if(this.state.modals.confirm) {
                modalContent = <ModalDataWrapper>
                                    <ModalDeleteConfirmText> 
                                        <Icon 
                                            type="question-circle"
                                            style={{ color: MAIN_THEME_COLOR }}
                                        />
                                        Вы уверены, что хотите удалить категорию "{this.state.categories[this.state.categoryIndex]}"? Её невозможно будет восстановить.
                                    </ModalDeleteConfirmText>
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
                                        inputValue={this.state.categories[this.state.categoryIndex]}
                                        labelValue={"Название категории"}
                                        categoryChange={this.categoryAction.changeNameCategory.bind(this)}
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
                                            onClick={() => this.categoryAction.saveCategoryName(this.state.categoryName)}
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
                        categoryChange={this.categoryAction.changeNameCategory.bind(this)}
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
                                onClick={() => this.categoryAction.addNameCategory(this.state.categoryName)}
                            > 
                                Добавить
                            </Button>
                    </ModalButtonsWrapper>
                </ModalDataWrapper>
                </Modal>
            )
        }

        const categories = this.state.categories;

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
                    {categories.map((category, index) => {
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

// const mapStateToProps = state => {
//     return {
//         categories: state.categories,
//     }
// }


// export default connect(mapStateToProps)(Sider);

export default Sider;