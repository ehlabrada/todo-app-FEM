import {
  InputWrapper,
  StyledForm,
  StyledInput,
} from "./styles/TodoInput.styled";

const TodoInput = (props) => {
  return (
    <InputWrapper actualTheme={props.actualTheme}>
      <StyledForm onSubmit={props.handleSubmit}>
        <StyledInput
          autoFocus
          autocomplete="off"
          name="todoTask"
          value={props.formInput.todoTask}
          onChange={props.handleInputChange}
          placeholder="Create a new todo..."
        />
      </StyledForm>
    </InputWrapper>
  );
};

export default TodoInput;
