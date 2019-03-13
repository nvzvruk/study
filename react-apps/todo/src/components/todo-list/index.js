import React from 'react';
import TodoItem from '../todo-item';
import './index.css';

const TodoList = ({ data, changeImportance, changeCompleteness, deleteTodo }) => {
    const elements = data.map(({ id, ...itemProps }) => {
        return(
            <TodoItem key={ `list-item-${id}` }
                      handleDeleteClick={() => deleteTodo(id)}
                      handleLabelClick={() => changeCompleteness(id)}
                      handleImportanceClick={() => changeImportance(id)}
                      { ...itemProps }/>
        )
    });
    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;