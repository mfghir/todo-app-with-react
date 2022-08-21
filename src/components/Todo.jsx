const Todo = ({ todo, onComplete,onDelete, onEdit }) => {
  return (
    <div className="todo">
      <div onClick={onComplete} className={`todoText ${todo.isCompleted ? "completed" : ""}`}>
        {todo.text}
      </div>
      <div>
        <button className="btn edit" onEdit={onEdit}>Edit</button>
        <button className="btn remove" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
