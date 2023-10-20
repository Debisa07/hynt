import Image from "next/image";
import { useState } from "react";
import { FILE_URL } from "../../config/urls";
import { IUseCase } from "../../types/Usecase";

interface UseCaseProp {
  usecase?: IUseCase;
}

interface SelectorProp {
  text: string;
  onClick: Function;
  choosen: boolean;
}

const UseCases = ({ usecase }: UseCaseProp) => {
  const [selected, setSelected] = useState(0);

  const SelectorComponent = ({ text, onClick, choosen }: SelectorProp) => {
    return (
      <div className="col-span-1 ">
        <p
          onClick={() => {
            onClick();
          }}
          className={selected === 0 ? selectedStyle : unselectedStyle}
        >
          {choosen ? (
            <span className="w-[7px] h-[36px] bg-[#F1C093] rounded-xl"></span>
          ) : (
            <span className="w-[7px] h-[36px] bg-[transparent] rounded-xl"></span>
          )}
          <span className="ml-3 text-[17px]">{text}</span>
        </p>
      </div>
    );
  };

  const selectedStyle =
    "font-bold text-[20px] transition-all ease-out transition-medium text-black pl-4 cursor-pointer py-[8px] spacing-[1rem] tracking-tight flex justidy-center align-middle";
  const unselectedStyle =
    "text-[#959595] text-[20px] pl-4 hover:text-black transition-all ease-out transition-medium cursor-pointer font-bold py-[8px] tracking-tight flex justidy-center align-middle";
  return (
    <div className="container py-3 lg:pl-[150px] xl:pl-[150px] sm:pl-[50px] lg:pr-[150px] xl:pr-[150px] sm:pr-[50px]  mb-[100px] max-w-[100vw] overflow-x-hidden">
      <p className="font-bold text-[30px]">
        {usecase?.data?.attributes?.title ||
          "Explore the No. 1 Platform for Online Marketing Inspiration."}
      </p>
      <p className="text-[#959595] text-[18.5px] font-bold mb-8">
        {usecase?.data?.attributes?.subtitle || "Why they use Hynt."}
      </p>
      <div className="grid grid-cols-4 lg:pl-6 xl:pl-6 sm:lg:pl-2 gap-4">
        <div className="col-span-1 grid grid-cols-1 align-middle content-evenly py-[10px]">
          {usecase?.data?.attributes?.use_cases?.data?.map((usecase, index) => {
            return (
              <SelectorComponent
                key={usecase.id}
                choosen={selected === index}
                onClick={() => {
                  setSelected(index);
                }}
                text={usecase.attributes.title}
              />
            );
          })}
        </div>

        {usecase?.data?.attributes?.use_cases?.data?.map((usecase, index) => {
          return (
            <>
              {selected === index && (
                <div
                  className="col-span-3 mr-10"
                  key={usecase.attributes.image.data.id}
                >
                  <Image
                    className="object-scale-down animate  max-h-[500px]"
                    width={900}
                    height={200}
                    src={`${FILE_URL}${usecase?.attributes?.image?.data?.attributes?.url}`}
                    alt="Hynt Use case"
                  />
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default UseCases;
