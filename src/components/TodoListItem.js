import React from "react";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import iconCross from "../images/icon-cross.svg";

import {
  DeleteIcon,
  ItemInfo,
  StyledTodoItem,
  TodoItemDescription,
} from "./styles/TodoListItem.styled";

const TodoListItem = (props) => {
  const style = {
    color: `${(props) => props.theme.colors.input.textColor}`,
    borderColor: "white",
    fontSize: "1.2em",
  };
  return (
    <StyledTodoItem>
      <ItemInfo>
        <span onClick={() => props.handleCheckItem(props.id)}>
          {props.completed ? (
            <FaRegCheckCircle style={style} />
          ) : (
            <FaRegCircle style={style} />
          )}
        </span>
        <TodoItemDescription completed={props.completed}>
          {props.todoTask}
        </TodoItemDescription>{" "}
      </ItemInfo>
      <DeleteIcon src={iconCross} onClick={() => props.deleteItem(props.id)} />
    </StyledTodoItem>
  );
};

export default TodoListItem;
