import { useState } from "react"
export default function NewTask({onAdd}){
    const [enterTask,setEnterTask] = useState('');
    function handleTask(event){
        setEnterTask(event.target.value);
    }
    function addTask(){
        onAdd(enterTask)
        setEnterTask('');
    }

    return <div className="flex items-center gap-4">
        <input 
        type="text" 
        onChange={handleTask} 
        value={enterTask}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
        <button 
        className="text-stone-700 hover:text-stone-950" 
        onClick={addTask}>
            Add task
        </button>
    </div>
}