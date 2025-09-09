import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
    return (
        <div className='flex flex-col border-r border-gray-200 h-screen bg-white'>
            <NavLink
                end
                to='/admin'
                className={({ isActive }) =>
                    `flex items-center gap-3 py-3.5 px-3 md:px-9 w-full md:min-w-64 cursor-pointer transition-all ${isActive ? 'bg-primary/10 border-r-4 border-primary font-medium text-primary' : 'text-gray-700'}`}>
                <img src={assets.home_icon} alt="dashboard" className='w-5' />
                <p className='hidden md:inline-block'>Dashboard</p>
            </NavLink>

            <NavLink
                to='/admin/addBlog'
                className={({ isActive }) =>
                    `flex items-center gap-3 py-3.5 px-3 md:px-9 w-full md:min-w-64 cursor-pointer transition-all ${isActive ? 'bg-primary/10 border-r-4 border-primary font-medium text-primary' : 'text-gray-700'}`}>
                <img src={assets.add_icon} alt="add blog" className='w-5' />
                <p className='hidden md:inline-block'>Add Blogs</p>
            </NavLink>

            <NavLink
                to='/admin/listBlog'
                className={({ isActive }) =>
                    `flex items-center gap-3 py-3.5 px-3 md:px-9 w-full md:min-w-64 cursor-pointer transition-all ${isActive ? 'bg-primary/10 border-r-4 border-primary font-medium text-primary' : 'text-gray-700'}`}>
                <img src={assets.list_icon} alt="list blog" className='w-5' />
                <p className='hidden md:inline-block'>List Blogs</p>
            </NavLink>

            <NavLink
                to='/admin/comments'
                className={({ isActive }) =>
                    `flex items-center gap-3 py-3.5 px-3 md:px-9 w-full md:min-w-64 cursor-pointer transition-all ${isActive ? 'bg-primary/10 border-r-4 border-primary font-medium text-primary' : 'text-gray-700'}`}>
                <img src={assets.comment_icon} alt="comments" className='w-5' />
                <p className='hidden md:inline-block'>Comments</p>
            </NavLink>
        </div>
    )
}

export default Sidebar
