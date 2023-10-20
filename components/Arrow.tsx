import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Arrow({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: VoidFunction;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "flex",
        position: "relative",
        flexDirection: "column",
        justifyContent: "center",
        right: "0%",
        marginRight: 3,
        opacity: disabled ? "0" : "1",
        userSelect: "none",
        zIndex: 20,
      }}
    >
      {children}
    </button>
  );
}

export function LeftArrow() {
  const { isFirstItemVisible, scrollPrev, visibleElements, initComplete } =
    React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleElements.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleElements]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollPrev()}>
      <div className="z-50 relative w-[45px] h-[45px] bg-[#D9D9D9] rounded-full flex align-middle justify-center p-2 hover:bg-[#b4b4b4] animated">
        <FaAngleLeft
          size={25}
          color="#ffffff"
          className="relative right-[2px] top-[1px]"
        />
      </div>
    </Arrow>
  );
}

export function RightArrow() {
  const { isLastItemVisible, scrollNext, visibleElements } =
    React.useContext(VisibilityContext);

  // console.log({ isLastItemVisible });
  const [disabled, setDisabled] = React.useState(
    !visibleElements.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleElements]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollNext()}>
      <div className="z-50 relative left-[-90px] w-[45px] h-[45px] bg-[#D9D9D9] rounded-full flex align-middle justify-center p-2 hover:bg-[#b4b4b4] animated">
        <FaAngleRight
          size={25}
          color="#ffffff"
          className="relative left-[2px] top-[1.5px]"
        />
      </div>
    </Arrow>
  );
}
