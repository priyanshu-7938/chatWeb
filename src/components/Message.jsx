import React from "react";
import { useWeb3Context } from "../context";

export default function Message({msg}){
    const { address } = useWeb3Context();
    
    return <div className="p-1 font-amatic font-bold">
        {msg.sender == address?
        <div className="flex justify-end text-white">
            <div className="flex flex-col bg-gray-500 rounded-[30px] px-4">
                <p className="text-3xl">{msg.message}</p>
                <div className="flex justify-end">
                    <p className="flex text-[10px]">{parseInt(msg.timestamp._hex)}</p>
                </div>

            </div>
        </div>
        :
        <div className="flex text-white">
            <div className="flex flex-col bg-gray-800 rounded-[30px] px-4">
                <p className="text-3xl">{msg.message}</p>
                <div className="flex justify-end">
                    <p className="flex text-[10px]">{parseInt(msg.timestamp._hex)}</p>
                </div>

            </div>
        </div> }
    </div>;
}