import React from "react";
import FilterOptions from "./FilterOptionsMobile";
import TodoList from "./TodoList";

const Todo = (props) => {
  return (
    <>
      <TodoList />
      <FilterOptionsMobile filterActive={props.filterActive} />
    </>
  );
};

export default Todo;
