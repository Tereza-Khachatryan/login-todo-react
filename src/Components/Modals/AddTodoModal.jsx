import React, {useState} from "react";
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import Button from "../Button/Btn";
import Input from "../Input/Input.jsx"
import "../Modals/Modal.scss"

function AddTodoModal({ tasks, setTasks, setShowModal }) {
    const [newTask, setNewTask] = useState('')
    const [selectedDate, setSelectedDate] = useState(null)

    function addTodo(newTaskObject) {
        if (newTaskObject.task && newTaskObject.selectedDate) {
            const newTaskWithDate = {
                ...newTaskObject,
                id: Date.now(),
                checked: false
            };
            setTasks([newTaskWithDate, ...tasks]);
            setShowModal(false);
        }
    }

    function handleInputChange(e){
        setNewTask(e.target.value)
    }

    function handleDateChange(date){
        setSelectedDate(date)
    }

    function onSave(event) {
        event.preventDefault()
        if(newTask.trim() && selectedDate){
            addTodo({task: newTask, selectedDate})
            setShowModal(false)
        }else {
            alert("Please provide both task title and deadline.");
        }
    }

    return (
        <form className="modal-form">
            <h2 className="task-details-header">Task details</h2>
            <div className="form-group">
                <p>Task title</p>
                <Input 
                    className="add-task-input"
                    type="text"
                    name="task"
                    value={newTask}
                    onChange={handleInputChange}
                    placeholder="Enter new task"
                />
                <p>Deadline</p>
                <DatePicker 
                    className="modal-datepicker"
                    placeholder= "Enter the date"
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="MM/dd/yyyy"   
                />
            </div>
            <div className="control-btns">
                <Button className="save-btn" onClick={onSave}>Save</Button>
                <Button className="cancel-btn" onClick={()=> setShowModal(false)}>Cancel</Button>
            </div>
        </form>
    )
}

export default AddTodoModal