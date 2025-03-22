import TodoCard from "./TodoCard";

export default function TodoList({
  todos,
  selectedTab,
  handleComplete,
  deleteToDo,
}) {
  const filterTodoList =
    selectedTab === "All"
      ? todos
      : selectedTab === "Completed"
      ? todos.filter((todo) => todo.completed)
      : todos.filter((todo) => !todo.completed);
  return (
    <>
      {filterTodoList.map((todo, i) => {
        return (
          <TodoCard
            handleComplete={handleComplete}
            deleteToDo={deleteToDo}
            i={i}
            key={i}
            todo={todo}
          />
        );
      })}
    </>
  );
}
