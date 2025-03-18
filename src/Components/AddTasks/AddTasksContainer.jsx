import Button from "../Button/Btn"
import "../AddTasks/AddTasks-container.scss"

function AddTasksContainer({setEditingIndex, setShowModal}) {

    function handleShowModal (){
        setEditingIndex(null)
        setShowModal(true)
    }

    return (
        <div className="add-tasks container">
                        <div className="add-tasks__content">
                            <h2 className="paragraph-name">Tasks</h2>
                            <Button className="add-btn" onClick={handleShowModal}>+Add tasks</Button>
                        </div>
        </div>
    )
}

export default AddTasksContainer