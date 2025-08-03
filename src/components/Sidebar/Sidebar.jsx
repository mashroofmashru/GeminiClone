import React, { useState } from 'react'
import './sidebar.css'
import {assets} from '../../assets/assets'
function Sidebar() {
    const [extended,setExtended]=useState(false);
  return (
    <div className='sidebar'>
      <div className="top">
        <img src={assets.menu_icon} alt="" className="menu" onClick={()=>setExtended(prev=>!prev)}/>
        <div className="new-chat">
            <img src={assets.plus_icon} alt="" />
            {extended&&<p>New Chat</p>}
        </div>
        {extended?
        <div className='recent'>
            <p className="recent-title">Recent</p>
            <div className='recent-entry'>
                <img src={assets.message_icon} alt="" />
                <p>what is react ...</p>
            </div>
        </div>
        :null
        }
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" />
            {extended&&<p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
            {extended&&<p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            {extended&&<p>Settings</p>}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
