import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { IFeatureData, IFeatureDisplay } from "../../types/Feature";
import { FILE_URL } from "../../config/urls";

interface FeaturesProp {
  features?: IFeatureDisplay;
}

const FeatureSelector = ({ feature }: { feature?: IFeatureData }) => {
  return (
    <div className="py-[60px]">
      <div className="grid grid-cols-2 gap-24">
        <div className="col-span-1 pt-[50px] pl-[40px]  h-[350px]">
          {feature?.attributes?.chipText && (
            <span
              style={{
                backgroundColor: feature?.attributes?.chipColor
                  ? feature?.attributes?.chipColor
                  : "#b1b1b1",
              }}
              className="text-xs font-bold bg-[#C2C2C2] text-white px-[10px] py-[5px] rounded-2xl"
            >
              {feature?.attributes?.chipText}
            </span>
          )}

          <p className="text-[#101010] text-3xl font-bold mt-4 max-w-[350px]">
            {feature?.attributes?.title}
          </p>

          <p className="text-[#101010] text-[20px] font-bold mt-4">
            {feature?.attributes?.description}
          </p>

          <div className="flex justify-start align-middle mt-10">
            <button className="shadowed-btn shadowed-btn animated flex justify-center align-middle flex-row w-[180px] px-4 py-[10px]">
              <span className="font-bold">
                {" "}
                {feature?.attributes?.buttonText}
              </span>
              <FontAwesomeIcon
                color="#000000"
                className="w-[12px] ml-[12px] relative top-[2.4px]"
                icon={faAngleRight}
              />
            </button>
          </div>
        </div>

        <div className="col-span-1 flex justify-center align-middle ">
          <Image
            width={900}
            height={300}
            alt="First slider image"
            className="object-scale-down"
            src={`${FILE_URL}${
              feature?.attributes?.image?.data?.attributes?.url || ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

const Features = ({ features }: FeaturesProp) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const [selected, setSelected] = useState(0);

  const sliderRef = useRef<any>();
  return (
    <div className="mt-24 mb-24 h-[400px]">
      <div className="flex justify-center align-middle ml-10">
        <div className="flex justify-center align-middle py-[10px] w-[800px] content-center">
          {features?.data?.attributes?.features?.data?.map((feature, index) => {
            return (
              <div className="mx-10" key={feature.id}>
                <p
                  onClick={() => {
                    sliderRef.current.slickGoTo(index);
                  }}
                  className={
                    selected === index
                      ? "font-bold text-[17px] text-[black] animated hover:text-[black] cursor-pointer text-end"
                      : "font-bold text-[17px] text-[#959595] animated hover:text-[black] cursor-pointer text-end"
                  }
                >
                  {feature?.attributes?.header}
                </p>
                <div
                  className={
                    selected === index
                      ? "h-[7px] bg-[#F1C093] mt-1 rounded-lg "
                      : "h-[7px] bg-[transparent] mt-1 rounded-lg"
                  }
                ></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mx-16 grid grid-cols-12 gap-2">
        <div
          onClick={() => {
            if (selected === 0) return;
            sliderRef.current.slickPrev();
          }}
          className="col-span-1 grid content-center justify-center cursor-pointer"
        >
          {selected !== 0 && (
            <div className="z-50 relative w-[45px] h-[45px] bg-[#D9D9D9] rounded-full flex align-middle justify-center p-2 hover:bg-[#b4b4b4] animated">
              <FontAwesomeIcon color="#FFFCFC" icon={faAngleLeft} />
            </div>
          )}
        </div>
        <div className="col-span-10">
          <Slider
            ref={sliderRef}
            {...settings}
            swipe={false}
            beforeChange={(cur, next) => {
              setSelected(next);
            }}
          >
            {features?.data?.attributes?.features?.data?.map((feature) => {
              return <FeatureSelector feature={feature} key={feature.id} />;
            })}
            {/* <p>Example 1</p>
            <p>Example 2</p> */}
          </Slider>
        </div>
        <div
          onClick={() => {
            if (
              selected ===
              (features?.data?.attributes?.features?.data?.length || 0) - 1
            )
              return;
            sliderRef.current.slickNext();
          }}
          className="col-span-1 grid content-center justify-center cursor-pointer"
        >
          {selected !==
            (features?.data?.attributes?.features?.data?.length || 0) - 1 && (
            <div className="z-50 relative w-[45px] h-[45px] bg-[#D9D9D9] rounded-full flex align-middle justify-center p-2 hover:bg-[#b4b4b4] animated">
              <FontAwesomeIcon color="#FFFCFC" icon={faAngleRight} />
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center align-middle">
        {features?.data?.attributes?.features?.data?.map((_, index) => {
          return (
            <div
              key={_.id}
              onClick={() => {
                sliderRef.current.slickGoTo(index);
              }}
              className={
                selected === index
                  ? "w-[8px] h-[8px] bg-[black] rounded-full mx-2 cursor-pointer animated hover:bg-[#4d4d4d]"
                  : "w-[8px] h-[8px] bg-[#d9d9d9] rounded-full mx-2 cursor-pointer animated hover:bg-[#4d4d4d]"
              }
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
