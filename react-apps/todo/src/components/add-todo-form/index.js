import React, { Component } from 'react';
import Input from '../input';
import ButtonIcon from '../button-icon';
import './index.css';

export default class AddTodoPanel extends Component {

    constructor() {
        super();

        this.state = {
            newTodo: ''
        };

        this.handleInputChange = (e) => {
            this.setState({
                newTodo: e.target.value
            })
        };

        this.handleFormSubmit = (e) => {
            e.preventDefault();
            this.props.addTodo(this.state.newTodo);
            this.setState({
                newTodo: ''
            });
        }
    }

    render() {

        return(
            <div className="add-todo-form container">
                <div className="row">
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="form-group d-flex">
                            <div className="col-11 pl-0 pr-0">
                                <Input onChange={this.handleInputChange}
                                       placeholder="Type here what you want"
                                       value={this.state.newTodo}/>
                            </div>
                            <div className="d-flex justify-content-end col-1 pl-0 pr-0">
                                <ButtonIcon kind="primary"
                                            icon="plus"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};