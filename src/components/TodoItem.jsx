/* eslint react/prop-types: 0 */
import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const { completed, id, title, priority } = props.todo;

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  useEffect(
      () => () => {
        console.log("Cleaning up...");
      },
      []
  );

  const handlePriorityChange = (e) => {
    props.setPriority(id, e.target.value);
  };


  return (
      <li className={styles.item} data-type="todo-item">
        <div onDoubleClick={handleEditing} style={viewMode}>
          <input
              type="checkbox"
              className={styles.checkbox}
              checked={completed}
              onChange={() => props.handleChangeProps(id)}
              name="checkbox"
          />
          <button
              data-set="delete-todo-btn"
              onClick={() => props.deleteTodoProps(id)}
          >
            <FaTrash style={{color: "orangered", fontSize: "16px"}}/>
          </button>
          <span style={completed ? completedStyle : null}>{title}</span>
          <select
              value={priority}
              onChange={handlePriorityChange}
              className={styles.prioritySelect}
          >
            <option value="hoch">Hoch</option>
            <option value="mittel">Mittel</option>
            <option value="niedrig">Niedrig</option>
          </select>
        </div>
        <input
            type="text"
            style={editMode}
            className={styles.textInput}
            value={title}
            onChange={(e) => {
              props.setUpdate(e.target.value, id);
            }}
            onKeyDown={handleUpdatedDone}
        />
      </li>
  );
};

export default TodoItem;