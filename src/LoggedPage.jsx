import React, { useState, useEffect } from "react";
import AddTodoModal from "./Components/Modals/AddTodoModal.jsx"
import EditTodoModal from "./Components/Modals/EditTodoModal.jsx";
import Navbar from "./Components/NavBar/Navbar.jsx";
import AddTasksContainer from "./Components/AddTasks/AddTasksContainer.jsx";
import Logout from "./Components/Logout-container/Logout-container.jsx";
import Container from "./Components/ContainerForTasks/Container.jsx";

function LoggedPage ({onLogout}){
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks') || "[]"));
    const [editingIndex, setEditingIndex] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [viewMode, setViewMode] = useState('all')

    function handleSaveTask(updatedTask) {
        const updatedTasks = tasks.map(task => 
            task.id === updatedTask.id ? updatedTask : task
        );
        setTasks(updatedTasks); 
        localStorage.setItem('tasks', JSON.stringify(updatedTasks))
        setShowModal(false); 
        setEditingIndex(null); 
    }

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            try {
                const parsedTasks = JSON.parse(storedTasks);
                if (Array.isArray(parsedTasks)) {
                    setTasks(parsedTasks);
                }
            } catch (error) {
                console.error('Error parsing tasks from localStorage:', error);
            }
        }
    }, []);
    
    
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])


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
            {showModal && editingIndex === null && (
                <AddTodoModal  
                    tasks={tasks}
                    setTasks={setTasks} 
                    setShowModal={setShowModal} 
                />)}
            
            {showModal && editingIndex !== null && (
            <EditTodoModal
                task={tasks.find(task => task.id === editingIndex)}  
                handleSaveTask={handleSaveTask}                     
                setShowModal={setShowModal}          
    />
)}
            <div className="header-todo">
                <h1>Todo App</h1>
            </div>
            <Navbar setViewMode = {setViewMode}/>
            <AddTasksContainer 
                            setEditingIndex={setEditingIndex}   
                            setShowModal={setShowModal}
            />
            <Container  
                        tasks={tasks}
                        setEditingIndex={setEditingIndex}
                        setShowModal= {setShowModal}
                        setTasks={setTasks}
                        viewMode={viewMode}
                        editingIndex={editingIndex}
            />
            <Logout  onLogout={onLogout}/>
        </div>

    )
}


export default LoggedPage