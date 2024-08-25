import React from 'react'
import Image from 'next/image'
import { BiMessageRoundedDots } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { RiUpload2Fill } from "react-icons/ri";

const FeedCard:React.FC=()=>{
    return <div className='border border-l-0 border-r-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 cursor-pointer transition-all' >
        <div className='grid grid-cols-12 gap-2'>
        <div className='col-span-1' >
            <Image className='rounded-2xl' src="https://avatars.githubusercontent.com/u/4377?v=4" alt='user-image' height={50} width={50} />
        </div>
        <div className='col-span-11'>
            <h5 className='text-white'>Alok Ranjan</h5>
           
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ea perspiciatis assumenda quasi tempora illum officiis itaque laboriosam cupiditate vel, possimus dolore distinctio animi inventore, sequi aperiam quia soluta quo!</p>
            <div className='flex justify-between mt-5 text-xl items-center  p-2 w-[90%]'>
            <div>
            <BiMessageRoundedDots color='white' />
            </div>
            <div>
            <FaRetweet color='white' />
            </div>
            <div>
            <CiHeart color='white'/>
            </div>
            <div>
            <RiUpload2Fill color='white' />
            </div>
            </div>
          
        </div>
       
        </div>
    </div>
    

}

export default FeedCard;
