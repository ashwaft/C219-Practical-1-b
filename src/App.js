import "./App.css";

// Main App Component
function App() {
  const tasks = [
    {
      name: "Design Homepage",
      description: "Create the initial homepage design",
      priority: "Low",
    },
    {
      name: "Set Up Database",
      description: "Configure the database for user data",
      priority: "Medium",
    },
    {
      name: "Build API",
      description: "Develop the API endpoints",
      priority: "High",
    },
  ];

  // Determine if the project is active based on the current time
  // const currentHour = new Date().getHours();
  // const isActive = currentHour >= 8 && currentHour < 17;
  const currentHourUTC = new Date().getUTCHours();
  const isActive = currentHourUTC >= 0 && currentHourUTC < 9; // 8 AM to 5 PM SGT in UTC

  return (
    <div className="app">
      <h1>Project Task Manager</h1>
      {/* Task List */}
      <div className="task-list"></div>
    </div>
  );
}

export default App;
