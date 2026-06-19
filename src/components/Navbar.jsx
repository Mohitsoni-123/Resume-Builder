import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const user = {name : 'John Doe'}
    const navigate = useNavigate()
    const logoutUser = ()=>{
        navigate('/')
    }
  return (
    <div className='shadow bg-white'>
      <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all'>
        <Link to='/'>
            <p className="text-3xl font-bold cursor-pointer">ResumeAI</p>
        </Link>
        <div className='flex items-center gap-5 text-sm'>
            <p className='max-sm:hidden'>Hi, {user?.name}</p>
            <button onClick={logoutUser} className='px-6 py-2 bg-indigo-600 hover:bg-indigo-700 transition text-white rounded-md'>Logout</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
