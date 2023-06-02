import React from "react";
import Link from "next/link";
import { MdArrowRight } from "react-icons/md";
import Image from "next/image";
import DataMatch from "../../Json/Match.json";

export default function AllTeam() {
  return (
    <>
      <div className="w-full mt-28 lg:max-w-6xl md:px-20 sm:px-10 px-2 mb-10 lg:mx-auto h-fit">
        <h2 className="uppercase font-bold pb-10 text-2xl text-black-main">
          All TEAM
        </h2>
        <div className=" grid grid-cols-1 sm:divide-y-0 sm:gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {DataMatch.map((item) => {
            return (
              <>
                <div
                  className="hover:scale-105 h-28 shadow-xl rounded-lg
               sm:max-w-none flex sm:flex-col max-w-md sm:h-72 lg:h-96 divide-x-8 divide-primary-red mb-8 mx-auto sm:mx-0 sm:mb-10 lg:mb-0 "
                >
                  <div>
                    <Image
                      alt=""
                      height={1000}
                      width={1000}
                      src={item.tim_1 || "/Logo-default.png"}
                      className="sm:w-full mx-auto  aspect-[3/2] object-contain w-44 sm:h-32 lg:h-52 h-fit mix-blend-color-burn"
                    />
                    <h1 className="text-center mt-2 sm:mt-5 text-lg text-primary-red uppercase font-semibold tracking-widest">
                      {item.name_tim1}
                    </h1>
                  </div>
                  <div className=" w-full hover:bg-slate-200 shadow-sm  px-3 container mx-auto ">
                    <div className="text-center text-sm justify-between flex sm:pt-8 pt-2 text-overflow-ellipsis overflow-ellipsis break-all max-w-[300px]  overflow-clip capitalize font-semibold  bottom-0">
                      <h2 className="text-black-main sm:text-xl text-lg uppercase font-medium">
                        Total Player
                      </h2>
                      <p className="text-primary-red ">30</p>
                    </div>
                    <Link href={`/Team/${item.id}`}>
                      <button className="bg-primary-red hover:-translate-y-1 active:duration-200 ease-out  focus:bg-yellow-200 flex px-2 sm:mt-6 mt-4 sm:pt-0.5 rounded-sm w-24 justify-between items-center text-light-grey font-semibold text-xs  uppercase tracking-widest">
                        <p>Detail</p>
                        <span className="text-2xl ">
                          <MdArrowRight />
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
