import React from 'react'
import Image from 'next/image'

export const SignInbuttons = ({ buttonlabel, buttonSrc }: any) => {
  return (
   <div className=' h-[2.8rem]  bg-white p-4 flex gap-4 justify-center items-center text-nowrap rounded-lg font-sans '>
    <Image src={buttonSrc}
           alt="buttonsrc"
           height={20}
           width={20}/>
           
   
    
    <p>{buttonlabel}</p>
   </div>
  )
}
