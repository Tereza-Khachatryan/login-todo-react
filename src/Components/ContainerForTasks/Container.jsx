import AllTasks from "./Tasks/AllTasks"

function Container ({ tasks, setEditingIndex, setShowModal, setTasks, viewMode, editingIndex }){
    return (
        <AllTasks   
            tasks={tasks}
            setEditingIndex={setEditingIndex}
            setShowModal={setShowModal}
            setTasks={setTasks}
            viewMode={viewMode}
            editigIndex={editingIndex}
        />
    )
}

export default Container