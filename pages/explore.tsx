import React, { useContext } from "react";
import FilterComponent from "../components/explore/Filters";
import WideCards from "../components/explore/WideCards";
import NavBar from "../components/navbar/NavBar";
import HyntsComponent from "../components/explore/Hynts";
import Footer from "../components/landing/Footer";
import {
  getAllCategories,
  getAllProductsContent,
  getPlatforms,
  getTags,
} from "../services/explore";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../components/Loading";
import { getFooterContent, getMenuBarContent } from "../services/landing";
import { FilterContext } from "../contexts/FilterContext";
import Head from "next/head";

const ExplorePage = () => {
  const { data: products, isLoading: loadingProducts } = useQuery(
    ["all-products"],
    () => getAllProductsContent()
  );

  const { data: categories, isLoading: loadingCategories } = useQuery(
    ["all-categories"],
    () => getAllCategories()
  );

  const { data: menubar, isLoading: loadingMenuBar } = useQuery(
    ["menubar"],
    () => getMenuBarContent()
  );

  const { data: tags, isLoading: loadingTags } = useQuery(["tags"], () =>
    getTags()
  );

  const { data: platforms, isLoading: loadingPlatforms } = useQuery(
    ["platforms"],
    () => getPlatforms()
  );

  const { data: footer, isLoading: loadingFooter } = useQuery(["footer"], () =>
    getFooterContent()
  );

  const { selectedCategoryId, filterApplied, filteredProducts } =
    useContext(FilterContext);
  const wideElements = (products || [])
    ?.filter(
      (d) => d?.attributes?.label_info?.data?.attributes?.text === "BIG WIN"
    )
    .reverse();

  if (loadingProducts || loadingCategories || loadingMenuBar || loadingFooter) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Head>
        <title>Hynt - Explore Hynts</title>
        <meta name="description" content="Get usefult hynts." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative max-w-[100vw] overflow-x-clip max-h-[100vh] overflow-y-hidden">
        <NavBar menubar={menubar} />
        <div className="h-[1px] bg-[#dddddd]"></div>
        <FilterComponent
          products={products}
          categories={categories}
          tags={tags}
          platforms={platforms}
        />

        <div className="max-h-[80vh] overflow-y-auto">
          {wideElements.length > 0 && <WideCards products={wideElements} />}
          <HyntsComponent
            products={
              filterApplied
                ? filteredProducts
                : selectedCategoryId
                ? (products ?? [])
                    .map((p) => p)
                    .reverse()
                    .filter((p) =>
                      p?.attributes?.categories?.data
                        ?.map((categ) => categ?.id?.toString())
                        .includes(selectedCategoryId)
                    )
                : products?.map((p) => p).reverse()
            }
          />
          <Footer footer={footer} />
        </div>
      </main>
    </div>
  );
};

export default ExplorePage;
