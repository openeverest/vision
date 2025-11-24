import React, { useState } from 'react'

export default function CurrentEverest() {
  const [helpAnchor, setHelpAnchor] = useState(null)
  const [userAnchor, setUserAnchor] = useState(null)
  const [createDbAnchor, setCreateDbAnchor] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  const handleHelpClick = (event) => {
    setHelpAnchor(event.currentTarget)
  }

  const handleUserClick = (event) => {
    setUserAnchor(event.currentTarget)
  }

  const handleCreateDbClick = (event) => {
    setCreateDbAnchor(event.currentTarget)
  }

  const handleCloseHelp = () => {
    setHelpAnchor(null)
  }

  const handleCloseUser = () => {
    setUserAnchor(null)
  }

  const handleCloseCreateDb = () => {
    setCreateDbAnchor(null)
  }

  const handleDarkModeToggle = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  return (
    <div className="database-management-container">
      <header className={darkMode ? 'dark-mode' : ''}>
        <h1>Database Management</h1>
        <nav>
          <button onClick={handleHelpClick}>Help</button>
          <button onClick={handleUserClick}>User</button>
          <button onClick={handleCreateDbClick}>Create Database</button>
          <button onClick={handleDarkModeToggle}>
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </nav>
      </header>

      <main className={darkMode ? 'dark-mode' : ''}>
        <section className="database-list">
          <h2>Databases</h2>
          <ul>
            <li>Database 1</li>
            <li>Database 2</li>
            <li>Database 3</li>
          </ul>
        </section>

        <section className="database-details">
          <h2>Database Details</h2>
          <p>Select a database to view its details.</p>
        </section>
      </main>

      <footer className={darkMode ? 'dark-mode' : ''}>
        <p>&copy; 2023 Database Management Inc.</p>
      </footer>

      {/* Help Popover */}
      <div
        className="popover"
        style={{ display: helpAnchor ? 'block' : 'none', top: helpAnchor ? helpAnchor.getBoundingClientRect().bottom : 0 }}
      >
        <div className="popover-content">
          <h3>Help Information</h3>
          <p>This is the help section. You can find information about how to use the database management tool.</p>
          <button onClick={handleCloseHelp}>Close</button>
        </div>
      </div>

      {/* User Popover */}
      <div
        className="popover"
        style={{ display: userAnchor ? 'block' : 'none', top: userAnchor ? userAnchor.getBoundingClientRect().bottom : 0 }}
      >
        <div className="popover-content">
          <h3>User Settings</h3>
          <p>Manage your user profile and preferences here.</p>
          <button onClick={handleCloseUser}>Close</button>
        </div>
      </div>

      {/* Create Database Popover */}
      <div
        className="popover"
        style={{ display: createDbAnchor ? 'block' : 'none', top: createDbAnchor ? createDbAnchor.getBoundingClientRect().bottom : 0 }}
      >
        <div className="popover-content">
          <h3>Create New Database</h3>
          <form>
            <label htmlFor="dbName">Database Name:</label>
            <input type="text" id="dbName" name="dbName" />
            <button type="submit">Create</button>
          </form>
          <button onClick={handleCloseCreateDb}>Close</button>
        </div>
      </div>
    </div>
  )
}