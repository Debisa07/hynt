import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useContext, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import Footer from "../landing/Footer";

import { VisibilityContext, ScrollMenu } from "react-horizontal-scrolling-menu";
import { IProductInfo } from "../../types/Recommendation";
import { ProductCard } from "../Card";
import { getFooterContent } from "../../services/landing";
import { useQuery } from "@tanstack/react-query";
import { FilterContext } from "../../contexts/FilterContext";
import LargeProductCard from "./LargeProductCard";
import { LeftArrow, RightArrow } from "../Arrow";
import { getRelatedProducts } from "./WideCards";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

interface HyntsProp {
  products?: IProductInfo[];
}

const HyntsComponent = ({ products }: HyntsProp) => {
  const [showProductModal, setShowProductModal] = useState(false);

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

  const shadowRef = useRef<any>();
  const titleRef = useRef<any>();
  const [titleFontSize, setTitleFontSize] = useState(30);
  const scrollElement = useRef<any>(null);

  const [showShadow, setShowShadow] = useState(false);

  const { data: footer, isLoading: loadingFooter } = useQuery(["footer"], () =>
    getFooterContent()
  );

  const { selectedProduct: prod, setSelectedProduct } =
    useContext(FilterContext);
  const selectedProduct = prod as IProductInfo | undefined;

  return (
    <div className="md:pl-[100px] lg:pl-[150px] max-w-[100vw] md:pr-[60px] lg:pr-[100px]">
      <p className="font-bold text-[22px] mt-4">All hynts.</p>
      <div className="hynts-container relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {products?.length === 0 && (
          <div className="my-10">
            <p className="font-bold text-[16px] text-[#444]">
              No Hynt available for this selection!
            </p>
          </div>
        )}
        {(products || []).map((product) => {
          return (
            <div
              onClick={() => {
                setSelectedProduct(product);
                setShowProductModal(true);
              }}
              key={product.id}
            >
              <ProductCard itemId="" title="" product={product} />
            </div>
          );
        })}
      </div>

      <>
        <div
          style={{
            opacity: showProductModal ? 1 : 0,
            pointerEvents: showProductModal ? "all" : "none",
          }}
          className="justify-center animated items-start flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-full mx-auto pt-6 bg-[#444444ce] overflow-y-auto">
            {/* TOP BUTTONS */}
            <div className="flex justify-between align-middle mx-4 my-1 sticky top-3 z-20">
              <button
                style={{ opacity: showShadow ? 0 : 1 }}
                onClick={() => {
                  if (showShadow) return;
                  setShowShadow(false);
                  scrollElement.current.scrollTo({
                    left: 0,
                    top: 0,
                  });
                  setShowProductModal(false);
                }}
                className="animated back-to-explore-btn px-4 animated flex justify-center align-bottom bg-white flex-row h-[34px] rounded-md border-[1.5px] border-[#e4e4e4]"
              >
                <span>
                  <FontAwesomeIcon
                    color="#000000"
                    className="relative top-[4px] mr-2"
                    icon={faAngleLeft}
                  />
                </span>

                <span className="font-bold text-sm relative top-[6.5px]">
                  Back to Explore
                </span>
              </button>
              <button
                // style={{ opacity: showShadow ? 0 : 1 }}
                className="relative bottom-[8px] border-[1.5px] border-[#e4e4e4] text-[#B6B0B0] bg-white hover:text-black animated  close-product-card text-xl leading-none font-semibold outline-none focus:outline-none table-cell align-middle mb-1"
                onClick={() => {
                  // if (showShadow) return;
                  setShowShadow(false);
                  scrollElement.current.scrollTo({
                    left: 0,
                    top: 0,
                  });
                  setShowProductModal(false);
                }}
              >
                <FaTimes
                  size={22}
                  color="#686868"
                  className="relative left-[7.8px]"
                />
              </button>
            </div>

            <div
              ref={scrollElement}
              onScroll={(e) => {
                let distanceToTop =
                  titleRef?.current.getBoundingClientRect().top;
                // (30/240) * distanceFromTop
                // setTitleFontSize((30 / 240) * distanceToTop);

                if (distanceToTop < 115) {
                  setTitleFontSize(20);
                  setShowShadow(true);
                } else {
                  setTitleFontSize(30);
                  setShowShadow(false);
                }
              }}
              style={{
                borderRadius: "30px 30px 0px 0px",
                scrollBehavior: "smooth",
              }}
              className="bg-white relative h-[90vh] overflow-y-auto"
            >
              {/* LABEL CONTENT (BIG HYNT and QUICK HYNT */}
              {selectedProduct?.attributes?.label_info?.data && (
                <div className="z-20 flex flex-col w-full p-0 outline-none focus:outline-none sticky top-0">
                  {/*header*/}
                  <div
                    style={{ borderRadius: "0px 0px 0px 0px" }}
                    className="bg-[#F1C093] w-[100%] text-center text-white text-[14px] font-bold py-[5px] h-[30px]"
                  >
                    {
                      selectedProduct?.attributes?.label_info?.data?.attributes
                        ?.text
                    }
                  </div>
                </div>
              )}

              <div
                style={{
                  backgroundColor: "#ffffff",
                  boxShadow: showShadow ? "0 4px 7px -1px #d8d8d8" : "",
                }}
                ref={shadowRef}
                className="h-[80px] sticky top-0 z-10 animated"
              ></div>

              {
                <button
                  style={{ opacity: showShadow ? 1 : 0 }}
                  onClick={() => {
                    setShowShadow(false);
                    scrollElement.current.scrollTo({
                      left: 0,
                      top: 0,
                    });
                    setShowProductModal(false);
                  }}
                  className="z-30 sticky top-[36px] ml-8 animated back-to-explore-btn px-4 animated flex justify-center align-bottom bg-white flex-row h-[34px] rounded-md border-[1.5px] border-[#e4e4e4]"
                >
                  <span>
                    <FontAwesomeIcon
                      color="#000000"
                      className="relative top-[4px] mr-2"
                      icon={faAngleLeft}
                    />
                  </span>

                  <span className="font-bold text-sm relative top-[6px]">
                    Back
                  </span>
                </button>
              }

              {/* CONTENT */}
              {selectedProduct && (
                <LargeProductCard
                  selectedProduct={selectedProduct}
                  showShadow={showShadow}
                  titleFontSize={titleFontSize}
                  titleRef={titleRef}
                  key={selectedProduct?.id}
                />
              )}

              {selectedProduct &&
                getRelatedProducts(products || [], selectedProduct).length >
                  0 && (
                  <div className="ml:10 md:ml-[133px] mt-12 mb-8">
                    <p className="ml-[70px] font-bold text-xl mb-2">
                      Suggestion for More
                    </p>
                    <ScrollMenu
                      LeftArrow={LeftArrow}
                      RightArrow={RightArrow}
                      onWheel={onWheel}
                    >
                      {getRelatedProducts(products || [], selectedProduct).map(
                        (product) => {
                          return (
                            <div
                              onClick={() => {
                                scrollElement.current.scrollTo({
                                  left: 0,
                                  top: 0,
                                });
                                setSelectedProduct(product);
                              }}
                              key={product.id}
                              className="mx-2"
                            >
                              <ProductCard
                                itemId=""
                                title=""
                                product={product}
                              />
                            </div>
                          );
                        }
                      )}
                    </ScrollMenu>
                  </div>
                )}

              <div className="bg-white relative">
                <Footer footer={footer} />
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default HyntsComponent;
