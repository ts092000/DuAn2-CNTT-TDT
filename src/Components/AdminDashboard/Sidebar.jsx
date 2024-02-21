import React from 'react'
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsArchiveFill } from 'react-icons/bs'

function Sidebar() {
  return (
    <aside id='sidebar'>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3 className='icon_header'></BsCart3>Admin
            </div>
            <span className='icon close_icon'>X</span>
        </div>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'></BsGrid1X2Fill>Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsArchiveFill className='icon'></BsArchiveFill>Products
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'></BsPeopleFill>Categories
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'></BsListCheck>Teachers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'></BsFillGearFill>Students
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar
