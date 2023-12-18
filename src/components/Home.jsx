import React,{ useState, useEffect } from "react";
import { useWeb3Context } from "../context";
import Register from "./Register";
import Connect from "../utils/Connect";
import { templateBG0 } from "../assets"; 
import { getURL } from "../utils";
import { 
    topTypeOptions, 
    accessoriesTypeOptions, 
    facialHairTypeOptions, 
    clotheTypeOptions, 
    eyeTypeOptions, 
    eyebrowTypeOptions, 
    mouthTypeOptions, 
    skinColorOptions, 
    hairColorTypes, 
    }    from "../utils";
import { render } from "react-dom";
import Loader from "../utils/Loader";

const Home = ()=>{
    const { userName, address, setloading, userProfile, isLoading } = useWeb3Context();
    const [ storeName, setStoreName ] = useState("");
    function handelChange(e){
        setStoreName(e.target.value);
    }
    useEffect(()=>{
        if(userName!=""){
            setloading(false);
        }
        },[userName,isLoading]);
    return (
        <>
        {isLoading && <Loader/>}
        <div className="items-center">
            <div className="mx-2 my-1 flex gap-3 items-center">
                { address? <>
                    <p className="font-amatic font-bold text-5xl">Address</p>
                    <p className="font-amatic font-bold text-5xl">{address}</p>
                    </>:
                    <Connect/>
                }
                
            </div>
            { address &&//askiing for name if the address is connected ... 
                <div className="mx-2 my-1 flex gap-3 items-center">
                    <p className="font-amatic font-bold text-5xl">Name</p>
                    { userName== ""?
                        <input type="text" value={storeName} placeholder="Name" onChange={handelChange} className="p-2 text-5xl font-amatic font-bold rounded focus:outline-none"/>
                        :
                        <p className="font-amatic font-bold text-5xl">{userName}</p>
                    }
                </div>
            }
        </div>
                
            {userName == "" &&  address!= undefined && (
                <>
                    <div className="mt-3">
                        <Register name = {storeName}/>
                    </div>
                </>
            )}
            {address != undefined && userName!="" && 
                <>
                    <div className="h-[400px] w-[400px] bg-black relative ml-[30px] mt-[30px]">
                        <img src={templateBG0} alt="" className="absolute w-[100%]"/>
                        <>
                            <img src={getURL(userProfile)} className="filter grayscale h-[100%] mx-auto" alt="" />
                        </>
                    </div>{ !userName &&
                        <p className="font-bold font-amatictext-3xl text-gray-600">If you have an accout and does't show up here jus refresh the page please....</p>
                    }
                </>
            }
        </>
    )
}
export default Home;