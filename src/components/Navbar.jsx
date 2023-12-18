import React ,{ useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Connect from "../utils/Connect";
import { chat, logo, account, contacts, explore } from "../assets"
import { useWeb3Context } from "../context";

const Navbar = ()=>{

    const { active, setActive  } = useWeb3Context();
    const menuItems = [["/Account",account],["/Chat",chat],["/Explore",explore],["/Contacts",contacts]];
    return (
        <div className="flex justify-between p-1">
            <div className="flex items-center justify-center gap-2">
                <Link to="/" onClick={()=>{setActive(-1)}}>
                    <img src={logo} alt="" />
                </Link>
                <p className="text-5xl font-bold font-amatic">Chat Web</p>
            </div>
            <div className="flex gap-9 items-center justify-center">
                {
                    menuItems.map((item,index)=>(
                        <Link to={item[0]} key={index+1} onClick={()=>{
                            setActive(index);
                        }}>
                            <img src={item[1]} className="w-[52px] mx-auto" alt=""/>
                            <div className={`w-[60px] h-[4px] mt-1 rounded ${(index == active)?`bg-black`:`bg-gray-500`}`}></div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar;