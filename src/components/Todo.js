import React, { useEffect, useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todoArr, setTodoArr] = useState([
    { id: "1211a72e", text: "Todo 1", completed: false },
    { id: "8b56ff49", text: "Todo 2", completed: false }
  ]);

  const ALL = "ALL";
  const COMPLETED = "COMPLETED";
  const PENDING = "PENDING";

  const [selectedFilter, setSelectedFilter] = useState(ALL);
  const [editing, setEditing] = useState({
    isEditing: false,
    todoId: ""
  });

  const onAddTodoHandler = () => {
    const todoItem = {
      id: crypto.randomUUID().split("-")[0],
      text: input,
      completed: false
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
    generatedArr.splice(todoIndex, 1, todoItem);
    setTodoArr(generatedArr);
    setInput("");
    setEditing({
      isEditing: false,
      todoId: ""
    });
  };

  const toggleComplete = (todoItem, idx) => {
    const todoObj = { ...todoItem, completed: !todoItem.completed };
    const generatedArr = [...todoArr];
    generatedArr[idx] = todoObj;
    setTodoArr(generatedArr);
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

        <div className=" d-flex justify-content-around w-50 mt-4">
          <button
            className={` ${
              selectedFilter === ALL ? "btn-info" : "btn-outline-info "
            } btn`}
            onClick={() => setSelectedFilter(ALL)}
          >
            All
          </button>
          <button
            className={` ${
              selectedFilter === COMPLETED ? "btn-info" : "btn-outline-info"
            } btn`}
            onClick={() => setSelectedFilter(COMPLETED)}
          >
            Completed
          </button>
          <button
            className={` ${
              selectedFilter === PENDING ? "btn-info" : "btn-outline-info "
            } btn`}
            onClick={() => setSelectedFilter(PENDING)}
          >
            Pending
          </button>
        </div>
        <div className="mt-4">
          {todoArr.length &&
            selectedFilter === ALL &&
            todoArr.map((elem, idx) => (
              <div
                key={idx}
                className="todo-items row justify-content-center my-1"
              >
                <div className="col-sm-5 col-lg-7 fs-3">
                  <span
                    onClick={() => toggleComplete(elem, idx)}
                    className="me-2"
                  >
                    {elem.completed ? (
                      <i className="fa-solid fa-check fa-bounce fa-sm"></i>
                    ) : (
                      <i class="fa-solid fa-stopwatch fa-shake"></i>
                    )}
                  </span>
                  {elem.text}
                </div>
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
          {todoArr.length &&
            selectedFilter === COMPLETED &&
            todoArr.map(
              (elem, idx) =>
                elem.completed && (
                  <div
                    key={idx}
                    className="todo-items row justify-content-center my-1"
                  >
                    <div className="col-sm-5 col-lg-7 fs-3">
                      <span
                        onClick={() => toggleComplete(elem, idx)}
                        className="me-2"
                      >
                        {elem.completed ? (
                          <i className="fa-solid fa-check fa-bounce fa-sm"></i>
                        ) : (
                          <i class="fa-solid fa-stopwatch fa-shake"></i>
                        )}
                      </span>
                      {elem.text}
                    </div>
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
                )
            )}
          {todoArr.length &&
            selectedFilter === PENDING &&
            todoArr.map(
              (elem, idx) =>
                !elem.completed && (
                  <div
                    key={idx}
                    className="todo-items row justify-content-center my-1"
                  >
                    <div className="col-sm-5 col-lg-7 fs-3">
                      <span
                        onClick={() => toggleComplete(elem, idx)}
                        className="me-2"
                      >
                        {elem.completed ? (
                          <i className="fa-solid fa-check fa-bounce fa-sm"></i>
                        ) : (
                          <i class="fa-solid fa-stopwatch fa-shake"></i>
                        )}
                      </span>
                      {elem.text}
                    </div>
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
                )
            )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
