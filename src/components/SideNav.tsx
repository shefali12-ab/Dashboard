'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import Logo from '../../public/assets/Icons/CompanyLogo.png'
import dashboradIcon from "../../public/assets/Icons/Category.png"
import calenderIcon from "../../public/assets/Icons/Calendar.png"
import settingIcon  from "../../public/assets/Icons/Setting.png"
import notificationIcon  from "../../public/assets/Icons/Notification.png"
import documentIcon  from "../../public/assets/Icons/Document.png"
import Invoiceicon from "../../public/assets/Icons/Ticket.png"
import cross from "../../public/assets/Icons/cross2.png"

const data   =[{
    id:'1',
    iconSrc :dashboradIcon,
    iconLabel:"Dashboard"

},
{   id:'2',
    iconSrc :"",
    iconLabel:"Upload"

},
{   id:'3',
    iconSrc : Invoiceicon,
    iconLabel:"Invoice"

},
{   id:'4',
    iconSrc : documentIcon,
    iconLabel:"Schedule"

},
{   
    id:'5',
    iconSrc : calenderIcon,
    iconLabel:"Calender"

},
{   
    id:'6',
    iconSrc :notificationIcon,
    iconLabel:"Notification"

},
{
    id:'7',
    iconSrc : settingIcon,
    iconLabel:"Settings"

}]
const SideNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const handleToggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
   
  return (
    <div className={`w-[60%] h-[100vh] shadow-lg bg-white absolute z-2 md:relative md:z-0 md:w-[20%] md:shadow-none ${isMenuOpen ? 'visible' : 'hidden'}`} >
       <div className='flex justify-between items-center'>
       <Image src={Logo}
       alt="BaseLogo"
       height={150}
       width={150}
       priority={true}
       className='m-[3rem]'/>
       <Image src={cross}
       alt="BaseLogo"
       height={60}
       width={60}
       priority={true}
       onClick={handleToggleMenu}
       className='md:hidden'
       />
       </div>
       
       {data.map( (item , index) => (
        <div key={index} className=' flex gap-[1rem] m-[2rem] mb-[3rem] items-center font-nunito font-semibold  '>
          <Image src={item.iconSrc} alt="icon" height={30} width={30} className=''/>
          <p className='text-lg text-[#9A9AA9] font-semibold '>{item.iconLabel}</p>
        </div>
       ))}
    </div>
  )
}

export default SideNav