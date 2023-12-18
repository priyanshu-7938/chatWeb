import React from "react";
import { useNavigate } from "react-router-dom";
import { metamask } from "../assets";

export default function Contect404(){
    const navigate = useNavigate();
    return <div className="flex gap-3">
        <p className="font-bold font-amatic text-3xl py-2">Connect to Metamask....</p>
        <button className="text-3xl px-3 py-2 bg-[#5e5e5e] rounded-[30px] items-center font-amatic font-bold flex gap-2" onClick={()=>{navigate("/")}}>CONNECT
            <img src={metamask} className="h-10" alt="" />
        </button>
    </div>;
}