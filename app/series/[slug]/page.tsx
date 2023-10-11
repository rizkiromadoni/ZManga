import Container from "@/components/ui/container";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const SeriesPage = ({ params: { slug } }: { params: { slug: string } }) => {
  const imageUrl =
    "https://kiryuu.id/wp-content/uploads/2022/11/demon-lords-martial-arts-ascension-017659-ilP2iQ1M.jpg";

  return (
    <>
      <div className="w-full h-[294px] md:h-[189px] lg:h-[303px] overflow-hidden">
        <Image
          src={imageUrl}
          alt="image"
          width={1920}
          height={1080}
          className="blur scale-150 brightness-50 object-cover"
        />
      </div>
      <Container className="-translate-y-[120px] flex flex-col md:flex-row">
        <div className="w-full md:w-[280px] p-[15px]">
          <Image
            src={imageUrl}
            alt="image"
            width={1920}
            height={1080}
            className="w-[250px] h-auto rounded-md mx-auto mb-[15px]"
          />
          <div className="flex flex-col gap-3 items-center">
            <h2 className="text-[24px] font-semibold md:hidden mb-[30px]">Lorem ipsum dolor sit amet</h2>
            <div className="flex w-full rounded-full bg-[#38394a] text-[15px] text-white font-semibold overflow-hidden justify-stretch gap-0">
              <div className="w-full bg-[#5ab0ff] py-[10px] flex justify-center">Manhwa</div>
              <div className="w-full bg-[#6cc174] py-[10px] flex justify-center">Ongoing</div>
            </div>
            <div className="flex w-full py-[10px] rounded-full bg-[#38394a] text-[15px] text-white font-semibold justify-center items-center">
              <FontAwesomeIcon icon={faStar} className="text-[15px] text-[#ffdd73] mr-[5px]" /> 8.7
            </div>
            <div className="flex w-full py-[10px] rounded-full bg-[#c15656] text-[15px] text-white font-semibold justify-center items-center">
              <FontAwesomeIcon icon={faHeart} className="text-[15px] mr-[5px]" /> Bookmark
            </div>
            <p className="text-[14px] text-[#9ca9b9]">0 Users Bookmarked</p>
            <ul className="bg-[#3b3c4c] text-[#9ca9b9] w-full rounded-md p-[20px] flex flex-col gap-[10px]">
              <li className="flex flex-col">
                <b className="text-[16px]">Alternative</b>
                <span className="text-[13px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
              </li>
              <li className="flex flex-col">
                <b className="text-[16px]">Published</b>
                <span className="text-[13px]">2023</span>
              </li>
              <li className="flex flex-col">
                <b className="text-[16px]">Author</b>
                <span className="text-[13px]">LEE Je-Hwan</span>
              </li>
              <li className="flex flex-col">
                <b className="text-[16px]">Artist</b>
                <span className="text-[13px]">LEE Yoon-Kyoon</span>
              </li>
              <li className="flex flex-col">
                <b className="text-[16px]">Total Chapter</b>
                <span className="text-[13px]">? Chapter</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SeriesPage;
