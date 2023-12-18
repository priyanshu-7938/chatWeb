import React,{ useState, useEffect } from "react";
import { templateBG0 } from "../assets";
import Field from "./Field";
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
import { useWeb3Context } from "../context";

export default function Register({name}){
    const { accountCreation } = useWeb3Context();
    const [ URL, setURL ] = useState("");
    //states for the icon baby...
    const [ top, setTop ] = useState(""); 
    const [ accessories, setAccessories ] = useState(""); 
    const [ hair, setHair ] = useState("");
    const [ facialHair, setFacialHair ] = useState("");
    const [ clothes, setClothes ] = useState("");   
    const [ eyes, setEyes ] = useState(""); 
    const [ eyebrow, setEyebrow ] = useState(""); 
    const [ mouth, setMouth ] = useState(""); 
    const [ skin, setSkin ] = useState(""); 

    useEffect(()=>{
        if(!(accessories || clothes ||eyes ||eyebrow ||hair||facialHair||mouth||skin||top)){
            return;
        }
        setURL(
            `https://avataaars.io/?accessoriesType=${
                accessories
            }&clotheType=${
                clothes
            }&eyeType=${
                eyes
            }&eyebrowType=${
                eyebrow
            }&hairColor=${
                hair
            }&facialHairType=${
                facialHair
            }&mouthType=${
                mouth
            }&skinColor=${
                skin
            }&topType=${
                top
            }`
        );
    },[top,accessories,hair,facialHair,clothes,eyes,eyebrow,mouth,skin]);

    function defaultURL(){
        return "https://avataaars.io";
    } 
    function proceedToCreation(){
        if(!(accessories || clothes ||eyes ||eyebrow ||hair||facialHair||mouth||skin||top)){
            alert("selecta ll teh inputs...");
        }
        if(name ==""){
            alert("enter an name");
        }
        let arry = new Array();

        arry.push(topTypeOptions.indexOf(top));
        arry.push(accessoriesTypeOptions.indexOf(accessories));
        arry.push(facialHairTypeOptions.indexOf(facialHair)); 
        arry.push(clotheTypeOptions.indexOf(clothes));
        arry.push(eyeTypeOptions.indexOf(eyes));
        arry.push(eyebrowTypeOptions.indexOf(eyebrow)); 
        arry.push(mouthTypeOptions.indexOf(mouth));
        arry.push(skinColorOptions.indexOf(skin));
        arry.push(hairColorTypes.indexOf(hair));
        // creating an account...
        accountCreation(name,arry);
    }
    return(
        <div className="flex gap-1 ">
            <div className="h-[600px] w-[600px] bg-black relative">
                <img src={templateBG0} alt="" className="absolute w-[100%]"/>
                { URL=="" ? 
                    <>
                        <img src={defaultURL()} className="filter grayscale h-[100%] mx-auto" alt="" />
                    </>:
                    <>
                        <img src={URL} className="filter grayscale h-[100%] mx-auto" alt="" />
                    </>
                }
            </div>
            <div className="h-[50%] w-[50%] pl-[20px]">
                <Field text={"Tops"} setFunction={setTop} values={top} dataSet={topTypeOptions} />
                <Field text={"Accessories"} setFunction={setAccessories} values={accessories} dataSet={accessoriesTypeOptions} />
                <Field text={"Hair"} setFunction={setHair} values={hair} dataSet={hairColorTypes} />
                <Field text={"Facial Hair"} setFunction={setFacialHair} values={facialHair} dataSet={facialHairTypeOptions} />
                <Field text={"Clothes"} setFunction={setClothes} values={clothes} dataSet={clotheTypeOptions} />
                <Field text={"Eyes"} setFunction={setEyes} values={eyes} dataSet={eyeTypeOptions} />
                <Field text={"Eyebrow"} setFunction={setEyebrow} values={eyebrow} dataSet={eyebrowTypeOptions} />
                <Field text={"Mouth"} setFunction={setMouth} values={mouth} dataSet={mouthTypeOptions} />
                <Field text={"Skin Tone"} setFunction={setSkin} values={skin} dataSet={skinColorOptions} />
                <button className="w-[370px] h-[60px] rounded bg-gray-800 text-white text-5xl font-amatic items-center mt-4" onClick={()=>{proceedToCreation()}}>Create Account</button>
            </div>
            
        </div>
    )
}