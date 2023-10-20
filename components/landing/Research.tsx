import React from "react";
import Image from "next/image";

import researchImage from "../../assets/images/research-based.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { IResearch } from "../../types/Research";
import { FILE_URL } from "../../config/urls";

interface ResearchProp {
  research?: IResearch;
}

const Research = ({ research }: ResearchProp) => {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 content-center align-middle items-center justify-center px-[150px] py-10 gap-20 mt-[240px] max-w-[100vw] overflow-x-hidden">
      <div className="research-image cols-span-1 ">
        <Image
          width={600}
          height={300}
          alt="Research based"
          src={`${FILE_URL}${
            research?.data?.attributes?.image?.data?.attributes?.url || ""
          }`}
        />
      </div>
      <div className="cols-span ml-10">
        <p className="font-bold text-[27px] mb-4">
          {research?.data?.attributes?.title}
        </p>
        <p className="max-w-[380px] text-[#888] text-[19px] font-semibold">
          {research?.data?.attributes?.subtitle}
        </p>

        <div className="flex mt-10">
          <button className="shadowed-btn animated flex justify-center align-middle flex-row w-[220px] px-4 py-2">
            <span className="text-[16.5px] font-bold">
              {research?.data?.attributes?.buttonText}
            </span>

            <span>
              <FontAwesomeIcon
                color="#000000"
                className="ml-4 mt-[4px] w-[10px]"
                icon={faAngleRight}
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Research;
