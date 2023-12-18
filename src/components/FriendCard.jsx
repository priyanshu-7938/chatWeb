import React,{ useEffect } from "react";
import { useWeb3Context } from "../context";
import { getURL } from "../utils";

export default function FriendCard({elem}){
    const { allUsers, setCurrentAddress, setCurrentUserName } = useWeb3Context();
    // retriving the profile data...
    let profile="https://avataaars.io";
    if(allUsers){
        allUsers.forEach((item)=>{
            if(item[1]==elem[0]){
                profile = getURL(item[2]);
            }
        });
    }
    function handelClick(){
        setCurrentAddress(elem[0]);
        setCurrentUserName(elem[1]);
    }
    useEffect(()=>{},[allUsers]);
    return <>
        <div onClick={handelClick} className="bg-gray-700 text-black text-2xl font-amatic flex p-1 gap-1 m-2  rounded">
            <div className="flex  w-[50px]">
                <img src={profile} className="filter grayscale" alt="yo" />
            </div>
            <div className="flex flex-col gap-1">
                <p className="font-bold">{elem[1]}</p>
                <p className="text-xl font-bold">{elem[0].slice(0, 10)}...</p>

            </div>

        </div>
    </>
}