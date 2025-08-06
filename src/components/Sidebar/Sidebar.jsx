import React, { useContext, useState } from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from "../../context/context";
function Sidebar() {
  const [extended, setExtended] = useState(false);
  const {onsent, prevPrompt, setRecentPrompt,setInput,newChat} = useContext(Context);

  const loadPrompt= async (prompt)=>{
    console.log(prompt)
    setInput(prompt)
    // setRecentPrompt(prompt);
    // await onsent(prompt);
  }

  return (
    <div className='sidebar'>
      <div className="top">
        <img src={assets.menu_icon} alt="" className="menu" onClick={() => setExtended(prev => !prev)} />
        <div onClick={newChat} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended && <p>New Chat</p>}
        </div>
        {extended ?
          <div className='recent'>
            <p className="recent-title">Recent</p>
            {prevPrompt.map((item, index) => {
              return (
                <div key={index} onClick={()=>loadPrompt(item)} className='recent-entry'>
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0,18)} ...</p>
                </div>
              )
            })}
          </div>
          : null
        }
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
