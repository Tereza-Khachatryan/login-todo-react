import React, {useState} from "react";

function AddTodoModal({addTodo, setShowModal}) {
    const [newTask, setNewTask] = useState('')

    function handleInputChange(e){
        setNewTask(e.target.value)
    }

    function onSave(event) {
        event.preventDefault()
        setNewTask('')
        addTodo(newTask)
    }

    return (
        <form className="modal-form">
            <h2 className="task-details-header">Task details</h2>
            <div className="form-group">
                <input 
                    className="add-task-input"
                    type="text"
                    name="task"
                    onChange={handleInputChange}
                    placeholder="Enter new task"
                />
            </div>
            <div className="control-btns">
                <button className="save-btn" onClick={onSave}>Save</button>
                <button className="cancel-btn" onClick={()=> setShowModal(false)}>Cancel</button>
            </div>
        </form>
    )
}

export default AddTodoModal