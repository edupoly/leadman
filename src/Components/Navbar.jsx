import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-sm bg-danger navbar-dark">
            <div class="container-fluid">
                <ul class="navbar-nav">
                    <li className='nav-item'>
                        <h2 className='text-light'>Dashboard</h2>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/">Search Lead</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to='/addLead'>Add Lead</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to='/showLeads'>Show Leads</Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar