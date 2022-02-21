import React from "react";
import { TodoListWrapper } from "./styles/TodoList.styled";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  const todos = props.filteredArray.map((todo) => {
    return (
      <TodoListItem
        key={todo.id}
        {...todo}
        handleCheckItem={props.handleCheckItem}
        deleteItem={props.deleteItem}
      />
    );
  });

  return <TodoListWrapper>{todos}</TodoListWrapper>;
};

export default TodoList;
