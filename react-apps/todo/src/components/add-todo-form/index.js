import React, { Component } from 'react';
import Input from '../input';
import ButtonIcon from '../button-icon';
import './index.css';

export default class AddTodoPanel extends Component {

    constructor() {
        super();

        this.handleFormSubmit = (e) => {
            e.preventDefault();
            console.log(e);
        }
    }

    render() {

        // const { addTodo } = this.props;

        return(
            <div className="add-todo-form container">
                <div className="row">
                    <form onSubmit={(e) => this.handleFormSubmit(e)}>
                        <div className="form-group d-flex">
                            <div className="col-11 pl-0 pr-0">
                                <Input placeholder="Type here to search"/>
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