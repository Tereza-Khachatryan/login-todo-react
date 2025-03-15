import React, { useState, useEffect } from "react";
import AddTodoModal from "./AddTodoModal.jsx"

function LoggedPage ({onLogout}){
    const [tasks, setTasks] = useState([])
    const [editingIndex, setEditingIndex] = useState(null)
    const [editedTask, setEditedTask] = useState('')
    const [viewMode, setViewMode] = useState('all')
    const [showModal, setShowModal] = useState(false)

    function handleShowModal (){
        setShowModal(true)
    }

    function handleEdit(index){
        setEditingIndex(index)
        setEditedTask(tasks[index].task)
    }

    function handleSave(index){
        const updatedTasks = [...tasks]
        updatedTasks[index].task = editedTask
        setTasks(updatedTasks)
        setEditingIndex(null)
        setEditedTask('')
    }

    function handleCancel(){
        setEditedTask('')
        setEditingIndex(null)
    }

    function handleCheckbox(index) {
        const updatedTasks = [...tasks];
        updatedTasks[index].checked = !updatedTasks[index].checked;
        setTasks(updatedTasks);
    }

    function addTodo(newTask){
        if(newTask.trim() !== undefined){
            setTasks(tasks => [{task: newTask, checked: false}, ...tasks])
            setShowModal(false)
        }
    }

    function handleAll(){
      setViewMode('all')
    }

    function handleDone(){
        setViewMode('done')
    }
    
    function handlePending(){
        setViewMode('pending')
    }

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem('tasks'))
        if(tasks?.length > 0) {
            setTasks(tasks)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const taskDisplay = tasks.filter(((task) => {
        if(viewMode === 'done') return task.checked
        if(viewMode === 'pending') return !task.checked
        return true
    }))

    return (
        <div className="general-div-loggedPage">
            {showModal && <AddTodoModal addTodo={addTodo} setShowModal={setShowModal} />} 
            <div className="header-todo">
                <h1>Todo App</h1>
            </div>
            <nav className="navbar">
                <button className="nav-btn" onClick={handleAll}>All</button>
                <button className="nav-btn" onClick={handlePending}>Pending</button>
                <button className="nav-btn" onClick={handleDone}>Done</button>
            </nav>
            <div className="add-tasks">
                <h2 className="paragraph-name">Tasks</h2>
                <button className="add-btn" onClick={handleShowModal}>+ Add tasks</button>
            </div>
            <div className="all-tasks">
                <ol>
                    {taskDisplay.map((task, index) => {
                        return (<li key={index}>
                            <input 
                                type="checkbox" 
                                className="checkbox"
                                checked= {task.checked}
                                onChange={() => handleCheckbox(index)}
                                />
                            {editingIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                    className="edit-input"
                  />
                  <button className="save-btn" onClick={() => handleSave(index)}>
                    Save
                  </button>
                  <button className="cancel-btn" onClick={handleCancel}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <label className="eachTask">
                    {task.task}
                  </label>
                  <button className="edit-btn" onClick={() => handleEdit(index)}>
                  🖊️
                  </button>
                </>
              )}
            </li>)
                    })}
                </ol>
            </div>
            <button className="logout-btn" onClick={onLogout}>Logout</button>
        </div>
        
    )
}

export default LoggedPage