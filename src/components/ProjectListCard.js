import { useState } from 'react';
import { X, Layers, Folder, File, ChevronRight } from 'lucide-react';
import "../styles/ProjectListCard.css";

const ProjectListCard = ({ 
  isProjectListOpen, 
  handleCloseProjectList, 
  onProjectSelect, 
  projects,
  tasks = {} // Add default empty object
}) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const TreeNode = ({ name, id }) => {
    const handleProjectSelect = () => {
      setSelectedProject({ name, id });
      onProjectSelect({ name, id });
    };

    return (
      <div
        className="tree-node flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded w-full"
        onClick={handleProjectSelect}
      >
        <Folder className="mr-2 text-blue-500" />
        <span className="flex-grow">{name}</span>
      </div>
    );
  };

  const handleBackToProjectList = () => {
    setSelectedProject(null);
  };

  return (
    isProjectListOpen && (
      <div
        className={`project-list-card relative shadow rounded-lg p-4 ${
          isProjectListOpen ? 'project-list-card-enter' : 'project-list-card-exit'
        }`}
        style={{
          height: '250px',
          background: '#F0F4FF',
          color: '#0F2942',
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '16px',
          position: 'relative',
        }}
      >
        <div
          className="flex items-center justify-between w-full"
          style={{ marginBottom: '16px' }}
        >
          <div className="flex items-center">
            <Layers className="mr-3 project-list-icon-pulse" />
            <span className="text-lg font-semibold">
              {selectedProject ? selectedProject.name : 'Project List'}
            </span>
          </div>
          <button
            onClick={handleCloseProjectList}
            className="hover:bg-white/20 rounded-full p-1 transition-colors"
            style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: '#0F2942', color: '#fff' }}
          >
            <X size={20} />
          </button>
        </div>
        <div className="flex-grow overflow-y-auto overflow-x-hidden w-full">
          {selectedProject ? (
            <div>
              <button 
                onClick={handleBackToProjectList} 
                className="flex items-center mr-4 hover:bg-gray-100 p-2 rounded mb-4"
              >
                <ChevronRight className="transform rotate-180 mr-2" size={20} />
                Back to Projects
              </button>
              
              {/* Display existing tasks for the selected project */}
              {tasks[selectedProject.id] && tasks[selectedProject.id].map((task, index) => (
                <div 
                  key={task.id} 
                  className="flex items-center p-2 hover:bg-gray-100 rounded mb-2"
                >
                  <File className="mr-2 text-gray-500" />
                  <div>
                    <p className="font-medium">{task.name}</p>
                    <p className="text-sm text-gray-600">{task.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            projects.map((project) => (
              <TreeNode key={project.id} name={project.name} id={project.id} />
            ))
          )}
        </div>
      </div>
    )
  );
};

export default ProjectListCard;