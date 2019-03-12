import React from 'react';
import ButtonIcon from '../button-icon';

const TodoItem = ({ label, important = false }) => {
    const liStyle = {
        color: important ? 'tomato' : 'black'
    };

    return(
        <li style={liStyle} className="list-group-item todo-item container pl-0 pr-0">
            <div className="row ml-0 mr-0 justify-content-between">
                <div className="col-8 pl-4 pr-4 d-flex align-items-center ">
                    <span className="todo-item__label">{ label }</span>
                </div>
                <div className="col-3 pl-4 pr-4 d-flex justify-content-between todo-item__actions">
                    <ButtonIcon type="success" icon="exclamation"/>
                    <ButtonIcon type="danger" icon="trash-o"/>
                </div>
            </div>
        </li>
    );
};

export default TodoItem;