'use client';
import React from "react";
import Image from "next/image";
import Link from 'next/link';



import { Primarybutton } from "./Primarybutton";
import { SignInbuttons } from "./SignInbuttons";

const SignIn = () => {
 
  return (
    <div className="h-[100vh] lg:flex ">
      <div className="bg-[#605BFF] w-[50%] hidden lg:block ">
        <div className="w-[7%] h-[7%] rounded-full bg-white mt-[3rem] ml-[3rem] flex justify-center items-center">
          <Image
            src="/assets/Icons/zigzag.png"
            alt="base-icon-vector"
            priority={true}
            height={100}
            width={100}
          />
        </div>
        <h1 className="text-7xl text-white flex justify-center items-center mt-[20%] font-bold font-sans">
          BASE
        </h1>
        <div className="flex  gap-8 items-center mt-[28rem] ml-[30%]">
          <Image src="/assets/Icons/github-icon.png" alt="" height={50} width={48} />
          <Image src="/assets/Icons/twittervector.png"alt="" height={50} width={48} />
          <Image src="/assets/Icons/linkedin-icon.png" alt="" height={50} width={48} />
          <Image src="/assets/Icons/discord-icon.png" alt="" height={50} width={48} />
        </div>
      </div>
      <div className=" flex lg:hidden bg-[#605BFF] h-[10%] justify-start">
        <Image src="/assets/Icons/CompanyLogo.png" alt="companylogo" height={90} width={90} className="text-white m-3"/>

      </div>
      <div className=" bg-[#F8FAFF] lg:w-[50%] flex  items-center justify-center ">
        <div className="  flex flex-col gap-[1rem] w-[90%] mt-[4rem] ml-auto">
          <h1 className="text-4xl font-bold leading-9 font-sans">Sign In</h1>
          <p className="font-normal text-base font-serif">Sign in to your account</p>
          <div className="flex gap-2  text-base items-center">
            <SignInbuttons
              buttonlabel="Sign in with Google"
              buttonSrc="/assets/Icons/google-icon.png"
            />
            <SignInbuttons buttonlabel="Sign in with Apple" buttonSrc="/assets/Icons/apple 1.png"/>
          </div>
          <div className="w-[94%] lg:w-[49%]  bg-white rounded-md p-3 flex flex-col gap-[2rem] mb-[3rem] ">
            <form className="flex flex-col gap-2 m-4">
              <p>Email address</p>
              <input className="bg-[#F5F5F5] w-[90%] h-[2.5rem] rounded-lg border-none outline-none p-5 font-serif" type="email"></input>
              <p>Password</p>
              <input className="bg-[#EAEAEA] w-[90%] h-[2.5rem] rounded-lg border-none outline-none p-5" type="password"></input>
              <p className="text-[#346BD4]">Forget password?</p>
              <Link href="/upload">
              <Primarybutton buttonLabel="Sign In" val={false} buttonIconSrc={""} onClick={()=>(console.log("sigin btn"))} />
              </Link>
            </form>
            <p className="text-[#858585] text-sm font-normal m-auto ">
            Don&apos;t have account?
            <span className="text-[#346BD4]">Register here</span>
          </p>
          <div className="flex lg:hidden  gap-8 items-center   justify-center  ">
          <Image src="/assets/Icons/githubvector.png"alt="" height={20} width={20} />
          <Image src="/assets/Icons/twittervector.png" alt="" height={20} width={20} />
          <Image src="/assets/Icons/linkedinvector.png"alt="" height={20} width={20} />
          <Image src="/assets/Icons/discordvector.png" alt="" height={20} width={20} />
          </div>
          </div>
         
        </div>
      </div>
    </div>
   
  );
};

export default SignIn;
