import React from "react";
import { getURL } from "../utils";
import { templateBG0, metamask } from "../assets";
import { useWeb3Context } from "../context";

export default function Card({ name, address, profile }){
    const { addFriend } = useWeb3Context();
    
    return(<div className="flex gap-2 my-2 bg-[#434343] p-4 rounded-[10px]">
        <div className="relative w-[30%] aspect-w-1 aspect-h-1 mx-1">
            <img src={templateBG0} alt="" className="w-full h-full object-cover absolute top-0 left-0" />
            <img src={getURL(profile)} alt="" className="w-full h-full object-cover filter grayscale" />
        </div>
        <div className="w-full flex flex-col justify-between">
            <div>
                <p className="text-6xl font-amatic font-bold my-2 ">{name}</p>
                <p className="text-4xl font-amatic font-bold">{address}</p>
            </div>
            <div className="flex justify-end">
                <button className=" text-4xl px-4 py-1 bg-[#5e5e5e] rounded-[30px] items-center font-amatic font-bold flex gap-2 focus:bg-[#4d4d4d]" onClick={()=>{addFriend(address,name)}}>CONNECT
                    <img src={metamask} className="h-8" alt="" />
                </button>
            </div>
        </div>

    </div>)
}