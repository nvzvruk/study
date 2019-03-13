import React, { Component } from 'react';
import Header from '../header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import AddTodoPanel from '../add-todo-form';
import './index.css';

const buttonsData = [
    { label: 'all' },
    { label: 'active' },
    { label: 'done' }
];

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            todoData : [
                {id: '1', label: 'get', important: false, done: false},
                {id: '2', label: 'post', important: false, done: false},
                {id: '3', label: 'put', important: true, done: false},
                {id: '4', label: 'delete', important: true, done: false}
            ],
        };

        this.toggleProperty = (arr, id, propName) => {
            const idx = arr.findIndex((el) => el.id === id);
            const oldItem = arr[idx];
            const newItem = {...oldItem, [propName]: !oldItem[propName]};
            return [
                ...arr.slice(0, idx),
                newItem,
                ...arr.slice(idx + 1)
            ];
        };

        this.deleteItem = (id) => {
            this.setState(({ todoData }) => {
                return {
                    todoData: todoData.filter((item) => item.id !== id)
                }
            })
        };

        this.addItem = (label) => {
            this.setState(({ todoData }) => {
                const newTodo = {
                    id: parseInt(todoData[todoData.length - 1].id) + 1,
                    label,
                    important: false,
                    done: false
                };
                return {
                    todoData: [...todoData, newTodo ]
                }
            })
        };

        this.changeItemCompleteness = (id) => {
            this.setState(({ todoData }) => {
                return {
                    todoData: this.toggleProperty(todoData, id, 'done')
                }
            });
        };

        this.changeItemImportance = (id) => {
            this.setState(({ todoData }) => {
                return {
                    todoData: this.toggleProperty(todoData, id, 'important')
                }
            });
        };
    }

    render() {
        const { todoData } = this.state;
        const doneCount = todoData.filter(item => item.done === true).length;
        const todoCount = todoData.length - doneCount;
        return(
            <div className="app">
                <div className="container pl-0 pr-0">
                    <div className="row ml-0 mr-0">
                        <div className="col-12">
                            <Header text="Hello" todoCount={todoCount} doneCount={doneCount} />
                        </div>
                    </div>
                    <div className="row ml-0 mr-0">
                        <div className="col-12">
                            <SearchPanel buttonsData={buttonsData} />
                        </div>
                    </div>
                    <div className="row ml-0 mr-0 pt-3">
                        <div className="col-12">
                            <TodoList data={todoData}
                                      deleteTodo={this.deleteItem}
                                      changeImportance={this.changeItemImportance}
                                      changeCompleteness={this.changeItemCompleteness}/>
                        </div>
                    </div>
                    <div className="row ml-0 mr-0 pt-3">
                        <div className="col-12">
                            <AddTodoPanel addTodo={this.addItem}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
