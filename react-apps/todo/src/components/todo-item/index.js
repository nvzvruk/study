import React, { Component } from 'react';
import ButtonIcon from '../button-icon';

export default class TodoItem extends Component {
    render() {
        const { label, important = false } = this.props;
        const liStyle = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };
        return(
            <li style={liStyle} className="list-group-item todo-item container pl-0 pr-0">
                <div className="row ml-0 mr-0 justify-content-between">
                    <div className="col-8 pl-4 pr-4 d-flex align-items-center ">
                        <span className="todo-item__label">{label}</span>
                    </div>
                    <div className="col-3 pl-4 pr-4 d-flex justify-content-between todo-item__actions">
                        <ButtonIcon type="success" icon="exclamation"/>
                        <ButtonIcon type="danger" icon="trash-o"/>
                    </div>
                </div>
            </li>
        );
    }
}