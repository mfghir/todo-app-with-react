import { useEffect, useRef, useState } from "react";

const TodoForm = ({ edit, submitTodo }) => {
  const [input, setInput] = useState(edit ? edit.text : "");
  const inpRef = useRef();
  useEffect(() => {
    inpRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("enter todo !");
    }
    submitTodo(input); // halate defaltesh  in bood k ADD bashe vali yejahae EDIT ham hast
    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="formControl">
        <input
          type="text"
          value={input}
          onChange={changeHandler}
          placeholder={edit ? "update todo..." : "add new todo..."}
          ref={inpRef}
        />
        <button
          className={`btn ${edit ? "updateTodo" : "addTodo"}`}
          type="submit"
        >
          {edit ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
