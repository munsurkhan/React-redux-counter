import React from 'react';
import CreateTodo from "../Components/todo/CreateTodo";
import TodoList from "../Components/todo/TodoList";

const TodoPage = () => {
    return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Todo App</h4>
                                </div>
                                <div className="card-body">
                                    <CreateTodo/>
                                    <TodoList/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    );
};

export default TodoPage;