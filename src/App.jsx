import { useState } from "react";

import ProjectSideBar from "./components/ProjectSideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
function App() {
  const [project, setProject] = useState({
    selectedProjectId:undefined,
    projects: []
  });
  function handleStartAddProject(){
    setProject(
      prevState => {
        return {
        ...prevState,
          selectedProjectId: null
          
      }
    });
  }
  function handleAddProject(projectData){
    setProject(prevState =>{
      const newProject = {
        ...projectData,
        id: Math.random()
      };
      return {
        ...prevState,
        selectedProjectId:undefined,
        projects: [...prevState.projects, newProject]
      }
    });

  }

  let content;
  if(project.selectedProjectId === null){
    content = <NewProject onAdd = {handleAddProject}/>
  }else if(project.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
    <ProjectSideBar onStartAddProject = {handleStartAddProject}  projects={project.projects}/>
    {content}
    </main>
  );
}

export default App;
