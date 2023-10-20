import { ISmall, IThumbnail } from "./ImageSizes";

export interface IFormats {
  thumbnail: IThumbnail;
  small: ISmall;
}

export interface IAttributes4 {
  name: string;
  alternativeText?: any;
  caption?: any;
  width: number;
  height: number;
  formats: IFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface IData3 {
  id: number;
  attributes: IAttributes4;
}

export interface IIcon {
  data: IData3;
}

export interface IAttributes3 {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  icon: IIcon;
}

export interface IData2 {
  id: number;
  attributes: IAttributes3;
}

export interface IPlatform {
  data: IData2;
}

export interface IAttributes5 {
  title: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
}

export interface IData4 {
  id: number;
  attributes: IAttributes5;
}

export interface ICategory {
  data: IData4[];
}

export interface IAttributes6 {
  text: string;
  color: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
}

export interface IData5 {
  id: number;
  attributes: IAttributes6;
}

export interface ILabelInfo {
  data: IData5;
}

export interface IAttributes7 {
  name: string;
  color: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
}

export interface ITag {
  id: number;
  attributes: IAttributes7;
}

export interface ITags {
  data: ITag[];
}

export interface IThumbnail2 {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: any;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface ILarge {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: any;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface IMedium {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: any;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface ISmall2 {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: any;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface IFormats2 {
  thumbnail: IThumbnail2;
  large: ILarge;
  medium: IMedium;
  small: ISmall2;
}

export interface IAttributes9 {
  name: string;
  alternativeText?: any;
  caption?: any;
  width: number;
  height: number;
  formats: IFormats2;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface IData7 {
  id: number;
  attributes: IAttributes9;
}

export interface IIcon2 {
  data: IData7;
}

export interface IAttributes8 {
  text: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  icon: IIcon2;
}

export interface IData6 {
  id: number;
  attributes: IAttributes8;
}

export interface IResearchData {
  data: IData6;
}

export interface IAttributes2 {
  title: string;
  description: string;
  platformText: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  content: string;
  platform: IPlatform;
  categories: ICategory;
  label_info: ILabelInfo;
  tags: ITags;
  research_data: IResearchData;
}

export interface IProductInfo {
  id: number;
  attributes: IAttributes2;
}

export interface IProducts {
  data: IProductInfo[];
}

export interface IAttributes {
  title: string;
  subtitle: string;
  exploreButtonText: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  products: IProducts;
}

export interface IData {
  id: number;
  attributes: IAttributes;
}

export interface IMeta {}

export interface IRecommendation {
  data: IData;
  meta: IMeta;
}
