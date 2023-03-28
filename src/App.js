import React, { Component } from 'react';
import { v4 } from 'uuid';
//component
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: '',
      todolist: [
        { title: "thuan di choi", isComplete: true, id: 0 },
        { title: "thuan o nha", isComplete: true, id: 1 },
        { title: "thuan di hoc", isComplete: false, id: 2 }
      ],
      idEdit: -1,
      itemEdit: "",
      totalTodos: 0,
    };
    this.onItemClick = this.onItemClick.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.onClickEdit = this.onClickEdit.bind(this);
  }
  onItemClick(index) {
    const { todolist } = this.state;
    todolist[index].isComplete = !todolist[index].isComplete;

    this.setState(todolist)

  };
  onKeyUp(event) {
    if (event.keyCode === 13) {//enter key
      let text = event.target.value;
      // neu ko text thi return
      if (!text) {
        return;
      }
      text = text.trim();//xosa dau cach o hai ben
      if (!text) { return; }
      this.setState({
        newItem: '',
        todolist: [
          { title: text, isComplete: false, id: v4() },
          ...this.state.todolist,
        ],
      });
    }
  }
  onChange(event) {
    //khi nguoi dung onKeyup se phai setState lai 
    this.setState({
      newItem: event.target.value
    });
  }
  handleDelete(index) {
    const { todolist } = this.state;
    todolist.splice(index, 1);
    this.setState({
      todolist,
    })
  }
  handleEdit(id) {

    this.setState({
      idEdit: id

    })

  }
  onClickEdit(event) {
    this.setState({
      itemEdit: event.target.value
    })

  }
  onSaveEdit = () => {
    const { todolist, idEdit, itemEdit } = this.state;
    todolist.map((item) => {
      if (item.id === idEdit) {
        item.title = itemEdit
      }
      return item;
    })
    this.setState({
      idEdit: -1,
      todolist,
    })
  }
  render() {
    const { todolist, newItem, idEdit, totalTodos } = this.state;
    return (
      <div className='todoapp'>
        <Header
          onKeyUp={this.onKeyUp}
          onChange={this.onChange}
          value={newItem}
        />
        <TodoList
          todolist={todolist}
          onItemClick={this.onItemClick}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          idEdit={idEdit}
          value={idEdit}
          onChange={this.onClickEdit}
          onSaveEdit={this.onSaveEdit}
        />
        <Footer
          totalTodos={totalTodos}
        />
      </div>

    );
  }
}

export default App;
