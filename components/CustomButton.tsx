"use client";
/* this is the structure of my Button section*/

import Image from "next/image"
import {CustomButtonProbs} from '@/types';
import { use } from "react"
/* This display the style of my button element */
  return (
    <button
    disabled ={false}
    type={"button"}
    className={'custom-btn ${containerStyles}'}
    
    onClick={ handleClick }    
    >
        <span className={'flex-1'}> title </span>

    </button>
  )
}

export default CustomButton
