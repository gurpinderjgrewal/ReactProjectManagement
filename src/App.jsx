import { useState } from "react";

import ProjectSideBar from "./components/ProjectSideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ShowSelectedProject from "./components/ShowSelectedProject";
function App() {
  const [project, setProject] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });
  function handleSelectedProject(id) {
    setProject(
      prevState => {
        return {
          ...prevState,
          selectedProjectId: id,

        }
      });
  }
  function handleStartAddProject() {
    setProject(
      prevState => {
        return {
          ...prevState,
          selectedProjectId: null,

        }
      });
  }
  function handleAddProject(projectData) {
    setProject(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      }
    });

  }
  function handleAddTask(text) {
    setProject(prevState => {
      const taskId = Math.random();
      const newTask = {
        id: taskId,
        text: text,
        projectId: prevState.selectedProjectId,
      }
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      }
    });
  }
  function handleDeleteTask(id) {
    setProject(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id != id)
      }
    });
  }
  function handleCancelAddProject() {
    setProject(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    });
  }
  function handleDeleteProject() {
    setProject(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId)
      }
    })
  }
  const selectedProject = project.projects.find(projected => projected.id === project.selectedProjectId)
  console.log(project)

  let content = (
    <ShowSelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      tasks={project.tasks}
      onDeleteTask={handleDeleteTask}>
    </ShowSelectedProject>);
  if (project.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (project.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectedProject}
        projects={project.projects}
        selectedProjectId={project.selectedProjectId} />
      {content}
    </main>
  );
}

export default App;
