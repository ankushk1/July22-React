import React, { useEffect, useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todoArr, setTodoArr] = useState([
    { id: "1211a72e", text: "Todo 1" },
    { id: "8b56ff49", text: "Todo 2" }
  ]);

  const [editing, setEditing] = useState({
    isEditing: false,
    todoId: ""
  });

  const onAddTodoHandler = () => {
    const todoItem = {
      id: crypto.randomUUID().split("-")[0],
      text: input
    };
    const generatedArr = [...todoArr, todoItem];
    setTodoArr(generatedArr);
    setInput("");
  };

  const onDeleteHandler = (id) => {
    const updatedArr = todoArr.filter((elem) => elem.id !== id);
    setTodoArr(updatedArr);
  };

  const onEditHandler = (id, text) => {
    setEditing({
      isEditing: true,
      todoId: id
    });
    setInput(text);
  };

  const onUpdateTodoHandler = () => {
    const todoIndex = todoArr.findIndex((elem) => elem.id === editing.todoId);
    const todoItem = {
      id: editing.todoId,
      text: input
    };
    const generatedArr = [...todoArr];
    // generatedArr[todoIndex] = todoItem;
    generatedArr.splice(todoIndex, 1, todoItem)
    setTodoArr(generatedArr);
    setInput("");
    setEditing({
      isEditing: false,
      todoId: ""
    });
  };

  return (
    <div>
      <div className="text-center fs-2 fw-bold">Todo App</div>
      <div className="row justify-content-center ms-4 mt-3">
        <div className="col-7">
          <input
            className="form-control"
            type="text"
            placeholder="Add Todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="col-3">
          {!editing.isEditing ? (
            <button
              className="btn btn-primary"
              onClick={() => onAddTodoHandler()}
            >
              Add Todo
            </button>
          ) : (
            <button
              className="btn btn-warning"
              onClick={() => onUpdateTodoHandler()}
            >
              Update Todo
            </button>
          )}
        </div>
        <div className="mt-4">
          {todoArr.length &&
            todoArr.map((elem) => (
              <div className="todo-items row justify-content-center my-1">
                <div className="col-sm-5 col-lg-7 fs-3">{elem.text}</div>
                <div className=" col-sm-4 col-lg-3">
                  <button
                    className="btn btn-success me-2"
                    onClick={() => onEditHandler(elem.id, elem.text)}
                  >
                    Edit Todo
                  </button>
                  <button
                    className="btn btn-danger del"
                    onClick={() => onDeleteHandler(elem.id)}
                  >
                    Delete Todo
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
