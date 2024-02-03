"use client";
import React, { useState } from "react";
import Image from "next/image";

import notification from "../../public/assets/Icons/notify.png";
import profileicon from "../../public/assets/Icons/Mask Group.png";
import excelicon from "../../public/assets/Icons/Excel.png";
import hamburgericon from "../../public/assets/Icons/burger-regular.png"
import Logo from '../../public/assets/Icons/CompanyLogo.png'
import loader from "../../public/assets/Icons/loadericon.png"
import uploadicon from "../../public/assets/Icons/UploadIcon.png"

import { Primarybutton } from "./Primarybutton";

import Uploadeddata from "./Uploadeddata";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [uploaddata , setuploaddata] = useState(false)
  const handleUploadButtonClick = () => {
    setLoading((prevLoading) => !prevLoading); // Toggle loading state
  };
  const handleloaderButtonClick =()=>{
    setuploaddata((prev)=>!prev)
    setLoading((prevLoading) => !prevLoading);
  }
  return (
    <div className="bg-[#F8FAFF] w-[100%] ">
      <div className=" justify-between m-[2rem] mt-[4rem] ml-[4rem] lg:flex hidden">
        <h1 className="text-2xl font-figtree font-bold">Upload CSV</h1>
        <div className=" flex gap-7">
          <Image
            src={notification}
            alt="profile notification"
            priority={true}
            height={25}
            width={25}
          />
          <Image
            src={profileicon}
            alt="profile icon"
            priority={true}
            height={30}
            width={30}
          />
        </div>
      </div>
      <div className="  justify-between p-[2rem] lg:hidden flex bg-white">
      <div className="flex gap-[2rem]">
      <Image
            src={hamburgericon}
            alt="menu"
            height={12}
            width={16}
          />
        <Image src={Logo}
       alt="BaseLogo"
       height={27}
       width={82}
       priority={true}
      />
      </div>
      <div className="flex gap-[2rem]">
      <Image
            src={notification}
            alt="profile notification"
            height={18}
            width={23}
          />
          <Image
            src={profileicon}
            alt="profile notification"
            height={30}
            width={30}
          />
      </div>
      </div>
      <div className="bg-white h-[27rem] w-[80%] lg:w-[50%] m-auto mt-[8rem] p-7 flex flex-col items-center justify-center gap-6 font-figtree">
        <div className="w-[90%] h-[60%] border-2 border-dotted rounded-lg border-[#EBEBEB] flex flex-col justify-center items-center gap-5">
          <Image src={excelicon} alt="excel icon" height={40} width={40} />
          {loading ? (
            <p className="text-[#999CA0] flex flex-col justify-center items-center">
              upload-template.xlsx{" "}
              <span className="text-[#D33030]">Remove</span>
            </p>
          ) : (
            <p className="text-[#999CA0]">
              Drop your excel sheet here or{" "}
              <span className="text-[#605BFF]">browse</span>
            </p>
          )}{" "}
        </div>
        {loading ? (
          <Primarybutton
            buttonLabel=""
            buttonIconSrc= {loader}
            val={true}
            onClick={handleloaderButtonClick}
          />
        ) : (
          <Primarybutton
            buttonLabel="Upload "
            buttonIconSrc={uploadicon}
            val={true}
            onClick={handleUploadButtonClick}
          />
        )}
      </div>
     { uploaddata && <Uploadeddata />}
    </div>
  );
};

export default Profile;
