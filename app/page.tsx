import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <Container className="px-[10px]">
      <h2 className="w-full py-[15px] text-[24px] font-semibold text-left">
        <span className="text-[#3453d1]">Latest</span> Update
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="pb-[15px] border-b-2 border-dashed border-[#45475a] flex w-full h-auto gap-2">
          <a
            href="/series/ksjkdjskd"
            className="w-24 h-auto border-2 rounded-md border-[#45475a] flex-none overflow-hidden"
          >
            <img
              src="https://kiryuu.id/wp-content/uploads/2022/11/demon-lords-martial-arts-ascension-017659-ilP2iQ1M.jpg"
              alt="image"
              className="hover:scale-125 transition-all object-fill"
            />
          </a>
          <div className="w-full h-full overflow-hidden text-ellipsis ml-[5px]">
            <a href="/series/jjkjkd" className="whitespace-nowrap text-[16px] text-[#9ca9b9] font-semibold hover:text-[#3453d1]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quidem voluptate provident
            </a>
            <ul className="grid grid-cols-1 gap-1 mt-2">
              <li className="flex justify-between">
                <a href="#" className="px-[15px] py-[3px] text-[15px] text-[#eeeeee] bg-[#3b3c4c] rounded-full hover:bg-[#3453d1] hover:text-[#ffffff] transition-colors">Chapter 01</a>
                <span className="text-[14px] text-[#999999] font-extralight p-[3px]">2 minutes ago</span>
              </li>
              <li className="flex justify-between">
                <a href="#" className="px-[15px] py-[3px] text-[15px] text-[#eeeeee] bg-[#3b3c4c] rounded-full hover:bg-[#3453d1] hover:text-[#ffffff] transition-colors">Chapter 01</a>
                <span className="text-[14px] text-[#999999] font-extralight p-[3px]">2 minutes ago</span>
              </li>
              <li className="flex justify-between">
                <a href="#" className="px-[15px] py-[3px] text-[15px] text-[#eeeeee] bg-[#3b3c4c] rounded-full hover:bg-[#3453d1] hover:text-[#ffffff] transition-colors">Chapter 01</a>
                <span className="text-[14px] text-[#999999] font-extralight p-[3px]">2 minutes ago</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
