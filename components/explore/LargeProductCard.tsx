import React from "react";
import Image from "next/image";

import {
  FaRegChartBar,
  FaRegHeart,
  FaRegQuestionCircle,
  FaShareAlt,
  FaTag,
} from "react-icons/fa";
import { IProductInfo } from "../../types/Recommendation";
import { FILE_URL } from "../../config/urls";

type Props = {
  titleFontSize: number;
  showShadow: boolean;
  selectedProduct: IProductInfo;
  titleRef: any;
};

const LargeProductCard = ({
  selectedProduct,
  showShadow,
  titleRef,
  titleFontSize,
}: Props) => {
  return (
    <div className="grid grid-cols-5  px-5 md:px-52 gap-10">
      <div className="col-span-5 md:col-span-3">
        <p
          style={{
            fontSize: titleFontSize,
          }}
          ref={titleRef}
          className={`font-bold sticky top-9 pt-1 z-20 animated ${
            showShadow ? "clamped-1" : "clamped"
          }`}
        >
          {selectedProduct?.attributes?.title}
        </p>

        <p className="text-[13px] max-w-[480px] mt-2 mb-1 font-bold">
          {selectedProduct?.attributes?.description}
        </p>
        {/* TAGS SECTION */}
        <div className="grid grid-cols-10 mt-4">
          <p className="col-span-2 ">
            <FaTag className="inline text-[13px]" />
            <span className="text-[12px] font-bold ml-2">Tags:</span>
          </p>

          <div className="col-span-8 ml-2 flex flex-wrap relative top-[3px] max-w-[400px] ">
            {selectedProduct?.attributes?.tags?.data?.map((tag) => {
              return (
                <span
                  style={{
                    backgroundColor: tag?.attributes?.color,
                    border: tag?.attributes?.color
                      ? "none"
                      : "1px solid #a8a8a8",
                  }}
                  key={tag.id}
                  className="text-[8px] my-[3px] font-bold mx-[5px]  px-[15px] py-[4px] rounded-xl text-center h-[20px] flex justify-center align-middle"
                >
                  {tag?.attributes?.name}
                </span>
              );
            })}
          </div>
        </div>
        {/* RESEARCH BASED */}

        {selectedProduct?.attributes?.research_data?.data && (
          <div className=" mt-4">
            <p className="text-[#9c9c9c] text-[9.5px] py-0 pb-2 relative top-2 flex justify-start align-middle flex-row">
              {selectedProduct?.attributes?.research_data?.data?.attributes
                ?.text && (
                <>
                  <span>
                    <Image
                      width={9}
                      height={9}
                      alt=""
                      src={`${FILE_URL}${
                        selectedProduct?.attributes?.research_data?.data
                          ?.attributes?.icon?.data?.attributes?.url ?? ""
                      }`}
                      className="relative top-[2.5px]"
                    />
                  </span>{" "}
                  <span className="ml-3 text-[12px] font-bold text-black">
                    {
                      selectedProduct?.attributes?.research_data?.data
                        ?.attributes?.text
                    }
                  </span>
                  <span>
                    <FaRegQuestionCircle
                      color="black"
                      size={13}
                      className="ml-2"
                    />
                  </span>
                </>
              )}
            </p>

            <div className="ml-1 flex flex-wrap relative bottom-[3px] max-w-[400px]"></div>
          </div>
        )}

        <div className="grid grid-cols-10 mt-4">
          <p className="col-span-2 ">
            <FaRegChartBar size={13} className="inline" />
            <span className="text-[12px] font-bold ml-2">Benefits:</span>
          </p>

          <div className="col-span-8 ml-4 mt-[5px] relative max-w-[400px]">
            {selectedProduct?.attributes?.categories?.data?.map((category) => {
              return (
                <p key={category.id} className="text-[12px] font-semibold">
                  {category?.attributes?.title}
                </p>
              );
            })}

            {/* <p className="text-[12px] font-semibold">
          Insrease Exposure
        </p>
        <p className="text-[12px] font-semibold">Build Trust</p> */}
          </div>
        </div>
        {/* DIVIDER */}
        <div className="h-[1px] bg-[#e9e9e9] my-6 max-w-[530px]"></div>
        {/* MAIN CONTENT */}
        <div
          className="max-w-[550px] linked"
          dangerouslySetInnerHTML={{
            __html:
              selectedProduct?.attributes?.content?.replaceAll(
                "/uploads/",
                `${FILE_URL}/uploads/`
              ) || "",
          }}
        ></div>
      </div>
      <div className="h-[100%] col-span-3 md:col-span-2 rounded-xl bg-[#f5f5f5cb]">
        <div className="sticky top-9 z-20">
          <button className="icon-button animated">
            <FaShareAlt size={17} color="#444" className="inline font-bold" />
            <span className="relative text-[13px] font-semibold ml-1 ">
              Share to a Friend
            </span>
          </button>
          <button className="icon-button animated">
            <FaRegHeart size={17} color="black" className="inline font-bold" />
            <span className="relative text-[13px] font-semibold ml-1 ">
              Save
            </span>
          </button>

          <button
            style={{ opacity: showShadow ? 1 : 0 }}
            className="animated text-[13px] font-semibold text-white py-1 ml-8 icon-button animated bg-[#F1C093] "
          >
            Request an Expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default LargeProductCard;
