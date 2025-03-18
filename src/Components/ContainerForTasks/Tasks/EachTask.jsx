import "../Tasks/EachTask.scss"

function EachTask({ task }){
    return (
        <label className="eachTask">{task.task}</label>
    )
}

export default EachTask