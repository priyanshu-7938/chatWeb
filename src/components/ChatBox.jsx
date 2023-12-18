import React,{ useEffect, useState } from "react";
import { useWeb3Context } from "../context";
import { useNavigate } from "react-router-dom";
import { getURL } from "../utils";
import Message from "./Message";
import { emoji, send } from "../assets";

export default function ChatBox(){
    const { currentAddress, currentUserName, allUsers, readMessages, friendMsg, sendMessage } = useWeb3Context();
    const [ message, setMessage ] = useState(""); 
    const [ localLoader, setLocalLoader ] = useState(false);
    const navigate = useNavigate();
    function handelInput(e){
        setMessage(e.target.value);
    }
    //retriving the messages
    async function fetchTheMessagesAsync(){
        //set an loader on the chatbox---
        setLocalLoader(true);
        readMessages(setLocalLoader);
    }
    function URLGETTER(){
        if(currentAddress=="" || currentUserName==""){
            return "";
        }    
        else{
            for(let i in allUsers){
                if(allUsers[i][1] == currentAddress){
                    return getURL(allUsers[i][2]);
                }
            }
        }
    }
    function callBackFxn(){
        setLocalLoader(false);
        fetchTheMessagesAsync();
    }
    useEffect(()=>{
        if(currentAddress!=""){
            fetchTheMessagesAsync();
        }
    },[currentAddress,currentUserName]);

    return <div className={`w-full p-4 flex flex-col ${currentUserName?'':'pointer-events-none bg-gray-300 opacity-50'}`}>
        <div className="flex h-[8%] bg-white rounded-t-[20px] items-center pt-2">
            <img src={URLGETTER()} className="mx-2 h-[100%] filter grayscale" alt="" />
            <p className="font-amatic text-3xl font-bold">{currentUserName}</p>
        </div>
        <div className="bg-[#838383] h-full max-h-[82%] overflow-y-auto justify-end">
            {friendMsg && friendMsg.map((msg,index)=>{return <Message key={index} msg={msg}/>})} 
        </div>
        <div className="h-[9%] rounded-b-[20px] bg-[#838383] font-amatic flex p-2 items-center">
    
            <input type="text" className="w-full h-[90%] rounded-[20px] px-3 font-3xl font-nova mx-2" placeholder="Message" onChange={handelInput}/>
            <button onClick={()=>{
                setLocalLoader(true);
                setMessage("");
                sendMessage(message,callBackFxn)
                    }}><img src={send} alt="" className={`w-[40px] aspect-w-1 aspect-h-1 ${currentUserName? "cursor-not-allowed pointer-events-none":""}`}/></button>
        </div>
    </div>
}