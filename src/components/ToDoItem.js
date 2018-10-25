import React, { Component } from 'react';


class ToDoItem extends Component {
  render() {
    const {todo, onToggleItem} = this.props;
    return (
      <li onClick={() => onToggleItem(todo.id)} style={{textDecoration: todo.completed ? "line-through": "none"}}>{todo.value}</li>
    );
  }
}

export default ToDoItem;
