import React, { Component } from 'react';
import {
    InputWrapper, InputLabel, InputField,
} from './styled';

export default class Input extends Component {
    state = {
        inputValue: this.props.inputValue || '',
        inputState: 0, // 0 - placeholder, 1 - label
    }

    componentDidMount() {
        if (this.state.inputValue) {
            if (this.state.inputState === 0) {
                this.setState({
                    inputState: 1
                });
            }
        };
    }

    inputAction = {
        Change: (e) => {
            this.setState({
                inputValue: e.target.value,
            })
        },
        Focus: () => {
            if (this.state.inputState === 0) {
                this.setState({
                    inputState: 1,
                })
            }
        },
        Blur: () => {
            if (this.state.inputState === 1 || !this.state.inputValue) {
                this.setState({
                    inputState: 0,
                })
            }
        },
    }

    render() {
        return (
            <InputWrapper>
            
                <InputLabel 
                    toTop={this.state.inputState}
                >
                    {this.props.labelValue}
                </InputLabel>
                <InputField 
                    value={this.state.inputValue}
                    onChange={(e) => this.inputAction.Change(e)}
                    onFocus={this.inputAction.Focus}
                    onBlur={this.inputAction.Blur}
                />
                
            </InputWrapper>
        );
    };
};
