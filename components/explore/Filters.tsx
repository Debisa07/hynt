import Image from "next/image";

import { useContext, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { FaTimes } from "react-icons/fa";
import { ICategory } from "../../types/Category";
import { FILE_URL } from "../../config/urls";
import { FilterContext } from "../../contexts/FilterContext";
import { ITagCollection } from "../../types/Tag";
import { IPlatformsCollection } from "../../types/Platform";
import { IProductInfo } from "../../types/Recommendation";

interface FilterButtonProps {
  image: JSX.Element;
  text: string;
  active?: boolean;
  onClick: Function;
}

interface TagsChipProp {
  text: string;
  selected: boolean;
  color?: string;
}

interface PlatformSelectorProp {
  text: string;
  icon: JSX.Element;
  id: any;
}

const SelectPlatformFields = ({ text, icon, id }: PlatformSelectorProp) => {
  const { selectedPlatforms, setSelectedPlatforms } = useContext(FilterContext);
  return (
    <div>
      <input
        id={id}
        type="checkbox"
        value={id}
        checked={selectedPlatforms.includes(id)}
        onChange={(e) => {
          if (!e.target.checked) {
            setSelectedPlatforms(
              selectedPlatforms.filter((t: any) => t !== id)
            );
          } else {
            setSelectedPlatforms([...selectedPlatforms, id]);
          }
        }}
        className="outline-none text-black ring-0 w-[13px] h-[13px]  bg-gray-100 rounded"
      />
      <label
        htmlFor={id}
        className="ml-2 text-[12px] font-medium relative bottom-[3px] cursor-pointer"
      >
        <span>{text} </span>
        <span>{icon}</span>
      </label>
    </div>
  );
};

const TagsChipButton = ({
  selected = false,
  text,
  color = "#ffffff",
}: TagsChipProp) => {
  return (
    <span
      style={{
        backgroundColor: selected ? color : "transparent",
        border: "1px solid #b8b8b8",
      }}
      className={`animated text-[10px] my-[4px] font-semibold mx-[4px]  px-[12px] py-[2px] rounded-xl text-center cursor-pointer h-[20px]`}
    >
      {text}
    </span>
  );
};

const FilterButton = ({
  image,
  text,
  active = false,
  onClick,
}: FilterButtonProps) => {
  return (
    <div
      onClick={(e) => {
        onClick();
      }}
      className={`animated pt-2 mx-3 cursor-pointer pb-3 ${
        active ? "opacity-100" : "opacity-50"
      } hover:opacity-100`}
    >
      <div
        className={`cursor-pointer insight md:w-[100px] h-[35px] pb-3 flex justify-center align-middle items-center`}
      >
        {image}
      </div>
      <p className="w-[100px] text-center text-[11.5px] font-bold h-[40px] table-cell align-middle">
        {text}
      </p>
      <div
        className={`animated h-[3px] bg-black mx-3 mt-[5px] rounded-lg ${
          active ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </div>
  );
};

interface FilterProps {
  categories?: ICategory[];
  tags?: ITagCollection;
  platforms?: IPlatformsCollection;
  products?: IProductInfo[];
}

const FilterComponent = ({
  categories,
  platforms,
  tags,
  products,
}: FilterProps) => {
  console.log("These are tags", tags);
  const [selected, setSelected] = useState<number | undefined>();
  const [showFilterModal, setShowFilterModal] = useState(false);

  const {
    setSelectedCategoryId,
    selectedTags,
    setSelectedTags,
    researchBased,
    setResearchBased,
    adSpending,
    setAdSpending,
    getProductsBasedOnFilter,
    setFilterApplied,
    setFilteredProducts,
    clearFilter,
  } = useContext(FilterContext);

  const filtered = getProductsBasedOnFilter(products?.map((p) => p).reverse());

  return (
    <div className="pt-5 filter-btn-container">
      <div className="flex justify-center align-middle px-[100px]">
        <FilterButton
          key={0}
          onClick={() => {
            setSelectedCategoryId(undefined);
            setSelected(undefined);
          }}
          active={selected === undefined}
          image={
            <Image
              width={50}
              height={45}
              className="object-scale-down"
              src={
                "https://t4.ftcdn.net/jpg/01/82/60/85/360_F_182608590_P1ghUNnaXh1OU0XvzKKfdiypGFyVm3d1.jpg"
              }
              alt="All selector"
            />
          }
          text={`All`}
        />

        {categories?.map((category, index) => {
          return (
            <FilterButton
              key={category.id}
              onClick={() => {
                setSelectedCategoryId(category.id.toString());
                setSelected(index);
              }}
              active={selected === index}
              image={
                <Image
                  width={30}
                  height={35}
                  className="object-scale-down"
                  src={`${FILE_URL}${
                    category.attributes?.icon?.data?.attributes?.url || " "
                  }`}
                  alt="Hynt Logo"
                />
              }
              text={`${category.attributes?.title}`}
            />
          );
        })}
        <div className="flex justify-start align-middle mt-6 ml-6">
          <button
            onClick={() => setShowFilterModal(true)}
            className="animated filter-btn animated flex justify-center align-middle flex-row px-4 py-[9px] h-[40px] w-[120px]"
          >
            <FontAwesomeIcon
              color="#000000"
              className="w-[12px] relative top-[3px] mr-2"
              icon={faSliders}
            />
            <span className="font-bold">Filter</span>
          </button>
        </div>
        {showFilterModal ? (
          <>
            <div className="justify-center items-start flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto filter-container">
                {/*content*/}
                <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none filter-container pt-6">
                  {/*header*/}
                  <div className="flex items-start justify-between pb-2 pl-16">
                    <div>
                      <h3 className="text-[19px] font-semibold">
                        Advanced Filters
                      </h3>
                      <p className="text-[#b1b1b1] text-[13px]">
                        Use our filters to find what you’re looking for easily.
                      </p>
                    </div>
                    <button
                      className="ml-[100px] border-0 text-[#B6B0B0] hover:text-black animated  close-filter text-xl leading-none font-semibold outline-none focus:outline-none table-cell align-middle"
                      onClick={() => setShowFilterModal(false)}
                    >
                      <FaTimes className="relative left-[7.8px]" />
                    </button>
                  </div>
                  {/* Divider */}
                  <div className="h-[1px] bg-[#dbdbdb] mb-3"></div>
                  {/*body*/}
                  <div className="filter-content">
                    <div className="relative flex-auto pl-16">
                      <p className="font-bold text-[19px]">Tags</p>
                      <p className="text-[10px] text-[#646464] font-medium">
                        Use tags to categorize your hynts .
                      </p>
                      <div className="mb-4 flex flex-wrap max-w-[350px] mt-2">
                        {tags?.data?.map((tag) => {
                          return (
                            <div
                              onClick={() => {
                                if (selectedTags.includes(tag.id)) {
                                  setSelectedTags(
                                    selectedTags.filter(
                                      (t: any) => t !== tag.id
                                    )
                                  );
                                } else {
                                  setSelectedTags([...selectedTags, tag.id]);
                                }
                              }}
                              key={tag.id}
                            >
                              <TagsChipButton
                                selected={selectedTags.includes(tag.id)}
                                color={tag?.attributes?.color || "white"}
                                text={tag?.attributes?.name}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="relative flex-auto pl-16 mt-3">
                      <p className="font-bold text-[19px]">Platforms</p>
                      <p className="text-[10px] text-[#646464] font-medium">
                        Choose one or more platforms you want to work on.
                      </p>
                      <div className="mb-4 pr-6 mt-2 grid grid-cols-3">
                        {platforms?.data?.map((platform) => {
                          return (
                            <SelectPlatformFields
                              id={platform.id}
                              key={platform.id}
                              text={platform?.attributes.name}
                              icon={
                                <Image
                                  className="inline relative bottom-[2px]"
                                  alt="I"
                                  width={18}
                                  height={18}
                                  src={`${FILE_URL}${
                                    platform?.attributes?.icon?.data?.attributes
                                      ?.url ?? ""
                                  }`}
                                />
                              }
                            />
                          );
                        })}
                      </div>
                    </div>

                    <div className="relative pl-16 mt-3 pr-8">
                      <p className="font-bold text-[19px] mb-2">
                        Source of Information
                      </p>
                      <div className="pl-3 flex justify-between align-middle">
                        <div>
                          <p className="font-bold text-[14px] mb-1">
                            Research Based
                          </p>

                          <p className="text-[10px] text-[#646464] font-medium max-w-[300px]">
                            Information you find within Reasearch Based hynts is
                            proven by studies carried out by the best markting
                            schools.
                          </p>
                        </div>

                        <div>
                          <label className="inline-flex relative items-center mr-5 cursor-pointer">
                            <input
                              type="checkbox"
                              value=""
                              onChange={(e) => {
                                setResearchBased(e.target.checked);
                              }}
                              className="sr-only peer"
                              checked={researchBased}
                            />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#A7E192]"></div>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="relative flex-auto pl-16 mt-5 pr-8 mb-6">
                      <p className="font-bold text-[19px] mb-2">Budget</p>
                      <div className="pl-3 flex justify-between align-middle">
                        <div>
                          <p className="font-bold text-[15px] mb-1">
                            No Ad-Spending
                          </p>

                          <p className="text-[10px] text-[#646464] font-medium max-w-[295px]">
                            In order to carry out hynts for ads on Social Media
                            or Google, Ad-Spending is neccessary, which is
                            independent from the implementation itself.
                          </p>
                        </div>

                        <div>
                          <label className="inline-flex relative items-center mr-5 cursor-pointer">
                            <input
                              type="checkbox"
                              onChange={(e) => {
                                setAdSpending(e.target.checked);
                              }}
                              className="sr-only peer"
                              checked={adSpending}
                            />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#A7E192]"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*footer*/}

                  {/* Divider */}
                  <div className="h-[1px] bg-[#dbdbdb] mb-3"></div>

                  <div className="flex items-center justify-between px-[40px] pb-6">
                    <p
                      onClick={() => {
                        clearFilter();
                      }}
                      className="text-[13px] font-bold underline pl-[20px] cursor-pointer"
                    >
                      Delete all
                    </p>
                    <button
                      style={{
                        backgroundColor:
                          filtered.length > 0 ? "#F1C093" : "#bdbdbd",
                      }}
                      className=" normal-case text-white font-bold text-[12px] px-6 py-[6px] rounded mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        if (filtered.length <= 0) return;
                        setFilterApplied(true);
                        setFilteredProducts(filtered);
                        setShowFilterModal(false);
                      }}
                    >
                      {`Show ${filtered.length} hynts`}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default FilterComponent;
