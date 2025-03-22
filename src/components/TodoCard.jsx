export default function TodoCard({ todo, handleComplete, i, deleteToDo }) {
  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button disabled={todo.completed}>
          <h6
            onClick={() => {
              handleComplete(i);
            }}
          >
            Done
          </h6>
        </button>
        <button
          onClick={() => {
            deleteToDo(i);
          }}
        >
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
}
