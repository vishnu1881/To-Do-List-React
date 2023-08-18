import { useState } from "react";
import { useEffect } from "react";
import Textarea from "./textarea";
import { v4 as uuidv4 } from "uuid";

const getTodo = () => {
  var todolist = localStorage.getItem("todos");
  if (todolist) {
    return JSON.parse(localStorage.getItem("todos"));
  } else return [];
};

function Inputarea() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(getTodo());

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleinputchange = (e) => {
    setInput(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      const newTodo = { id: uuidv4(), text: input };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  };

  const handleDelete = (id) => {
    const newTodo = todos.filter((todoo) => todoo.id !== id);
    setTodos(newTodo);
  };
  return (
    <>
      <div className="inputarea">
        <form>
          <input
            type="text"
            className="textbox"
            placeholder="Enter your To-Do..."
            value={input}
            onChange={handleinputchange}
          ></input>
          <button id="inputbutton" onClick={handlesubmit}>
            Add
          </button>
        </form>
      </div>
      <Textarea todos={todos} handleDelete={handleDelete} />
    </>
  );
}

export default Inputarea;
