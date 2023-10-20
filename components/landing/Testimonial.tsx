import { useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "../Arrow";
import usePreventBodyScroll from "./useScroll";
import { TestimonialCard } from "../TestimonialCard";
import { ITestimonialCollection } from "../../types/Tesitimonial";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

interface TestimonialsProp {
  testimonials?: ITestimonialCollection;
}

const Testimonial = ({ testimonials }: TestimonialsProp) => {
  // console.log(testimonials);
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

  const getItems = () =>
    Array(10)
      .fill(0)
      .map((_, ind) => ({ id: getId(ind) }));

  const [items] = useState(getItems);

  return (
    <div className="p-3 lg:pl-[150px] xl:pl-[150px] mt-10 max-w-[100vw] overflow-x-hidden">
      <p className="font-bold text-[30px] mb-14">What others say.</p>

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
            {(testimonials?.data?.attributes?.testimonials?.data || []).map(
              (testimonial) => {
                return (
                  <TestimonialCard
                    testimonial={testimonial}
                    key={testimonial.id}
                  />
                );
              }
            )}
          </ScrollMenu>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
