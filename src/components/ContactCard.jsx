import React from "react";
import { useWeb3Context } from "../context";
import { metamask, send } from "../assets";
import { getURL } from "../utils";
import { useNavigate } from "react-router-dom";

export default function ContactCard({data}){
    const navigator = useNavigate();
    const { allUsers, setCurrentUserName, setCurrentAddress} = useWeb3Context();
    function getterURL(){
        //first get the data...
        for(let i in allUsers){
            if(allUsers[i][1] == data[0]){
                return getURL(allUsers[i][2]);
            }
        }
    }
    function handelChat(){
        setCurrentAddress(data[0]);
        setCurrentUserName(data[1]);
        navigator("/Chat");
    }
    return(<div className="rounded-[10px] p-2 bg-[#3e3e3e] flex gap-3 my-2">
        <div className=""><img src={getterURL()} alt="" className="h-[80px] rounded-[100%] fiileter grayscale" /></div>
        <div className="flex gap-2 justify-between w-full items-center">
            <div className="font-amatic text-4xl font-bold flex flex-col">
                <p>{data[1]}</p>
                <p className="text-2xl">{data[0]}</p>
            </div>
            <div className="flex pt-auto items-center"><button onClick={handelChat}><img className="w-10 transform rotate-[-40deg] m-4" src={send} alt="" /></button></div>
        </div>
    </div>)
}