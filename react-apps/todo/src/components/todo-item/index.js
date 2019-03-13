import React from 'react';
import ButtonIcon from '../button-icon';
import './index.css';

const TodoItem = ({ label, done, important, handleLabelClick, handleImportanceClick, handleDeleteClick }) => {
    let classNames = `list-group-item todo-item container pl-0 pr-0
                          ${ done ? 'done' : '' } ${ important ? 'important' : '' }`;
    return(
        <li className={classNames}>
            <div className="row ml-0 mr-0 justify-content-between">
                <div className="col-8 pl-4 pr-4 d-flex align-items-center ">
                        <span onClick={handleLabelClick}
                              className="todo-item__label">
                            {label}
                        </span>
                </div>
                <div className="col-3 pl-4 pr-4 d-flex justify-content-between todo-item__actions">
                    <ButtonIcon kind="success"
                                icon="exclamation"
                                handleClick={handleImportanceClick}
                                active={important} />
                    <ButtonIcon kind="danger"
                                icon="trash-o"
                                handleClick={handleDeleteClick} />
                </div>
            </div>
        </li>
    );
};

export default TodoItem;