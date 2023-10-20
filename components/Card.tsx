import React from "react";
// import heart from "../assets/images/icons/heart.png";
import { FaRegHeart } from "react-icons/fa";

import Image from "next/image";

import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { IProductInfo, ITag } from "../types/Recommendation";
import { FILE_URL } from "../config/urls";
// import heart from "../assets/images/icons/heart.svg";

export const Tag = ({ tag }: { tag: ITag }) => {
  return (
    <span
      style={{
        backgroundColor: tag?.attributes?.color
          ? `${tag.attributes.color}`
          : `white`,
        border: !tag?.attributes?.color ? "1px solid green" : "none",
      }}
      className="text-[7px] my-[3px] font-bold mx-[3px] px-[8px] py-[2px] rounded-lg text-center h-[13px] flex justify-center align-middle"
    >
      {tag?.attributes?.name}
    </span>
  );
};

interface ProductCardProp {
  title: string;
  itemId: string;
  product?: IProductInfo;
}

export function ProductCard({ title, itemId, product }: ProductCardProp) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div className="w-[300px] my-2 flex align-middle justify-start relative bottom-0 hover:bottom-[5px] animated cursor-pointer">
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.071) 0px 5px 15px 0px",
          borderRadius: 15,
        }}
        className="w-[260px] h-[255px] pb-2 bg-white"
      >
        {product?.attributes?.label_info?.data?.attributes?.text ? (
          <div
            style={{ borderTopRightRadius: 15, borderTopLeftRadius: 15 }}
            className="bg-[#F1C093] w-[100%] text-center text-white text-[12px] font-bold py-[1.2px] mb-2 h-[22px]"
          >
            {product?.attributes?.label_info?.data.attributes?.text}
          </div>
        ) : (
          <div
            style={{ borderTopRightRadius: 15, borderTopLeftRadius: 15 }}
            className="bg-[white] w-[100%] text-center text-white text-[12px] font-bold py-[1.2px] mb-2 h-[22px]"
          >
            {/* BIG WIN */}
          </div>
        )}

        <div
          className={`flex ${
            product?.attributes?.research_data?.data?.attributes?.text
              ? "justify-between"
              : "justify-end"
          } align-bottom px-6 h-[28px]`}
        >
          <p className="text-[#9c9c9c] text-[9.5px] py-0 pb-2 relative top-2 flex justify-start align-middle flex-row">
            {product?.attributes?.research_data?.data?.attributes?.text && (
              <>
                <span>
                  <Image
                    width={9}
                    height={9}
                    alt=""
                    src={`${FILE_URL}${product?.attributes?.research_data?.data?.attributes?.icon?.data?.attributes?.url}`}
                    className="relative top-[2.5px]"
                  />
                </span>{" "}
                <span className="ml-1 font-medium text-[11px]">
                  {product?.attributes?.research_data?.data?.attributes?.text}
                </span>
              </>
            )}
          </p>
          <div className="relative right-[5px] top-[9px]">
            <FaRegHeart size={22} />
          </div>
        </div>
        <p className="text-xl font-bold max-w-[250px] px-6 py-0 my-0 leading-[22px] pt-2 clamped mb-2 h-[54px]">
          {product?.attributes?.title}
        </p>

        {/* TODO truncate whe the line is more than 3 lines */}
        <p className="text-[9.5px] font-medium mb-6 px-6 text-[#000000] leading-[12px] pt-[8px] clamped-3 h-[45px] ">
          {product?.attributes?.description}
        </p>

        <div className="grid grid-cols-5 pt-[15px] px-6 relative bottom-[4.5px] border-t-[1px] border-[#c7c7c7]">
          <div className="grid-col-span-1 h-[43px] ">
            {product?.attributes?.platform?.data?.attributes?.icon?.data
              ?.attributes?.url && (
              <>
                <p className="text-[11px] font-bold">
                  {product?.attributes?.platformText}
                </p>

                <div className="flex align-middle pl-2">
                  <div>
                    <Image
                      width={20}
                      height={20}
                      alt=""
                      src={`${FILE_URL}${
                        product?.attributes?.platform?.data?.attributes?.icon
                          ?.data?.attributes?.url || ""
                      }`}
                      className="relative top-[2.5px]"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="col-span-4 ml-2 px-4 flex flex-wrap relative bottom-[3px] max-h-[60px] overflow-y-hidden">
            {product?.attributes?.tags.data.map((tag) => {
              return <Tag tag={tag} key={tag.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
