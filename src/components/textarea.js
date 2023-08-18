
function textarea({ todos, handleDelete }) {
  return (
    <div className="textarea">
      <h2>To-Do</h2>
      <ul className="textdes">
        {todos.map((todos) => (
           <div className="todo-item" key={todos.id}>
            <li>{todos.text}</li>
            <button id="deletebtn" onClick={() => handleDelete(todos.id)}>
              delete
            </button>
            </div>

        ))}
      </ul>
    </div>
  );
}

export default textarea;
