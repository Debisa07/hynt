import leftImage from "../../assets/images/side-images/left_side.png";
import rightImage from "../../assets/images/side-images/right_side.png";
import Image from "next/image";
import { colors } from "../../styles/colors/colors";
import buildTrustIcon from "../../assets/images/icons/build-trust.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { IAboveFold } from "../../types/AboveFold";
import { FILE_URL } from "../../config/urls";

interface FilterButtonProp {
  image: JSX.Element;
  title: string;
}

const FilterButton = ({ image, title }: FilterButtonProp) => {
  return (
    <div className="animated relative bottom-0 categ-container mb-4 md:mb-0 mx-6">
      <div className="insight categ-btns  relative cursor-pointer insight w-[150px] h-[150px] md:w-[92px] md:h-[92px] bg-white rounded-xl flex justify-center align-middle items-center">
        {image}
      </div>
      <p className="md:max-w-[100px] text-center mt-[9.6px]  text-[12.5px] font-bold">
        <span>{title}</span>
      </p>
    </div>
  );
};

interface AboveFoldProp {
  abovefold?: IAboveFold;
}

const LandingIntro = ({ abovefold }: AboveFoldProp) => {
  const description = abovefold?.data?.attributes?.description
    ? `<span class="inline-block max-w-[600px] text-[16px] lg:text-[21px] xl:text-[21px] md:text-[18px]">
    ${abovefold?.data?.attributes?.description}
  </span>`.replace(
        abovefold?.data?.attributes?.highlightedText,
        ` <span class=text-[#F1C093]>${abovefold?.data?.attributes?.highlightedText}</span> `
      )
    : `
  <span class="inline-block max-w-[600px] text-[16px] lg:text-[21px] xl:text-[21px] md:text-[18px]">
  We provide <span class="text-[#F1C093]">free access</span> to a
  collection of the best ideas, tips and strategies perfectly shaped
  for your needs.
</span>
  `;

  return (
    <div className="relative min-h-[90vh] mt-10 pb-10 grid grid-cols-4 align-middle justify-between content-center bg-[#fafafa] max-w-[100vw] overflow-x-hidden">
      <div className="left-images col-span-1">
        <div className="relative h-[100%]">
          <Image
            className="relative"
            width={230}
            height={230}
            src={
              abovefold?.data?.attributes?.leftImage?.data?.attributes?.url
                ? `${FILE_URL}${
                    abovefold?.data?.attributes?.leftImage?.data?.attributes
                      ?.url || ""
                  }`
                : leftImage
            }
            alt="Stacked Hynts"
          />
        </div>
      </div>
      <div className="text-content col-span-2 flex flex-col">
        <p className="text-center font-bold my-0 leading-tight mb-6">
          <span className="inline-block text-[35px] xl:text-[65px] lg:text-[65px] md:text-[55px] text-[#101010]">
            {abovefold?.data?.attributes?.header ||
              "Get a hynt to grow your business."}
          </span>
        </p>

        {/* <p className=""> */}
        <div
          className="text-[#636060] text-center text-[21px] font-bold mb-6"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
        {/* </p> */}

        <div className=" insights flex justify-center align-middle md:grid-cols-3  sm:grid-cols-1 mt-10 mb-12 justify-items-center">
          {abovefold?.data?.attributes?.categories?.data?.map((category) => {
            return (
              <FilterButton
                key={category.id}
                title={category.attributes.title}
                image={
                  <Image
                    width={41}
                    height={35}
                    className=""
                    src={
                      category.attributes.icon.data.attributes.url
                        ? `${FILE_URL}${category.attributes.icon.data.attributes.url}`
                        : buildTrustIcon
                    }
                    alt="Category of hynts"
                  />
                }
              />
            );
          })}
        </div>

        <div className="flex justify-center flex-row">
          <button
            style={{ borderRadius: 6 }}
            className={`animated w-[185px] animated flex justify-center align-middle flex-row h-[41.25px] text-white font-bold bg-[${colors.bgLightOrange}] hover:bg-[#F8A985] font-bold py-2 px-4 text-center`}
          >
            <span className="font-bold text-[16px]">
              {abovefold?.data?.attributes?.buttonText || "Get Inspired"}
            </span>

            <span>
              <FontAwesomeIcon
                color="#ffffff"
                className="ml-3 w-[10px] relative top-[3.7px]"
                icon={faAngleRight}
              />
            </span>
            {/* </button> */}
          </button>
        </div>
      </div>
      <div className="right-images col-span-1">
        <div className="relative h-[100%] ">
          <Image
            className="absolute right-0"
            width={230}
            height={230}
            src={
              abovefold?.data?.attributes?.rightImage?.data?.attributes?.url
                ? `${FILE_URL}${abovefold?.data?.attributes?.rightImage?.data?.attributes?.url}`
                : rightImage
            }
            alt="Stacked Hynts"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingIntro;
