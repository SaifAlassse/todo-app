export default function Header({ todos }) {
  const todoLength = todos.length;
  const isTaskPlural = todoLength === 1;
  const taskOrTasks = isTaskPlural ? "task" : "tasks";

  return (
    <header>
      <h1 className="text-gradient">
        You have {todoLength} open {taskOrTasks}
      </h1>
    </header>
  );
}
