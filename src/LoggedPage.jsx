import React, { useState, useEffect } from "react";
import AddTodoModal from "./Components/AddTodoModal.jsx"
import Button from "./Components/Button/Btn.jsx";
import EditTodoModal from "./Components/EditTodoModal.jsx";

function LoggedPage ({onLogout}){
    const [tasks, setTasks] = useState([])
    const [editingIndex, setEditingIndex] = useState(null)
    const [viewMode, setViewMode] = useState('all')
    const [showModal, setShowModal] = useState(false)

    function handleShowModal (){
        setEditingIndex(null)
        setShowModal(true)
    }

    function handleShowEditModal(task){
        setEditingIndex(task.id)
        setShowModal(true)
    }

    function handleSaveTask(updatedTask){
        const updatedTasks = tasks.map(task => task.id === updatedTask.id ? updatedTask : task)
        setTasks(updatedTasks)
        localStorage.setItem('task', JSON.stringify(updatedTask))
        setShowModal(false)
        setEditingIndex(null)
    }

    function handleCancel(){
        setShowModal(false)
        setEditingIndex(null)
    }

    function handleDelete(index){
        setTasks(tasks.filter((_,i) => i !== index))
    }

    function handleCheckbox(index) {
        const updatedTasks = [...tasks];
        updatedTasks[index].checked = !updatedTasks[index].checked;
        setTasks(updatedTasks);
    }

    function addTodo(newTaskObject){
        if(newTaskObject.task && newTaskObject.selectedDate){
            const newTaskWithDate = {
                ...newTaskObject,
                id: Date.now(),
                checked: false
            }
            setTasks(tasks => [newTaskWithDate, ...tasks])
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

    useEffect(() => {
        if(showModal){
            document.body.classList.add('open-modal')
        }else {
            document.body.classList.remove('open-modal')
        }
    }
    ,[showModal])

    return (
        <div className="general-div-loggedPage">
            {showModal && !editingIndex && (<AddTodoModal addTodo={addTodo} setShowModal={setShowModal} />)}
            
            {showModal && editingIndex && (
                <EditTodoModal
                    task={tasks.find(task => task.id === editingIndex)}
                    handleSaveTask = {handleSaveTask}
                    setShowModal = {setShowModal}
                />
            )}
            <div className="header-todo">
                <h1>Todo App</h1>
            </div>
            <nav className="navbar">
                <Button className="nav-btn" onClick={handleAll}>All</Button>
                <Button className="nav-btn" onClick={handlePending}>Pending</Button>
                <Button className="nav-btn" onClick={handleDone}>Done</Button>
            </nav>
            <div className="add-tasks container">
                <div className="add-tasks__content">
                    <h2 className="paragraph-name">Tasks</h2>
                    <Button className="add-btn" onClick={handleShowModal}>+Add tasks</Button>
                </div>
            </div>
            <div className="container">
                <div className="all-tasks">
                    <ol>
                        {taskDisplay.map((task, index) => {
                            return (
                            <li key={index}>
                                <input 
                                    type="checkbox" 
                                    className="checkbox"
                                    checked= {task.checked}
                                    onChange={() => handleCheckbox(index)}
                                    />
                                {editingIndex !== task.id ? (
                    <>
                    <label className="eachTask">{task.task}</label>
                    <span className="task-date">
                        ({new Date(task.selectedDate)
                        .toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })})
                    </span>

                    <Button className="edit-btn" onClick={() => handleShowEditModal(task)}>🖊️</Button>
                    <Button className="delete-btn" onClick={() => handleDelete(index)}>Delete</Button>
                    </>
                ) : null}
                </li>)
                        })}
                    </ol>
                </div>
            </div>
            <div className="logout-parent container">
                <Button className="logout-btn" onClick={onLogout}>Logout</Button>
            </div>
        </div>
        
    )
}


export default LoggedPage