"use client";
<<<<<<< HEAD
/* this is the structure of the Button section!!!!!!!!!!!!!!!!!!!!!!!!!!!1*/
import { CustomButtonProps } from "@/types";
const CustomButton =({ title, containerStyles, handleClick, btnType}: CustomButtonProps) => {
=======
/* this is the structure of my Button section*/

import Image from "next/image"
import {CustomButtonProbs} from '@/types';
import { use } from "react"
/* This display the style of my button element */
>>>>>>> 1f726fc3e0fac3daaf2fe9c09913a36e70d6e1cb
  return (
    <button
      disabled ={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
    
      onClick={ handleClick }    
    >
        <span className={'flex-1'}> {title} </span>

    </button>
  )
}

export default CustomButton
