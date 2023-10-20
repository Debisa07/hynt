import Head from "next/head";
import { useEffect, useState } from "react";
import Explore from "../components/landing/Explore";
import Features from "../components/landing/Features";
import LandingIntro from "../components/landing/Landing";
import Research from "../components/landing/Research";
import UseCases from "../components/landing/UseCases";
import NavBar from "../components/navbar/NavBar";
import Testimonial from "../components/landing/Testimonial";
import Footer from "../components/landing/Footer";
import SignUp from "../components/landing/SignUp";
import { GetServerSideProps } from "next/types";
import {
  getAboveFoldContent,
  getFeaturesContent,
  getFooterContent,
  getMenuBarContent,
  getRecommendationContent,
  getResearchContent,
  getSignUpContent,
  getTestimonialContent,
  getUseCasesContent,
} from "../services/landing";

import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../components/Loading";

// interface LandingPageProp {
//   menubar: IMenubar;
//   abovefold: IAboveFold;
//   usecase: IUseCase;
//   recommendation: IRecommendation;
//   features: IFeatureDisplay;
//   research: IResearch;
//   testimonial: ITestimonialCollection;
//   signup: ISignupSection;
//   footer: IFooterSection;
// }

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  const { data: menubar, isLoading: loadingMenuBar } = useQuery(
    ["menubar"],
    () => getMenuBarContent()
  );

  const { data: abovefold, isLoading: loadingAboveFold } = useQuery(
    ["abovefold"],
    () => getAboveFoldContent()
  );

  const { data: usecase, isLoading: loadingUseCase } = useQuery(
    ["usecase"],
    () => getUseCasesContent()
  );

  const { data: recommendation, isLoading: loadingRecommendation } = useQuery(
    ["recommendation"],
    () => getRecommendationContent()
  );

  const { data: features, isLoading: loadingFeature } = useQuery(
    ["features"],
    () => getFeaturesContent()
  );

  const { data: research, isLoading: loadingResearch } = useQuery(
    ["research"],
    () => getResearchContent()
  );

  const { data: testimonial, isLoading: loadingTestimonial } = useQuery(
    ["testimonial"],
    () => getTestimonialContent()
  );

  const { data: signup, isLoading: loadingSignup } = useQuery(["signup"], () =>
    getSignUpContent()
  );

  const { data: footer, isLoading: loadingFooter } = useQuery(["footer"], () =>
    getFooterContent()
  );

  useEffect(() => {
    document.addEventListener("scroll", (event) => {
      setScrolled(true);
    });
  }, []);

  if (
    loadingAboveFold ||
    loadingFeature ||
    loadingFooter ||
    loadingMenuBar ||
    loadingRecommendation ||
    loadingResearch ||
    loadingSignup ||
    loadingTestimonial ||
    loadingTestimonial ||
    loadingTestimonial ||
    loadingUseCase
  ) {
    return <LoadingSpinner />;
  }

  return (
    <div
      onScroll={(event) => {
        console.log("Scroll from div");
      }}
    >
      <Head>
        <title>Hynt - Home page</title>
        <meta name="description" content="Get useful hynts!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="relative max-w-[100vw] overflow-x-clip"
        onScroll={(event) => {
          console.log("scrolled from main");
          setScrolled(true);
        }}
      >
        <NavBar scrolled={scrolled} menubar={menubar} />
        <LandingIntro abovefold={abovefold} />
        <UseCases usecase={usecase} />
        <Explore recommendation={recommendation} />
        <Features features={features} />
        <Research research={research} />
        <Testimonial testimonials={testimonial} />
        <SignUp signup={signup} />
        <Footer footer={footer} />
      </main>
    </div>
  );
}
