import axios from "axios";
import { BASE_URL } from "../config/urls";
import { IAboveFold } from "../types/AboveFold";
import { IFeatureDisplay } from "../types/Feature";
import { IFooterSection } from "../types/Footer";
import { IMenubar } from "../types/Menubar";
import { IRecommendation } from "../types/Recommendation";
import { IResearch } from "../types/Research";
import { ISignupSection } from "../types/Signup";
import { ITestimonialCollection } from "../types/Tesitimonial";
import { IUseCase } from "../types/Usecase";

export const getMenuBarContent = async () => {
  const response = await axios.get(`${BASE_URL}/menubar`, {
    params: { populate: "*" },
  });
  return response.data as IMenubar;
};

export const getAboveFoldContent = async () => {
  const response = await axios.get(`${BASE_URL}/above-fold`, {
    params: { populate: "leftImage,rightImage,categories.icon" },
  });
  return response.data as IAboveFold;
};

export const getUseCasesContent = async () => {
  const response = await axios.get(`${BASE_URL}/usecase-display`, {
    params: { populate: "use_cases.image" },
  });
  return response.data as IUseCase;
};

export const getRecommendationContent = async () => {
  const response = await axios.get(`${BASE_URL}/recommendation`, {
    params: {
      populate:
        "products.research_data.icon,products.tags,products.label_info,products.categories,products.platform.icon",
    },
  });
  return response.data as IRecommendation;
};

export const getFeaturesContent = async () => {
  const response = await axios.get(`${BASE_URL}/features-display`, {
    params: {
      populate: "features.image",
    },
  });
  return response.data as IFeatureDisplay;
};

export const getResearchContent = async () => {
  const response = await axios.get(`${BASE_URL}/research`, {
    params: {
      populate: "image",
    },
  });
  return response.data as IResearch;
};

export const getTestimonialContent = async () => {
  const response = await axios.get(`${BASE_URL}/testimonials-display`, {
    params: {
      populate: "testimonials.testimonialPicture",
    },
  });
  return response.data as ITestimonialCollection;
};

export const getSignUpContent = async () => {
  const response = await axios.get(`${BASE_URL}/signup-section`, {
    params: {
      populate: "benefits.icon",
    },
  });
  return response.data as ISignupSection;
};

export const getFooterContent = async () => {
  const response = await axios.get(`${BASE_URL}/footer`, {
    params: {
      populate: "social_links.icon",
    },
  });
  return response.data as IFooterSection;
};
