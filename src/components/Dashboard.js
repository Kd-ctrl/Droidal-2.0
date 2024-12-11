import React, { useState, useRef, useEffect, } from 'react'; 
import "../styles/Dashboard.css";
import ProjectListCard from './ProjectListCard';
import MainTabs from './Hub/MainTabs';
import LicenseContent from './License/License';
import CreateProjectModal from './Modals/CreateProject'
import CreateTaskModal from './Modals/CreateTask'
import DashboardSkeleton from './Skeleton/DashboardSkeleton';
import CountUp from 'react-countup';
import { 
    LayoutGrid, 
    Users, 
    CreditCard, 
    Settings, 
    ChevronLeft, 
    ChevronRight, 
    Home, 
    Download, 
    User, 
    CloudDownload,
    Bell,
    TrendingUp, 
    Activity,
    HelpCircle,
    BarChart,
    Layers,
    CheckSquare,
    GitFork,
    UserCheck,
    ArrowRight,
    Folder,
    Brain, 
    Store ,
    MessageCircle, 
    Award ,
    X,

  } from 'lucide-react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data for charts and tables
const revenueData = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 5000 },
  { name: 'Apr', revenue: 4500 },
  { name: 'May', revenue: 6000 },
  { name: 'Jun', revenue: 5500 },
];

const userTableData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Active' },
];




const Dashboard = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState('workspace');
  const [isProjectListOpen, setIsProjectListOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [open, setOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isTaskModalOpen, setIsTaskModalOpen] = React.useState(false);
  const [tasks, setTasks] = useState({});
  
  const [projects, setProjects] = useState([
    { name: 'TestProj', id: 'project1' },
    { name: 'TestProj_2', id: 'project2' },
  ]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 2-second loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  const SidebarItem = ({ icon: Icon, label, tabName }) => (
    <div 
      className={`flex items-center p-3 cursor-pointer 
        hover:bg-gray-100 transition-colors duration-300`}
      style={{
        backgroundColor: activeTab === tabName ? '#2C5282' : 'transparent', 
        color: activeTab === tabName ? '#FFFFFF' : '#4A5568',
        borderRadius: '15px',
        margin: '4px',
      }}
      onClick={() => setActiveTab(tabName)}
    >
      <Icon className="mr-3" />
      {isExpanded && <span>{label}</span>}
    </div>
  );
  

  const HeaderIcon = ({ icon: Icon, label }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div 
        className={`
          flex items-center 
          transition-all duration-300 ease-in-out 
          p-2 rounded-lg 
          ${isHovered ? 'pl-6' : 'pl-2'}
          relative
          cursor-pointer
          overflow-hidden
        `}
        style={{ 
          backgroundColor: isHovered ? '#2C5282' : 'transparent', 
          color: isHovered ? '#FFFFFF' : '#1A202C' 
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className={`
            flex items-center 
            transition-all duration-300 ease-in-out
            ${isHovered ? 'mr-2' : 'mr-0'}
          `}
        >
          <Icon className="w-5 h-5" />
        </div>
        
        {isHovered && (
          <span 
            className={`
              text-sm 
              transition-opacity 
              duration-300 
              ease-in-out
              opacity-100
              font-medium
            `}
            style={{
              color: '#fff', 
              fontWeight: isHovered ? '600' : 'normal' // Slightly thicker
            }}
          >
            {label}
          </span>
        )}
      </div>
    );
  };
  
  const handleProjectListClick = () => {
    setIsProjectListOpen(true);
    setIsExpanded(false);
  };

  const handleCloseProjectList = () => {
    setIsProjectListOpen(false);
    setSelectedProject(null);
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };



  const handleAddProject = (newProject) => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
  };

  const handleAddTask = (task) => {
    if (!selectedProject) return;

    setTasks(prevTasks => ({
      ...prevTasks,
      [selectedProject.id]: [
        ...(prevTasks[selectedProject.id] || []),
        task
      ]
    }));
  };
  
  

  
  return (
    <div className="flex h-screen bg-[#F5F7FA]">
        {/* <AnimatedBackground /> */}

        {/* Header */}
      <div className="fixed top-0 left-0 right-0 h-16 shadow-md flex justify-between items-center px-6 z-20" style={{ backgroundColor: '#FBFBFB'}}>
        <div className="flex items-center">
        
          <img src="/Droidal-Colour.png" alt="Automation Tool" className="h-10 mr-0" style={{ marginLeft: '-30px' }} />
          <div 
          className="p-3 cursor-pointer flex justify-end"
          onClick={() => setIsExpanded(!isExpanded)}
          style={{ marginLeft: '-10px' }}
        >
          {isExpanded ? <ChevronLeft /> : <ChevronRight />}
        </div>
        </div>
        <div className="flex space-x-4 items-center">
          <p><span style={{ backgroundColor: '#2C5282', color:'#FFFFFF', borderRadius: '10px', padding:'7px 10px', fontWeight:'600' }}>Community Edition</span></p>
          <HeaderIcon icon={Bell} label="Notifications" />
          <HeaderIcon icon={User} label="Profile" />
          <HeaderIcon icon={Download} label="Update Installer" />
          <HeaderIcon icon={CloudDownload} label="Download Installer" />
        </div>
      </div>

      {/* Sidebar */}
      <div 
        className={`bg-white border-r transition-all z-10 duration-300 
          ${isExpanded ? 'w-48' : 'w-20'}`}
          style={{ backgroundColor: '#FBFBFB',}}
      >
        {/* Sidebar Toggle */}
        

        {/* Sidebar Navigation */}
        <div className="" style={{ fontWeight: '600', marginTop: '90px'}}> 
          <SidebarItem icon={LayoutGrid} label="Work Space" tabName="workspace" />
          <SidebarItem icon={Users} label="HUB" tabName="hub" />
          <SidebarItem icon={BarChart} label="Dashboard" tabName="dashboard" />
          <SidebarItem icon={Brain} label="Droidal AI" tabName="droidal_ai" />
          <SidebarItem icon={Store} label="Market Place" tabName="markrt_place" />
          <SidebarItem icon={MessageCircle} label="Forum" tabName="forum" />
          <SidebarItem icon={Award} label="License" tabName="license" />
          <SidebarItem icon={Settings} label="Settings" tabName="settings" />
          <SidebarItem icon={HelpCircle} label="Help" tabName="help" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto" style={{ zIndex: '9' }}>
        {activeTab === 'workspace' && (
          <div>
            <h1 className="text-2xl font-bold mb-6">Work Space</h1>
            
            {/* Cards Row */}
            <div className={`grid grid-cols-${isProjectListOpen ? '4 grid-flow-col' : '1'} gap-6 mb-2`}>
              {/* First Card - Getting Started */}
              <div
                className="flex shadow rounded-lg p-6 mb-1 hero"
                style={{ 
                  height: '250px',
                  background: `linear-gradient(to right, #2C5282, #4A90E2)`, 
                  color: '#FFFFFF', 
                  borderRadius: '20px',
                  gridColumn: isProjectListOpen ? 'span 2' : 'span 2'
                }}
              >
                <div className="mr-6">
                    <img
                        src={selectedProject ? "/task.png" : "/project.png"}
                        alt={selectedProject ? "task" : "project"}
                        className="project-img"
                        style={{ marginRight: '40px', transition: 'transform 0.3s ease' }}
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl font-bold mb-2">
                      {selectedProject ? "Task Management" : "Getting Started"}
                    </h1>
                    <p className="text-2xl mb-4">
                      {selectedProject 
                        ? "Create more tasks and helps automate more workflows." 
                        : "Create more projects and helps automate more workflows."}
                    </p>
                    <div className="flex space-x-4 mt-2">
                    <button
                        className="px-2 py-1 bg-white text-gray-800 font-semibold hover:bg-gray-200 transition-all"
                        style={{
                          width: '120px',
                          backgroundColor: '#F0F4FF',
                          color: '#2C5282',
                          borderRadius: '15px',
                          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        }}
                        onClick={() => {
                          selectedProject
                            ? setIsTaskModalOpen(true) // Open Task Modal if project is selected
                            : document.getElementById('open-modal-btn').click(); // Open Project Modal otherwise
                        }}
                      >
                        {selectedProject ? 'Create Task' : 'Create Project'}
                      </button>


                        <button
                            className="px-2 py-1 text-white font-semibold hover:bg-opacity-90 transition-all"
                            style={{ 
                                width: '150px', 
                                borderRadius: '15px', 
                                backgroundColor: '#2C5282',
                                color:'#FFFFFF',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '8px 15px'
                            }}
                            onClick={handleProjectListClick}
                        >
                            <span>{selectedProject ? "Upload Task" : "Project List"}</span>
                            <ArrowRight size={20} color="white" />
                        </button>

                        <CreateProjectModal onAddProject={handleAddProject} />
                        <CreateTaskModal
                            isOpen={isTaskModalOpen}
                            onClose={() => setIsTaskModalOpen(false)}
                            onAddTask={(task) => {
                              handleAddTask(task);
                              // You might want to update the ProjectListCard's tasks here as well
                            }}
                          />
                    </div>
                </div>
              </div>

              <ProjectListCard
                  isProjectListOpen={isProjectListOpen}
                  handleCloseProjectList={handleCloseProjectList}
                  onProjectSelect={handleProjectSelect}
                  projects={projects}
                  tasks={tasks}
                />
            </div>

{/* -----------------------------Second row Cards-------------------------------------------- */}

            <div className="grid grid-cols-3 gap-6 mb-3">
            {/* First Card - Projects */}
            <div 
                className="rounded-lg p-4 shadow-md content-card" 
                style={{
                 // Brighter pastel pink
                color: '#fff'
                }}
            >
                
                <div className="flex items-center mb-2 content-card-header">
                <h2 className="text-lg font-semibold ml-2">Natural Language Processing(NLP)</h2>
                </div>
                <p className="font-bold" style={{ color:'#4A5568', fontSize:'15px', lineHeight:'30px' }}>Focuses on the interaction between computers and human language. Applications include language translation, sentiment analysis, chatbots, and text summarization.</p>
            </div>

            {/* Second Card - Tasks */}
            <div 
                className="rounded-lg p-4 shadow-md content-card" 
                style={{
                // background: 'linear-gradient(135deg, #99BC85, #F1F8E8)', // Brighter pastel blue
                color: '#fff'
                }}
            >
                <div className="flex items-center mb-2 content-card-header">
                <h2 className="text-lg font-semibold ml-2">Large Language Model(LLM)
                </h2>
                </div>
                <p className="font-bold" style={{ color:'#4A5568', fontSize:'15px', lineHeight:'30px' }}>An advanced AI system designed to understand and generate human-like text based on the input it receives.</p>
            </div>


            {/* Third Card - Total Users */}
            <div 
                className="rounded-lg p-4 shadow-md content-card" 
                style={{
                // background: 'linear-gradient(135deg, #FFCF81, #F1F8E8)', // Brighter pastel lilac
                color: '#fff'
                }}
            >
                <div className="flex items-center mb-2 content-card-header">
                <h2 className="text-lg font-semibold ml-2">Deep learning
                </h2>
                </div>
                <p className="font-bold" style={{ color:'#4A5568', fontSize:'15px', lineHeight:'30px' }}>Uses neural networks with many layers to analyze and learn from vast amounts of data. Enables machines to identify patterns, make decisions, and improve their performance over time.</p>
            </div>
            </div>

{/* -----------------------------Third row Cards-------------------------------------------- */}

            <div className="grid grid-cols-3 gap-6 mb-0">
            {/* First Card - Projects */}
            <div 
                className="rounded-lg p-4 shadow-md card" 
                style={{
                // background: 'linear-gradient(135deg, #FF8C94, #FFB6C1)', // Brighter pastel pink
                // backgroundImage: 'repeating-linear-gradient(45deg, rgb(249, 249, 249) 0px, rgb(249, 249, 249) 109px,rgb(234, 234, 234) 109px, rgb(234, 234, 234) 218px,rgb(242, 242, 242) 218px, rgb(242, 242, 242) 327px)',
                backgroundColor: '#F0F4FF',
                color: '#0F2942'
                }}
            >
                <div className="flex items-center mb-2 card-header">
                <Layers className="mr-2" />
                <h2 className="text-lg font-semibold">Projects</h2>
                </div>
                <p className="text-3xl font-bold">
                  <CountUp start={0} end={2350} duration={2.5} />
                </p>
            </div>

            {/* Second Card - Tasks */}
            <div 
                className="rounded-lg p-4 shadow-md card" 
                style={{
                // background: 'linear-gradient(135deg, #D19FD4, #E6A8D7)', // Brighter pastel blue
                // backgroundImage: 'repeating-linear-gradient(45deg, rgb(249, 249, 249) 0px, rgb(249, 249, 249) 109px,rgb(234, 234, 234) 109px, rgb(234, 234, 234) 218px,rgb(242, 242, 242) 218px, rgb(242, 242, 242) 327px)',
                backgroundColor: '#F0F4FF',
                color: '#0F2942'
                }}
            >
                <div className="flex items-center mb-2 card-header">
                <CheckSquare className="mr-2" />
                <h2 className="text-lg font-semibold">Tasks</h2>
                </div>
                <p className="text-3xl font-bold">
                  <CountUp start={0} end={1850} duration={2.5} />
                </p>
            </div>


            {/* Third Card - Total Users */}
            <div 
                className="rounded-lg p-4 shadow-md card" 
                style={{
                // background: 'linear-gradient(135deg, #B76DFE, #D6A0FF)', // Brighter pastel lilac
                // backgroundImage: 'repeating-linear-gradient(45deg, rgb(249, 249, 249) 0px, rgb(249, 249, 249) 109px,rgb(234, 234, 234) 109px, rgb(234, 234, 234) 218px,rgb(242, 242, 242) 218px, rgb(242, 242, 242) 327px)',
                backgroundColor: '#F0F4FF',
                color: '#0F2942'
                }}
            >
                <div className="flex items-center mb-2 card-header">
                <UserCheck className="mr-2" />
                <h2 className="text-lg font-semibold">Total Users</h2>
                </div>
                <p className="text-3xl font-bold">
                  <CountUp start={0} end={85} duration={2.5} />
                </p>
            </div>
            </div>






            {/* <div className="grid grid-cols-3 gap-6 mb-6">
              

              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Users className="mr-2" /> 
                  <h2 className="text-lg font-semibold">Active Users</h2>
                </div>
                <p className="text-3xl font-bold">+2,350</p>
                <p className="text-green-500">+15.3% from last month</p>
              </div>

              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Activity className="mr-2" /> 
                  <h2 className="text-lg font-semibold">Growth Rate</h2>
                </div>
                <p className="text-3xl font-bold">12.5%</p>
                <p className="text-red-500">-2.1% from last month</p>
              </div>
            </div> */}

            {/* Charts Section */}
            {/* <div className="grid grid-cols-2 gap-6">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">Revenue Trend</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div> */}

              {/* User Table */}
              {/* <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">Recent Users</h2>
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">ID</th>
                      <th className="text-left p-2">Name</th>
                      <th className="text-left p-2">Email</th>
                      <th className="text-left p-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userTableData.map((user) => (
                      <tr key={user.id} className="border-b">
                        <td className="p-2">{user.id}</td>
                        <td className="p-2">{user.name}</td>
                        <td className="p-2">{user.email}</td>
                        <td className="p-2">
                          <span className={`px-2 py-1 rounded text-xs ${
                            user.status === 'Active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div> */}
          </div>
        )}

        {/* Other Tab Contents would be similar */}
        {activeTab === 'hub' && (
          <div className='mt-3'>
            <h1 className="text-2xl font-bold">HUB</h1>
            {/* Add users management content */}
            <MainTabs />
          </div>
        )}

        {activeTab === 'license' && (
          <div className='mt-3'>
            <h1 className="text-2xl font-bold">License</h1>
            {/* Add users management content */}
            <LicenseContent />
          </div>
        )}
      </div>

    </div>
  );
};

export default Dashboard;