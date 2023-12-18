import React from "react";
import { metamask } from "../assets";
import { useWeb3Context } from "../context";

export default function Connect(){
    const { connect } = useWeb3Context();
    return (<>
        <div className="h-[52px] flex gap-2 items-center">
            <p className="text-4xl font-amatic font-bold pb-2"><span className="text-5xl">!!!</span> You seem Dis-Connected, coonnect your wallet</p>
            <button className="text-3xl px-3 py-2 bg-[#5e5e5e] rounded-[30px] items-center font-amatic font-bold flex gap-2" onClick={()=>{connect()}}>CONNECT
                <img src={metamask} className="h-10" alt="" />
            </button>
        </div>
    </>)
}
