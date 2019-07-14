import React, { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addToDo(description) {
    setTodos([...todos, { description }]);
  }

  return (
    <div>
      <Form addToDo={addToDo} />
      <ToDoList todos={todos} />
    </div>
  );
}

function Form(props) {
  const [description, setDescription] = useState("");

  function onChangeDescription(event) {
    const textbox = event.target;
    setDescription(textbox.value);
  }

  function submitForm(event) {
    // Prevent that a submit reloads the page.
    event.preventDefault();

    // Call the addToDo callback function from props and supply the entered description.
    props.addToDo(description);

    // Clear the description so the textbox is cleared.
    setDescription("");
  }

  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        // The value is "read" from state: one way data binding
        value={description}
        // Events are used to update state
        onChange={onChangeDescription}
      />{" "}
      <button type="submit">Add</button>
    </form>
  );
}

const ToDoList = ({ todos }) => (
  <ul>
    {todos.map((todo, index) => (
      <li key={index}>{todo.description}</li>
    ))}
  </ul>
);
