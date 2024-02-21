import React from 'react'
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsArchiveFill } from 'react-icons/bs'

function Home() {
    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>Dashboard</h3>
            </div>
            <div className='main-cards'>
                <div className="card">
                    <div className='card-inner'>
                        <h3>No</h3>
                        <BsFillArchiveFill className='card_icon'></BsFillArchiveFill>
                    </div>
                </div>
                <h1>1</h1>
                <div className="card">
                    <div className='card-inner'>
                        <h3>Ten</h3>
                        <BsFillArchiveFill className='card_icon'></BsFillArchiveFill>
                    </div>
                </div>
                <h1>1</h1>
                <div className="card">
                    <div className='card-inner'>
                        <h3>Role</h3>
                        <BsFillArchiveFill className='card_icon'></BsFillArchiveFill>
                    </div>
                </div>
                <h1>1</h1>
                <div className="card">
                    <div className='card-inner'>
                        <h3>Sua</h3>
                        <BsFillArchiveFill className='card_icon'></BsFillArchiveFill>
                    </div>
                </div>
                <h1>1</h1>
                <div className="card">
                    <div className='card-inner'>
                        <h3>Xoa</h3>
                        <BsFillArchiveFill className='card_icon'></BsFillArchiveFill>
                    </div>
                </div>
                <h1>1</h1>
            </div>
        </main>
    )
  }
  
  export default Home
  
