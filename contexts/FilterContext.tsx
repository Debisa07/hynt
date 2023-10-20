import React, { createContext, useState } from "react";
import { IProductInfo } from "../types/Recommendation";

export const FilterContext = createContext<any>({});

const FilterContextProvider = ({ children }: any) => {
  const [selectedProduct, setSelectedProduct] = useState<
    IProductInfo | undefined
  >();
  const [selectedCategoryId, setSelectedCategoryId] = useState<any>();
  const [selectedTags, setSelectedTags] = useState<any[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProductInfo[]>([]);
  const [researchBased, setResearchBased] = useState(false);
  const [adSpending, setAdSpending] = useState(false);
  const [filterApplied, setFilterApplied] = useState(false);
  const clearFilter = () => {
    setSelectedTags([]);
    setSelectedPlatforms([]);
    setFilteredProducts([]);
    setResearchBased(false);
    setAdSpending(false);
    setFilterApplied(false);
  };
  const getProductsBasedOnFilter = (products: IProductInfo[]) => {
    if (selectedCategoryId) {
      products = products.filter((p) =>
        p?.attributes?.categories?.data
          ?.map((categ) => categ?.id?.toString())
          .includes(selectedCategoryId)
      );
    }
    if (selectedTags.length > 0) {
      products = products.filter((product) =>
        selectedTags?.some((tag) =>
          product?.attributes?.tags?.data?.map((t) => t.id).includes(tag)
        )
      );
    }

    if (selectedPlatforms.length > 0) {
      products = products.filter((product) =>
        selectedPlatforms.includes(product?.attributes?.platform?.data?.id)
      );
    }

    if (researchBased) {
      products = products.filter(
        (product) => product?.attributes?.research_data?.data?.id != null
      );
    }

    return products;
  };

  return (
    <FilterContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        selectedTags,
        setSelectedTags,
        selectedPlatforms,
        setSelectedPlatforms,
        researchBased,
        setResearchBased,
        adSpending,
        setAdSpending,
        selectedCategoryId,
        setSelectedCategoryId,
        getProductsBasedOnFilter,
        filteredProducts,
        setFilteredProducts,
        filterApplied,
        setFilterApplied,
        clearFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
