import { useMemo } from "react";
import Button from "../../Button/Btn"
import Input from "../../Input/Input"
import EachTask from "./EachTask"
import "../Tasks/Task.scss"

function Task({tasks, viewMode, editingIndex, setEditingIndex, setShowModal, setTasks}){


    function handleCheckbox(index) {
        const updatedTasks = [...tasks];
        updatedTasks[index].checked = !updatedTasks[index].checked;
        setTasks(updatedTasks);
    }
    
    const taskDisplay = useMemo(() => {
        return tasks.filter((task) => {
            if(viewMode === 'done') return task.checked;
            if(viewMode === 'pending') return !task.checked;
            return true;
        });
    }, [tasks, viewMode]);


    function handleDelete(index){
        setTasks(tasks.filter((_,i) => i !== index))
    }

    
    function handleShowEditModal(task){
        setEditingIndex(task.id)
        setShowModal(true)
    }

    return (
        <div>
            <ol>
                {taskDisplay.map((task, index) => {
                    return (
                        <li key={index}>
                            <Input  type="checkbox" 
                                    className="checkbox"
                                    checked= {task.checked}
                                    onChange={() => handleCheckbox(index)}/>
                    {editingIndex !== task.id ? (
                        <>
                            <EachTask task={task}/>
                            <span className="task-date">
                                ({new Date(task.selectedDate)
                                .toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })})
                            </span>
                            <Button className="edit-btn" onClick={() => handleShowEditModal(task)}>
                                <img src="/src/assets/Icons/EditIcon.png" className="edit-icon" />
                            </Button>
                            <Button className="delete-btn" onClick={() => handleDelete(index)}>Delete</Button>
                        </>
                    ) : null
                    }
                    </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default Task