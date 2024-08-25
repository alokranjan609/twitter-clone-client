'use client';
import React, { useCallback } from "react";
import { FaTwitter } from "react-icons/fa";
import { BiHomeCircle } from "react-icons/bi";
import { BiHash } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";
import { BsEnvelope } from "react-icons/bs";
import { PiBookmarkSimpleLight } from "react-icons/pi"
import { CiUser } from "react-icons/ci";
import FeedCard from "../components/FeedCard/FeedCard"
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { IoIosMore } from "react-icons/io";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { graphql } from "@/gql";
import { GraphQLClient } from "graphql-request";
import { graphqlClient } from "@/clients/api";
import { verifyUserGoogleToekn } from "@/graphql/query/user";
import { log } from "console";



interface TwitterSideButton{
  title:string,
  icon:React.ReactNode
}

const sideBarButtonMenu:TwitterSideButton[]=
[
  {
    title:"Home",
    icon:<BiHomeCircle color="white" />
  },
  {
    title:"Explore",
    icon:<BiHash color="white" />
  },
  {
    title:"Notification",
    icon:<GrNotification color="white" />
  },
  {
    title:"Messages",
    icon:<BsEnvelope color="white" />
  },
  {
    title:"Bookmarks",
    icon:<PiBookmarkSimpleLight color="white" />
  },
  {
    title:"Profile",
    icon:<CiUser color="white"/>
  },
  
    {
      title:"Twitter Blue",
      icon:<FaMoneyBill1Wave color="white" /> 
    },
    {
      title:"More Options",
      icon:<IoIosMore color="white" />
    }
  
  
]
export default function Home() {

const handleLoginWithGoogle=useCallback(async (cred:CredentialResponse)=>{
  const googleToken=cred.credential
  if(!googleToken) return toast.error(`Google Token Not found!!`)
    const {verifyGoogleToken}=await graphqlClient.request(verifyUserGoogleToekn,{token:googleToken})
  toast.success('verified success!!')
  console.log(verifyGoogleToken);

  if(verifyGoogleToken) window.localStorage.setItem('__twitter_token__',verifyGoogleToken)
  

},[])

  return (
   <div>
    <div className="grid grid-cols-12 h-screen w-screen px-56">
      <div className="col-span-3  pt-5  ">
        <div  className="text-2xl h-fit w-fit hover:bg-gray-600 rounded-full pl-7 cursor-pointer transition-all ">
      <FaTwitter  color="white" />
      </div>
      <div className="mt-4 text-1xl font-semibold px-4">
        <ul>
        {sideBarButtonMenu.map(i=><li className="flex justify-start items-center gap-4 hover:bg-gray-600 rounded-full px-5 py-2 w-fit cursor-pointer mt-2" key={i.title}><span>{i.icon}</span><span className="text-white">{i.title}</span> 
        </li>)}
        </ul>
        <button className="text-white bg-[#1d9bf0] p-4 rounded-full px-3 w-full mt-4">Tweet</button>
      </div>
      </div>
      <div className="col-span-5 border-r-[1px] border-l-[1px] h-screen overflow-scroll border-gray-600">
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>
      <div className="col-span-4 p-5">
      <div className=" p-5 bg-slate-500 rounded-lg">
        <h1 className="my-2 text-2xl" color="white"  >New To Twitter?</h1>
       <GoogleLogin onSuccess={handleLoginWithGoogle}/>
       </div>
      </div>
      
     
       
    </div>
   </div>
  );
}
