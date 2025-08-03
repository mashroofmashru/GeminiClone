// import { createContext,useState} from "react";
// import genmain from "../config/config";

// export const Context = createContext();

// const ContextProvider = (prompt) => {
//     const [input,setInput] = useState("");
//     const [recentPrompt,setRecentPrompt] = useState("");
//     const [prevPrompt,setPrevPrompt] = useState([]);
//     const [showResult,setShowResult] = useState(false);
//     const [loading,setLoading] = useState(false);
//     const [resultData,setResultData] = useState("");

//     const onsent = async (prompt) =>{
//         await genmain(prompt);
//     }

//     const contextValue = {
//         prevPrompt,
//         setPrevPrompt,
//         onsent,
//         setRecentPrompt,
//         recentPrompt,
//         showResult,
//         loading,
//         resultData,
//         input,
//         setInput,
//     }

//     return(
//         <Context.Provider value={contextValue}>
//             {props.children}
//         </Context.Provider>
//     )
// }

// export default ContextProvider