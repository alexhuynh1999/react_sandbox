import React from 'react'
import './App.css'

const App = () => {
    return (
        <div className="container">
            <aside className="sidebar">
                <nav className="menu">
                    <a href="#/" className='menu-item'>Budget Name</a>
                    <a href="#/" className='menu-item'>Budget</a>
                    <a href="#/" className='menu-item'>Reports</a>
                    <a href="#/" className='menu-item'>All Accounts</a>
                    <a href="#/" className='menu-item'>Budget</a>
                    <a href="#/" className='menu-item'>Add Account</a>
                </nav>
            </aside>

            <div className='content'>
                <h1>Hello Alex!</h1>
                <p>This is a sentence.</p>
            </div>
        </div>
    )
}

export default App