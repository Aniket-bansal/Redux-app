import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{
      display: 'flex',
      gap:'20px',
      padding:'30px',
      fontSize:'30px'

    }}>
      <Link to="/">CounterApp</Link>
      <Link to="/todo">TodoApp</Link>
    </div>
  )
}

export default Navbar