// Components
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Main from "./components/Main";
import useLocalStorage from "./hooks/useLocalStorage";
import { nanoid } from "nanoid";

// Styles
import { LightTheme, DarkTheme } from "./components/theme/Theme";
import GlobalStyle from "./components/theme/globalStyles";

const App = () => {
  // THEME RELATED
  const THEMES = {
    LIGHT: "light",
    DARK: "dark",
  };

  const [theme, setTheme] = useLocalStorage("theme", "");
  const selectedTheme = theme === "light" ? LightTheme : DarkTheme;
  const handleChangeTheme = () => {
    theme === THEMES.LIGHT ? setTheme(THEMES.DARK) : setTheme(THEMES.LIGHT);
  };

  // INPUT RELATED
  const [formInput, setFormInput] = useState({
    id: "",
    todoTask: "",
    completed: false,
  });

  const handleInputChange = (e) =>
    setFormInput((prevState) => {
      return { ...prevState, todoTask: e.target.value };
    });

  // SUBMIT RELATED
  const [todoList, setTodoList] = useLocalStorage("todoList", "");

  const handleSubmit = (event) => {
    event.preventDefault();

    const task = formInput.todoTask;

    setTodoList((prevList) => {
      return [...prevList, { id: nanoid(), todoTask: task, completed: false }];
    });

    setFormInput((prevState) => {
      return { ...prevState, todoTask: "" };
    });
  };

  const handleCheckItem = (id) => {
    setTodoList((prevState) => {
      return prevState.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      });
    });
  };

  const handleClearCompleted = () => {
    setTodoList((prevList) =>
      prevList.filter((todo) => {
        return todo.completed === false && todo;
      })
    );
  };

  const [filterActive, setFilterActive] = useState({
    filter: "all",
  });

  const handleChangeFilterOption = (event) => {
    const { name, value } = event.target;
    console.log("NAME + VALUE", name, value);
    setFilterActive((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [filteredArray, setFilteredArray] = useState(todoList);

  // This use effect is for watch every time filterActive change, do corresponding function
  useEffect(() => {
    if (filterActive.filter === "all") {
      setFilteredArray(todoList);
    } else if (filterActive.filter === "active") {
      setFilteredArray(todoList.filter((item) => !item.completed && item));
    } else if (filterActive.filter === "completed") {
      setFilteredArray(todoList.filter((item) => item.completed && item));
    }
  }, [filterActive, setTodoList, todoList]);

  const deleteItem = (id) =>
    setTodoList((prevList) =>
      prevList.filter((item) => item.id !== id && item)
    );

  return (
    <>
      <ThemeProvider theme={selectedTheme}>
        <GlobalStyle actualTheme={theme} />
        <Main
          actualTheme={theme}
          handleChangeTheme={handleChangeTheme}
          formInput={formInput}
          todoList={todoList}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          handleCheckItem={handleCheckItem}
          filterActive={filterActive}
          filteredArray={filteredArray}
          handleChangeFilterOption={handleChangeFilterOption}
          handleClearCompleted={handleClearCompleted}
          deleteItem={deleteItem}
        />
      </ThemeProvider>
    </>
  );
};

export default App;
