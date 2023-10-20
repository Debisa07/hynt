import axios from "axios";
import { BASE_URL } from "../config/urls";
import { ICategory } from "../types/Category";
import { IPlatformsCollection } from "../types/Platform";
import { IProductInfo } from "../types/Recommendation";
import { ITagCollection } from "../types/Tag";

export const getAllProductsContent = async () => {
  const response = await axios.get(`${BASE_URL}/products`, {
    params: {
      populate: "research_data.icon,tags,categories,platform.icon,label_info",
    },
  });
  return response.data?.data as IProductInfo[];
};

export const getAllCategories = async () => {
  const response = await axios.get(`${BASE_URL}/categories`, {
    params: {
      populate: "*",
    },
  });
  return response.data?.data as ICategory[];
};

export const getTags = async () => {
  const response = await axios.get(`${BASE_URL}/tags`, {
    params: {
      populate: "*",
    },
  });
  return response.data as ITagCollection;
};

export const getPlatforms = async () => {
  const response = await axios.get(`${BASE_URL}/platforms`, {
    params: {
      populate: "*",
    },
  });
  return response.data as IPlatformsCollection;
};
