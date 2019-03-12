import React from 'react';
import TodoItem from '../todo-item';
import './index.css';

const TodoList = ({ list }) => {
    const elements = list.map(({ id, ...itemProps }) => <TodoItem key={ `list-item-${id}` } { ...itemProps }/>);

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;