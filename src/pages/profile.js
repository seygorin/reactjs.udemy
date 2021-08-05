import React, { useState, useContext, createContext } from "react"


const Profile = () => {
    const [mode, setMode] = useState('light')

    const handleClick = () => {
      setMode(mode === 'light' ? 'dark' : 'light')
    }
  
    const ThemeContext = createContext(mode)
  
    const theme = useContext(ThemeContext)
  
    return (
      <div
        style={{
          background: theme === 'light' ? '#eee' : '#222',
          color: theme === 'light' ? '#222' : '#eee',
          display: 'grid',
          placeItems: 'center',
          minWidth: '320px',
          minHeight: '320px',
          borderRadius: '4px'
        }}
      >
        <p>Выбранная тема: {theme}.</p>
        <button onClick={handleClick}>Поменять тему оформления</button>
      </div>
    )
  }


export default Profile