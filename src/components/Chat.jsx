import React from "react";
import ChatBox from "./ChatBox";
import { useWeb3Context } from "../context";
import FriendCard from "./FriendCard";

export default function Chat(){
    const { friendLists } = useWeb3Context();
    return (
        <div className="flex h-[80vh]">
            <div className="w-[40%] bg-[#3e3e3e] rounded-[20px] p-3">
                <p className="text-white font-amatic font-bold text-3xl">Contacts</p>
                <div className="flex flex-col gap-2">
                    {friendLists && friendLists.map((elem,index)=>{
                        return (<FriendCard key={index} elem={elem}/>)                       
                    })}
                </div>
            </div>
            <ChatBox/>
        </div>
    )
}