import React, { createContext, useState } from 'react';
import genmain from '../config/config';

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, newWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + newWord);
    }, 75 * index);
  };

  const newChat =()=>{
    setLoading(false);
    setShowResult(false)
  }


  const onsent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input);
    setPrevPrompt((prev) => [...prev, input]);
    const response = await genmain(input);

    // if (prompt !== undefined) {
    //   console.log("Prompt provided:", prompt);
    //   setRecentPrompt(prompt);
    //   response = await genmain(prompt);
    // } else {
    //   console.log("Using input:", input);
    //   setRecentPrompt(input);
    //   setPrevPrompt((prev) => [...prev, input]);
    //   response = await genmain(input);
    // }


    let html = response;

    html = html.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");

    html = html.replace(/^### (.*$)/gim, "<h3>$1</h3>");
    html = html.replace(/^## (.*$)/gim, "<h2>$1</h2>");
    html = html.replace(/^# (.*$)/gim, "<h1>$1</h1>");

    if (html.match(/^\* /gm)) {
      html = html.replace(/^\* (.*$)/gim, "<li>$1</li>");
      html = "<ul>" + html + "</ul>";
    }

    html = html.replace(/\n\s*\n/g, "</p><p>");
    html = "<p>" + html + "</p>";
    html = html.replace(/\n/g, "<br>");

    html = html.replace(/\*/g, "");

    const newResponseArray = html.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ");
    }

    setLoading(false);
    setInput("");
  };

  const contextValue = {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompt,
    setPrevPrompt,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    onsent,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
