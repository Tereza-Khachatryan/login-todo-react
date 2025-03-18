import Task from "./Task"

function AllTasks({ tasks, viewMode, editigIndex, setEditingIndex, setShowModal, setTasks }){
    return (
        <Task  
            editingIndex={editigIndex}
            viewMode={viewMode}
            tasks={tasks} 
            setEditingIndex={setEditingIndex}
            setShowModal={setShowModal}
            setTasks={setTasks}
        />
    )
}

export default AllTasks