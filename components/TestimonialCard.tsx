// import React from "react";

// type Props = {};

// const TestimonialCard = (props: Props) => {
//   return (
//     <div className="relative">
//       <p>Company</p>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iusto
//         consequuntur modi pariatur, veniam ut inventore labore repellat nam
//         blanditiis, cum placeat sapiente.
//       </p>
//       <p>Person X/Y, Position in Firma</p>
//       <div className="absolute w-[50px] h-[50px] bg-red-50"></div>
//     </div>
//   );
// };

// export default TestimonialCard;

import { faFilter, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { ITestimonialData } from "../types/Tesitimonial";

interface TestimonialProp {
  title?: string;
  itemId?: string;
  testimonial: ITestimonialData;
}

export function TestimonialCard({
  title,
  itemId,
  testimonial,
}: TestimonialProp) {
  const visibility = React.useContext(VisibilityContext);

  // const visible = visibility.isItemVisible(itemId);

  return (
    <div className="w-[475px] h-[210px] my-2 flex align-middle justify-start relative bottom-0 hover:bottom-[5px] animated cursor-pointer">
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.071) 0px 5px 15px 0px",
          borderRadius: 15,
        }}
        className="w-[385px] h-[190px] bg-white py-[25px] relative pr-[85px] testimony-shadow pl-[45px] z-10"
      >
        <p className="text-lg font-[600] text-[16px] mb-4 relative z-10 ">
          {testimonial?.attributes?.companyName}
        </p>
        <p className="text-[11px] font-[500] mb-[18px] relative z-10 h-[53px]">
          {testimonial?.attributes?.citationText}
        </p>
        <p className="font-[600] text-[12px] relative mb-4 z-10">
          {`${testimonial?.attributes?.testimonialName}, ${testimonial?.attributes?.testimonialPosition} in ${testimonial?.attributes?.companyName}`}
        </p>
        <div className="absoulute left-[0px] top-[0px] translate-x-[-17%] translate-y-[-53%] relative z-0">
          <span className="text-[#f3f3f3] text-[160px] z-0">{"❞"}</span>
        </div>
        <div className="round-shadow absolute w-[100px] h-[110px] right-[0px] translate-x-[50%] top-[50%] translate-y-[-50%] bg-white"></div>
      </div>
    </div>
  );
}
