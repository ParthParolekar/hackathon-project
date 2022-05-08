import { useState } from "react";
import { v4 as uuid } from "uuid";

const CreateProject = () => {
  const [createProject, setCreateProject] = useState({
    name: null,
    description: null,
    _id: uuid(),
    stack: null,
    difficulty: null,
    time: null,
    availableRoles: [],
    totalCapacity: null,
    currentMembers: [],
    applications: []
  });
  const formHandler = (e) => {
    e.preventDefault();
    const projects = JSON.parse(localStorage.getItem("projects"));
    const newProjects = projects.concat(createProject);
    localStorage.setItem("projects", JSON.stringify(newProjects));
  };
  console.log(JSON.parse(localStorage.getItem("projects")));
  return (
    <>
      <form onSubmit={formHandler}>
        <label>Name</label>
        <input
          value={createProject.name}
          onChange={(e) =>
            setCreateProject({ ...createProject, name: e.target.value })
          }
        />
        <label>Description</label>
        <input
          value={createProject.description}
          onChange={(e) =>
            setCreateProject({ ...createProject, description: e.target.value })
          }
        />
        <label>Stack</label>
        <input
          value={createProject.stack}
          onChange={(e) =>
            setCreateProject({ ...createProject, stack: e.target.value })
          }
        />
        <label>Time</label>
        <input
          value={createProject.time}
          onChange={(e) =>
            setCreateProject({ ...createProject, time: e.target.value })
          }
        />
        <label>Total Capacity</label>
        <input
          value={createProject.totalCapacity}
          onChange={(e) =>
            setCreateProject({
              ...createProject,
              totalCapacity: e.target.value
            })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CreateProject;
