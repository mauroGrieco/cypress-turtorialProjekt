import * as PropTypes from "prop-types";
import "./Modal.css";

const TodoDetail = ({ todo, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Todo Details</h2>
                <p><strong>Title:</strong> {todo.title}</p>
                <p><strong>Priority:</strong> {todo.priority}</p>
                <p><strong>Category:</strong> {todo.category}</p>
                <p><strong>Completed:</strong> {todo.completed ? "Yes" : "No"}</p>
                <button onClick={onClose}>Schließen</button>
            </div>
        </div>
    );
};

TodoDetail.propTypes = {
    todo: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default TodoDetail;
