import React from "react";
import { templateBG0, metamask } from "../assets";

export default function DefaultCard({first,second}){
    return(
    <div className="flex gap-2 my-2 bg-[#434343] p-4 rounded-[10px]">
        <div className="w-full flex-col flex">
            <p className="text-6xl font-amatic font-bold my-2 ">{first}</p>
            <p className="text-4xl font-amatic font-bold">{second}</p>
        </div>
    </div>)
}