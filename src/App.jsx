import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";

function App() {
  // const todos = [
  //   { input: "Hello! Add your fist todo!", completed: true },
  //   { input: "Get the groceries", completed: false },
  //   { input: "Learn how to web design", completed: false },
  //   { input: "Say hi to gran gran", completed: true },
  // ];
  const [todos, setTodos] = useState([
    { input: "Hello! Add your fist todo!", completed: true },
  ]);
  const [selectedTab, setSelectedTab] = useState("All");
  const handleAddTodo = (newTodo) => {
    const newTodoList = [...todos, { input: newTodo, completed: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  };

  const handleComplete = (i) => {
    let newTodoList = [...todos];
    let completedTodo = todos[i];
    completedTodo["completed"] = true;
    newTodoList[i] = completedTodo;
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  };
  const deleteToDo = (i) => {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== i;
    });
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  };

  const handleSaveData = (currTodos) => {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currTodos }));
  };
  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return;
    }
    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        todos={todos}
        setSelectedTab={setSelectedTab}
        selectedTab={selectedTab}
      />
      <TodoList
        deleteToDo={deleteToDo}
        handleComplete={handleComplete}
        selectedTab={selectedTab}
        todos={todos}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
