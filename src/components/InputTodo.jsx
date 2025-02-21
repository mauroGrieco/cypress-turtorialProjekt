import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaPlusCircle } from "react-icons/fa";

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: "",
    priority: "2",
    category: "",
  });

  const categories = ["Work", "Personal", "Shopping", "Others"];

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      const priorityMap = {
        high: 1,
        middle: 2,
        low: 3,
      };
      props.addTodoProps(inputText.title, priorityMap[inputText.priority], inputText.category);
      setInputText({
        title: "",
        priority: "middle",
        category: "",
      });
    } else {
      alert("Please write item");
    }
  };

  return (
      <form
          data-set="todo-form"
          onSubmit={handleSubmit}
          className="form-container"
      >
        <input
            type="text"
            className="input-text"
            placeholder="Add todo..."
            value={inputText.title}
            name="title"
            onChange={onChange}
        />
        <select
            name="priority"
            value={inputText.priority}
            onChange={onChange}
            className="input-priority"
        >
          <option value="high">Hoch</option>
          <option value="middle">Mittel</option>
          <option value="low">Niedrig</option>
        </select>
        <select
            name="category"
            value={inputText.category}
            onChange={onChange}
            className="input-category"
        >
          {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
          ))}
        </select>
        <button data-set="add-todo-btn" className="input-submit">
          <FaPlusCircle />
        </button>
      </form>
  );
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

export default InputTodo;