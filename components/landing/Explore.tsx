import { useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "../Arrow";
import { ProductCard } from "../Card";
import usePreventBodyScroll from "./useScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { IRecommendation } from "../../types/Recommendation";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

interface ExploreProp {
  recommendation?: IRecommendation;
}

const Explore = ({ recommendation }: ExploreProp) => {
  function onWheel(
    apiObj: scrollVisibilityApiType,
    ev: React.WheelEvent
  ): void {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
      ev.stopPropagation();
      return;
    }

    if (ev.deltaY < 0) {
      apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
      apiObj.scrollPrev();
    }
  }

  const { disableScroll, enableScroll } = usePreventBodyScroll();
  const elemPrefix = "test";

  const getId = (index: number) => `${elemPrefix}${index}`;

  return (
    <div className="p-3 lg:pl-[150px] xl:pl-[150px] max-w-[100vw] overflow-x-hidden">
      <p className="font-bold text-[30px]">{recommendation?.data?.attributes?.title}</p>
      <p className="text-[#959595] text-[18.5px] font-bold mb-14 ">
        {recommendation?.data?.attributes?.subtitle}
      </p>

      <div className="">
        <div
          className="mb-4 relative w-[92vw] overflow-x-hidden"
          onMouseEnter={disableScroll}
          onMouseLeave={enableScroll}
        >
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            onWheel={onWheel}
          >
            {[
              ...(recommendation?.data.attributes.products.data.map(
                (product) => product
              ) || []),
            ].map((product) => (
              <ProductCard
                key={product.id}
                itemId={product.id.toString()}
                title={product.attributes.title}
                product={product}
              />
            ))}
          </ScrollMenu>
        </div>
        <div className="flex justify-center align-middle mt-10">
          <button className="shadowed-btn shadowed-btn animated flex justify-center align-middle flex-row px-6 py-[10px]">
            <span className="font-bold">
              {recommendation?.data?.attributes?.exploreButtonText ||
                "Explore More"}
            </span>
            <span>
              <FontAwesomeIcon
                color="#000000"
                className="w-[10px] ml-[12px] relative top-[4px]"
                icon={faAngleRight}
              />
            </span>
          </button>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Explore;
