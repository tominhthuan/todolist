import React, { Component } from 'react';

//component
import Todo from './Todo';

class TodoList extends Component {
    constructor() {
        super();

    }

    render() {
        const {
            todolist,
            onItemClick,
            handleDelete,
            handleEdit,
            idEdit,
            onChange,
            onSaveEdit,
            isList,
        } = this.props;


        return (
            <div>
                {
                    todolist.map((item, index) =>
                        <Todo
                            item={item}
                            key={index}
                            onItemClick={onItemClick}
                            id={item.id}
                            index={index}
                            handleDeleteTodo={handleDelete}
                            handleEditTodo={handleEdit}
                            idEdit={idEdit}
                            value={item.title}
                            onChange={onChange}
                            onSaveEdit={onSaveEdit}
                            isList={isList}
                        />
                    )
                }

            </div>
        );
    }
}
export default TodoList;