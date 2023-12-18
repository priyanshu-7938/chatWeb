import React,{useEffect} from "react";
import { useWeb3Context } from "../context";
import Explorer404 from "./Explorer404";
import Card from "./Card";
import DefaultCard from "./DefaultCard";
import Loader from "../utils/Loader";
export default function Explore(){
    const { allUsers, address, contract, isLoading,friendLists }  = useWeb3Context();
    function isAFriend(_add){
        for(let i in friendLists){
            if(friendLists[i][0]==_add)return true;
        }
        return false;
    }
    const potentialUser = (allUsers)?allUsers.filter((elem)=>{
        if(elem[1] == address)return false;
        if(isAFriend(elem[1]))return false;
        return true;
    }):new Array();
    return(
        <div className="w-[70%] m-4 mx-auto">
            {isLoading && <Loader/>}
            <p className="font-amatic text-5xl font-bold">Explore Users</p>
            { allUsers? 
                potentialUser.map((elem,index)=>{
                    return <Card key={index} name={elem[0]} address={elem[1]} profile={elem[2]}/>
                }):
                <Explorer404/>
            }
            {   potentialUser.length==0 && <DefaultCard first={"No New Users Yet!!"} second={"Come around later to explore new users."}/> }
        </div>
    )
}