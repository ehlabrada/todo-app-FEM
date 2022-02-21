import React from "react";
import {
  DeleteOption,
  FilteredOptionsMobile,
  FilterOptions,
  InputGroupRadio,
  StyledOptions,
  TotalItems,
} from "./styles/TodoListOptions.styled";

const TodoListOptions = (props) => {
  const itemsLeft = props.todoList.filter(
    (item) => !item.completed && item
  ).length;
  return (
    <>
      <StyledOptions>
        <TotalItems>
          {itemsLeft}
          {itemsLeft === 1 ? " item left" : " items left"}
        </TotalItems>
        <FilterOptions>
          <InputGroupRadio active={props.filterActive.filter === "all"}>
            <label htmlFor="filter-all">All</label>
            <input
              type="radio"
              id="filter-all"
              value="all"
              checked={props.filterActive.filter === "daily"}
              name="filter"
              onChange={props.handleChangeFilterOption}
            />
          </InputGroupRadio>
          <InputGroupRadio active={props.filterActive.filter === "active"}>
            <label htmlFor="filter-active">Active</label>
            <input
              type="radio"
              id="filter-active"
              value="active"
              checked={props.filterActive.filter === "active"}
              name="filter"
              onChange={props.handleChangeFilterOption}
            />
          </InputGroupRadio>
          <InputGroupRadio active={props.filterActive.filter === "completed"}>
            <label htmlFor="filter-completed">Completed</label>
            <input
              type="radio"
              id="filter-completed"
              value="completed"
              checked={props.filterActive.filter === "completed"}
              name="filter"
              onChange={props.handleChangeFilterOption}
            />
          </InputGroupRadio>
        </FilterOptions>

        <DeleteOption onClick={props.handleClearCompleted}>
          Clear completed
        </DeleteOption>
      </StyledOptions>
      <FilteredOptionsMobile>
        <InputGroupRadio active={props.filterActive.filter === "all"}>
          <label htmlFor="filter-all">All</label>
          <input
            type="radio"
            id="filter-all"
            value="all"
            checked={props.filterActive.filter === "daily"}
            name="filter"
            onChange={props.handleChangeFilterOption}
          />
        </InputGroupRadio>
        <InputGroupRadio active={props.filterActive.filter === "active"}>
          <label htmlFor="filter-active">Active</label>
          <input
            type="radio"
            id="filter-active"
            value="active"
            checked={props.filterActive.filter === "active"}
            name="filter"
            onChange={props.handleChangeFilterOption}
          />
        </InputGroupRadio>
        <InputGroupRadio active={props.filterActive.filter === "completed"}>
          <label htmlFor="filter-completed">Completed</label>
          <input
            type="radio"
            id="filter-completed"
            value="completed"
            checked={props.filterActive.filter === "completed"}
            name="filter"
            onChange={props.handleChangeFilterOption}
          />
        </InputGroupRadio>
      </FilteredOptionsMobile>
    </>
  );
};

export default TodoListOptions;
