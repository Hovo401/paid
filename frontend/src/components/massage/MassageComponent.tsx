import type { email } from '../../Types/api.types';
// import { useState } from 'react';

function MassageComponent({
  emails,
  setOpenMassageID,
  openMassageID,
}: {
  emails: email[];
  setOpenMassageID: React.Dispatch<React.SetStateAction<number>>;
  openMassageID: number;
}) {
  return (
    <>
      <div>
        <div className="mb-3">
          <button className="" onClick={() => setOpenMassageID(-1)}>
            <span className="inline-block hover:cursor-pointer relative">
              <img src="arrow.png" className="w-[20px] h-[20px]" alt="" />
            </span>
          </button>
        </div>
        {emails[openMassageID]?.message ? (
          <div className="w-full flex flex-col gap-3">
            <div>
              <p className="text-[#9CA3AF] text-[18px] mb-1">From</p>
              <div className="flex items-center gap-4 ">
                <div className=" w-[40px] h-[40px] rounded-full overflow-hidden">
                  <img
                    src="pers1.png"
                    className="w-full h-full  object-cover transition-transform duration-300"
                    alt=""
                  />
                </div>
                <h2 className="text_c_0 ">{emails[openMassageID].in.name}</h2>
              </div>
            </div>

            <div>
              <p className="text-[#9CA3AF]  text-[18px] mb-1">Topic</p>
              <button className=" px-3 py-1.5 text_c_0 bg_c_3 rounded-full bg-[#bac0ca]">
                Politic
              </button>
            </div>

            <div>
              <p className="text-[#9CA3AF] text-[18px] mb-1">Subject</p>
              <h2 className="text_c_0 text-2xl   pl-3 ">
                {emails[openMassageID].subject}
              </h2>
            </div>
            <p className="text-[#9CA3AF] text-[18px] mb-1">Message</p>
            <div className="bg_c_3 p-4 rounded-lg">
              <p>{emails[openMassageID].message}</p>
            </div>
          </div>
        ) : (
          <p className="text_c_0">No message found.</p>
        )}
      </div>
    </>
  );
}

export default MassageComponent;
