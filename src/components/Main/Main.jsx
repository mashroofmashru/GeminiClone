import React, { useState, useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from "../../context/context";
function Main() {
    const {
        input,
        setInput,
        onsent,
        resultData,
        loading,
        showResult,
        recentPrompt
    } = useContext(Context);

    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="userIcon" />
            </div>
            <div className="main-container">
                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span>Hello, Dev.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful place to see on upcoming road trip</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Briefly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Brainstorming team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Improve the readability of the following code</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                    : <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="userIcon" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="geminiIcon" />
                            {loading
                                &&
                                <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            }
                            <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                        </div>
                    </div>
                }
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" name="search" id="search" placeholder='Enetr a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="galleryIcon" />
                            <img src={assets.mic_icon} alt="micIcon" />
                            <img onClick={onsent} src={assets.send_icon} alt="sendIcon" />
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inacurate info, includeing avout people, so double-check its
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main
