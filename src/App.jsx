import React from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

function App(props) {
  const taskList = props.tasks?.map((task) => {
     return (<Todo id={task.id} name={task.name} completed={task.completed} key={task.id} />);
  });

  return (
    <>
      <div className="todoapp stack-large">
        <h1>TodoMatic</h1>
        <form action="" className="">
          <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
              What needs to be done?
            </label>
          </h2>
          <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
          />
          <button type="submit" className="btn btn__primary btn__lg">
            Add
          </button>
        </form>
        <div className="filters btn-group stack-exception">
          <button className="btn toggle-btn" type="button" aria-pressed="true">
            <span className="visually-hidden">Show</span>
            <span className="">All</span>
            <span className="visually-hidden">Tasks</span>
          </button>

          <button className="btn toggle-btn" type="button" aria-pressed="false">
            <span className="visually-hidden">Show</span>
            <span className="">Active</span>
            <span className="visually-hidden">Tasks</span>
          </button>

          <button className="btn toggle-btn" type="button" aria-pressed="false">
            <span className="visually-hidden">Show</span>
            <span className="">Completed</span>
            <span className="visually-hidden">Tasks</span>
          </button>
        </div>
        <h2 id="list-heading">3 tasks remaining</h2>

        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {taskList}
        </ul>
      </div>
    </>
  );
}

export default App;
