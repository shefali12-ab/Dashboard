'use client';
import React from 'react'
import Image from 'next/image'
type ButtonProps = {
  
  buttonLabel?: String;
  onClick(): void ;
  val : boolean
  buttonIconSrc:any;
}
export const Primarybutton = ({buttonLabel,buttonIconSrc ,val,onClick}:ButtonProps) => {
  return (
    <button className='w-[90%] h-[3rem] bg-[#605BFF] text-white font-medium text-sm rounded-md flex gap-2 justify-center items-center' onClick={onClick}>
    <>
   { val&&<Image src={buttonIconSrc} width={24} height={24} alt="buttonIcon"/>}
    {buttonLabel}
    </>
    </button>
  )
}
