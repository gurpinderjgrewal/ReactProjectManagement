import Button from "./Button";
import Task from "./Task";
export default function ShowSelectedProject({project,onDelete,tasks, onAddTask, onDeleteTask}){

    const formatDate =  new Date(project.dueDate).toLocaleDateString('en-US',{
        year: 'numeric',
        month: 'long',
        day:'numeric'
    });
    return <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                <Button onClick={onDelete}>Delete</Button>
            </div>
            <p className="mb-4 text-stone-400">{formatDate}</p>
            <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
        </header>
        <Task tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask}/>
    </div>
}