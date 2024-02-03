
import React, { useState } from "react";
import Image from "next/image";
import data from "../../public/assets/data/frontend_assigment";




const Uploadeddata = () => {
  const [toggle, settoggle] = useState(null);
 
 
  const handleClick = (index: any) => {
    settoggle(index === toggle ? null : index); // Toggle loading state
  };

  

  return (
    <div className="flex flex-col gap-8 m-[4rem] font-figtree">
      <h1 className="font-semibold text-2xl">Uploads</h1>
      <div className="bg-[#F5F5F5]  rounded-lg flex flex-col gap-[2rem] w-[80rem] h-[100%] p-[2rem]">
        <div className="   m-auto p-[1rem] ">
        <ul className=" flex gap-[11rem] text-[#000000] font-semibold ">
          <li>SI NO.</li>
          <li>Links</li>
          <li>Prefix</li>
          <li>Add Tags</li>
          <li>Selected Tags</li>
        </ul>
        </div>

        {data.slice(0, 5).map((item: { id: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; links: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; prefix: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; } , index:any) => (
          <div key={index} className="bg-white w-[90%]  rounded-lg m-auto p-4">
            <ul className="flex justify-between  text-[#000000] text-sm ">
              <li>{item.id}</li>
              <li className="text-[#5B93FF]">{item.links}</li>
              <li>{item.prefix}</li>
              <li>
                {" "}
                <button className="w-[110%] h-[80%] flex justify-center items-center border-2 border-[#EBEBEB] bg-white rounded-md p-1 ">
                  <>
                    <p className="text-sm">Select Tag</p>
                    <Image
                      src="/assets/Icons/Right container.png"
                      alt="arrow-icon"
                      height={30}
                      width={30}
                      priority={true}
                      onClick={() => handleClick(index)}
                    />
                  </>
                </button>
                { toggle === index && ( <div className=' w-[7rem] absolute  rounded-md shadow-lg bg-white'>
        <ul className='flex flex-col items-start text-sm gap-2 m-3'>
            <li className='p-1 hover:bg-[#F5F5F5]   hover:rounded-md' >Tag 1</li>
            <li className='p-1 hover:bg-[#F5F5F5]   hover:rounded-md' >Tag 2</li>
            <li className='p-1 hover:bg-[#F5F5F5]   hover:rounded-md' >Tag 3</li>
            <li className='p-1 hover:bg-[#F5F5F5]   hover:rounded-md' >Tag 4</li>
            <li className='p-1 hover:bg-[#F5F5F5]   hover:rounded-md' >Tag 5</li>
        </ul>
    </div>)
                  }
              </li>
              <li>
                <div className="flex justify-around gap-[2rem]">
                   <div className="w-[4rem] p-1 bg-[#605BFF] flex gap-2 text-white rounded-md items-center justify-center pl-2 pr-2 text-[10px]" >Tag 1
                  <Image src="/assets/Icons/cross.png" height={8} width={8} alt="cross-icon"/>
                  
                  </div>
                  <div className="w-[4rem] p-1 bg-[#605BFF] flex gap-2 text-white rounded-md items-center justify-center pl-2 pr-2 text-[10px]" >Tag 2
                  <Image src="/assets/Icons/cross.png" height={8} width={8} alt="cross-icon"/>
                  
                  </div>
                   <div className="w-[4rem] p-1 bg-[#605BFF] flex gap-2 text-white rounded-md items-center justify-center pl-2 pr-2 text-[10px]" >Tag 3
                  <Image src="/assets/Icons/cross.png" height={8} width={8} alt="cross-icon"/>
                  
                  </div>
                   <div className="w-[4rem] p-1 bg-[#605BFF] flex gap-2 text-white rounded-md items-center justify-center pl-2 pr-2 text-[10px]" >Tag 4
                  <Image src="/assets/Icons/cross.png" height={8} width={8} alt="cross-icon"/>
                  
                  </div>
                 
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Uploadeddata;
