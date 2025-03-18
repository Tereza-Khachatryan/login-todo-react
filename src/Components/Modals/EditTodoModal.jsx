import React, {useState, useEffect} from "react";
import 'react-datepicker/dist/react-datepicker.css'
import Button from "../Button/Btn";
import DatePicker from "react-datepicker";
import "../Modals/Modal.scss"

function EditTodoModal({task, handleSaveTask, setShowModal}) {
    const [editedTask, setEditedTask] = useState(task.task)
    const [editedDate, setEditedDate] = useState(task.selectedDate)

    
    useEffect(()=>{
        setEditedTask(task.task)
        setEditedDate(task.selectedDate)
    }, [task])
    

    function handleSubmit(e) {
        e.preventDefault()
        const updatedTask = { ...task, task: editedTask, selectedDate: editedDate };
        handleSaveTask(updatedTask)
        setShowModal(false)
    }

    function handleDateChange(date){
        setEditedDate(date)
    }

    function handleCancel(){
        handleSaveTask(task.task)
        setEditedDate(task.selectedDate)
        setShowModal(false)
    }


    return (
        <form className="modal-form">
            <h2 className="task-details-header">Edit details</h2>
            <div className="form-group">
                <p>Task title</p>
                <input
                     className="add-task-input"
                     type="text"
                     name="task"
                     value={editedTask}
                     onChange={(e => setEditedTask(e.target.value))}
                />
                <p>Deadline</p>
                <DatePicker
                     className="modal-datepicker"
                     placeholder="Enter the date"
                     selected={editedDate} 
                     onChange={handleDateChange}  
                     dateFormat="MM/dd/yyyy"  
                />
            </div>
            <div className="control-btns">
            <Button className="save-btn" type="submit" onClick={handleSubmit}>Save</Button> 
            <Button className="cancel-btn" onClick={handleCancel}>Cancel</Button> 
        </div>
        </form>
    )
}

export default EditTodoModal