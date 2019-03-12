import React from 'react';
import Header from '../header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import './index.css';

const todos = [
    {id: '1', label: 'get', important: false},
    {id: '2',label: 'post', important: false},
    {id: '3',label: 'put', important: true},
    {id: '4',label: 'delete', important: true},
];

const buttonsData = [
    { label: 'all' },
    { label: 'active' },
    { label: 'done' }
];

const App = () => {
    return(
        <div className="app">
            <div className="container pl-0 pr-0">
                <div className="row ml-0 mr-0">
                    <div className="col-12">
                        <Header text="Hello" toDoCount={3} doneCount={1}/>
                    </div>
                </div>
                <div className="row ml-0 mr-0">
                    <div className="col-12">
                        <SearchPanel buttonsData={buttonsData}/>
                    </div>
                </div>

                <div className="row ml-0 mr-0 pt-3">
                    <div className="col-12"><TodoList list={todos}/></div>
                </div>
            </div>
        </div>
    );
};

export default App;