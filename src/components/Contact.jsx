import React from "react";
import { useWeb3Context } from "../context";
import ContactCard from "./ContactCard";
import DefaultCard from "./DefaultCard";
import Contact404 from "./Contact404";
import Loader from "../utils/Loader";

export default function Contact(){
    const { friendLists, isLoading } = useWeb3Context(); 
    return (
        <div className="m-4 w-[70%] mx-auto">
            {isLoading && <Loader/>}
            <p className="font-amatic text-5xl font-bold">Contacts</p>
            <div className="flex flex-col">
                { !friendLists && <Contact404/>}
                { friendLists && <>{ friendLists.map((el,i)=>(<ContactCard key={i} data={el}/>))}</> }
                { friendLists && friendLists.length==0 && <DefaultCard first={"No contacts Yet!!"} second={"Users to which you connect can be found here."}/>  }
            </div>
        </div>
    )
}