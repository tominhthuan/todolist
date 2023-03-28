import React, { Component } from 'react';

import checkImg from '../img/checked.png';
import checkMarkImg from '../img/check-mark.png';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.onClickItem = this.onClickItem.bind(this);
        this.handleDeleteTo = this.handleDeleteTo.bind(this);
        this.handleEditTo = this.handleEditTo.bind(this);

    }
    onClickItem() {
        const { onItemClick, index } = this.props;
        onItemClick(index);
    }
    handleDeleteTo(event) {
        const { handleDeleteTodo, index } = this.props;
        event.stopPropagation();
        handleDeleteTodo(index);
    }
    handleEditTo() {
        const { handleEditTodo, item } = this.props;

        handleEditTodo(item.id);
    }


    render() {
        const { item, idEdit, value, onChange, onSaveEdit } = this.props;
        let url = checkImg;
        let className = 'TodoList';
        if (item.isComplete) {
            url = checkMarkImg
            className += ' todolist-complete'
        }
        return (

            <>
                <div onClick={this.onItemClick} className={className}>

                    <img src={url} alt='#' width={30} height={30} />
                    {item.id === idEdit ?
                        <><input type='text'
                            defaultValue={value}
                            onChange={onChange}
                        />
                            <button onClick={onSaveEdit}>save</button>
                        </>
                        :
                        <span>{item.title}</span>
                    }


                    <button
                        onClick={this.handleDeleteTo}
                        className="delete">
                        Delete
                    </button>
                    <button
                        onClick={this.handleEditTo}
                        className="edit">
                        Edit
                    </button>

                </div>

            </>
        );
    }
}
export default Todo;