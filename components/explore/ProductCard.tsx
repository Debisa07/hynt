import { faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import filterIcon from "../../assets/images/icons/filter-icon.png";
// import heart from "../assets/images/icons/heart.png";
import { FaRegHeart } from "react-icons/fa";

import Image from "next/image";

import { VisibilityContext } from "react-horizontal-scrolling-menu";
// import heart from "../assets/images/icons/heart.svg";

export function ProductCard({
  title,
  itemId,
}: {
  title: string;
  itemId: string;
}) {
  const visibility = React.useContext(VisibilityContext);

  // const visible = visibility.isItemVisible(itemId);

  return (
    <div className="w-[260px] my-4 bg-red-50 flex align-middle justify-start relative bottom-0 hover:bottom-[5px] animated cursor-pointer">
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.071) 0px 5px 15px 0px",
          borderRadius: 15,
        }}
        className="w-[260px] pb-2 bg-white"
      >
        <div
          style={{ borderTopRightRadius: 15, borderTopLeftRadius: 15 }}
          className="bg-[#F1C093] w-[100%] text-center text-white text-[12px] font-bold py-[1.2px] mb-2 h-[22px]"
        >
          BIG WIN
        </div>

        <div className="flex justify-between align-bottom px-6 ">
          <p className="text-[#9c9c9c] text-[9.5px] py-0 pb-2 relative top-2 flex justify-start align-middle flex-row">
            <span>
              <Image
                alt="Filter"
                src={filterIcon}
                className="w-[9px] relative top-[2.5px]"
              />
              {/* <FontAwesomeIcon
                className="w-[11px] h-[11px] relative top-[2px]"
                icon={faFilter}
              /> */}
            </span>{" "}
            <span className="ml-1 font-medium text-[11px]">Research Based</span>
          </p>
          <div className="relative right-[5px] top-[9px]">
            <FaRegHeart size={22} />
          </div>
        </div>
        <p className="text-xl font-bold max-w-[250px] px-6 py-0 my-0 leading-[22px] pt-2 pb-3">
          Upgrade your Instagram posts You.
        </p>

        {/* TODO truncate whe the line is more than 3 lines */}
        <p className="text-[9.5px] font-medium pb-[20px] px-6 border-b-[1px] border-[#c7c7c7] text-[#000000] leading-[12px] pt-[8px]">
          Some description about the cards, products, and the hynts. Some
          description about the cards and products.
        </p>

        <div className="grid grid-cols-5 pt-[20px] px-6 relative bottom-[4.5px]">
          <div className="grid-col-span-1">
            <p className="text-[11px] font-bold">Platform</p>

            <div className="flex align-middle pl-2">
              <div>
                <FontAwesomeIcon
                  color="#444"
                  className="w-[17px] h-[17px]"
                  border={true}
                  icon={faVoicemail}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
          <div className="col-span-4 ml-2 px-4 flex flex-wrap relative bottom-[3px]">
            <span className="text-[7px] my-[3px] font-bold mx-[3px] bg-blue-200 px-[8px] py-[2px] rounded-lg text-center h-[13px] flex justify-center align-middle">
              DESIGN
            </span>
            <span className="text-[7px] my-[3px] font-bold mx-[3px] bg-green-200 px-[8px] py-[2px] rounded-lg text-center h-[13px] flex justify-center align-middle">
              ADS
            </span>
            <span className="text-[7px] my-[3px] font-bold mx-[3px] bg-red-200 px-[8px] py-[2px] rounded-lg text-center h-[13px] flex justify-center align-middle">
              SEO
            </span>
            <span className="text-[7px] my-[3px] font-bold mx-[3px] bg-orange-200 px-[8px] py-[2px] rounded-lg text-center h-[13px] flex justify-center align-middle">
              CONTENTCREATION
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
