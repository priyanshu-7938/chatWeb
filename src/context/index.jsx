import React,{ useContext, createContext, useState, useEffect} from "react";
import { useAddress, useContract, useMetamask } from "@thirdweb-dev/react";
import { ABI } from "../utils";
import { useNavigate  } from 'react-router-dom';
const StateContext = createContext();

export function Web3ContextProvider({ children }) {
  //I dont think we would be needing this for now...
    const address = useAddress();
    const connect = useMetamask();
  //so continue...
    const [ active, setActive ] = useState(-1);
    const [ account, setAccount ] = useState("");//added
    const [ userName, setUserName ] = useState("");//added
    const [ userProfile, setUserProfile ] = useState([]);
    const [ friendLists,setFriendLists ] = useState();
    const [ friendMsg,setFriendMsg ] = useState();
    const [ allUsers,setAllUsers ] = useState();
    const [ isLoading,setloading ] = useState(true);
    const [ error,setError ] = useState("");
    const [ currentUserName, setCurrentUserName ] = useState("");
    const [ currentAddress, setCurrentAddress ] = useState("");  
    const { contract, isLoad } = useContract("0xfb41BD298351d156B0605cFDB6ec620806C2fEA6",ABI);
    const navigate = useNavigate ();  
    useEffect(()=>{connect();},[connect]);

    useEffect(() => {
      const fetchData = async () => {
        try{
          if(contract!=undefined && address!= undefined){
            const [ UserName, UserProfile ]= await contract.call("getUserName", [address]);
            setUserName(UserName);
            setUserProfile(UserProfile);
            const FriendList = await contract.call("getMyFriendList", [address]);
            setFriendLists(FriendList);
            const AllUsers = await contract.call("fetchAllUsers", [])
            setAllUsers(AllUsers);
          }
        }
        catch(err){
          console.log(err);
          setError("Try Connecting your Account.");
        }
      };
      fetchData();
    }, [address]);

    const readMessages = async(setLoaderFunction)=>{
      try{
        const messages = await contract.call("readMessages", [currentAddress,address]);
        setFriendMsg(messages);
        setLoaderFunction(false);
      }
      catch(err){
        console.log(err);
        setError("Error with message Retriving.");
      }

    }
    const accountCreation = async(name,imageData)=>{
      try{
        if(!(name || imageData))return setError("The Name cant be empty,or Profile not choosen.");
        setloading(true);
        const status = await contract.call("createAccount", [name, imageData]);
        setloading(false);
        navigate("/");
        window.location.reload();
      }catch(err){
        setError("Error with account creation");
        console.log(err);
        setloading(false);
      }
    }

    const sendMessage = async(messageStr,loadercallback)=>{
      try{
        if(currentAddress=="" || messageStr=="") return setError("The message or friend address can't be emppty.");
        const data = await contract.call("sendMessage", [currentAddress, messageStr]);
        loadercallback(false);
      }
      catch(err){
        console.log(err);
        setError("Error occured while sending the message.");
      }
    }

    const readUser = async(_userAddress)=>{
      try{
        const _userName = await contract.call("getUserName", [_userAddress]);
        setCurrentUserName(_userName);
        setCurrentAddress(_userAddress);
      }
      catch(err){
        console.log(err);
        setError(err);
      }
    }

    const addFriend = async(_Address,_frndName)=>{
      try{
        setloading(true);
        const data = await contract.call("addFriend", [_Address, _frndName]);
        setloading(false);
      }
      catch(errr){
        console.log(err);
        setloading(false);
        setError("Error with Adding Frind.");
      }
    }

    return (
      <StateContext.Provider value={{
            contract,
            userName,
            friendLists,
            friendMsg,
            allUsers,
            currentUserName,setCurrentUserName,
            currentAddress,setCurrentAddress,
            userProfile,
            address, connect,
            isLoading, setloading,
            error, setError,
            account, setAccount,
            active, setActive,
            
            readMessages,
            readUser,
            addFriend,
            sendMessage,
            accountCreation,
        }}>
          {children}
      </StateContext.Provider>
    );
}

export const useWeb3Context = ()=>{
    return useContext(StateContext);
}