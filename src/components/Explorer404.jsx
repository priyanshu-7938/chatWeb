import React from "react";
import { metamask } from "../assets";
import { useNavigate } from "react-router-dom";

export default function Explorer404(){
    const navigate = useNavigate();
    return (<div>
        <button className="text-3xl px-3 py-2 bg-[#5e5e5e] rounded-[30px] items-center font-amatic font-bold flex gap-2" onClick={()=>{navigate("/")}}>CONNECT
                <img src={metamask} className="h-10" alt="" />
        </button>
    </div>);
}