import React from "react";
import Header from "./Header";
import { MainWrapper } from "./styles/Main.styled";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoListOptions from "./TodoListOptions";

const Main = (props) => {
  return (
    <MainWrapper>
      <Header
        actualTheme={props.actualTheme}
        handleChangeTheme={props.handleChangeTheme}
      />
      <TodoInput
        actualTheme={props.actualTheme}
        formInput={props.formInput}
        handleInputChange={props.handleInputChange}
        handleSubmit={props.handleSubmit}
      />
      <TodoList
        handleCheckItem={props.handleCheckItem}
        formInput={props.formInput}
        todoList={props.todoList}
        filteredArray={props.filteredArray}
        deleteItem={props.deleteItem}
      />
      <TodoListOptions
        todoList={props.todoList}
        filteredArray={props.filteredArray}
        filterActive={props.filterActive}
        handleChangeFilterOption={props.handleChangeFilterOption}
        handleClearCompleted={props.handleClearCompleted}
      />
    </MainWrapper>
  );
};

export default Main;
