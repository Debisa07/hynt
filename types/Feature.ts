import { ILarge, IMedium, ISmall, IThumbnail } from "./ImageSizes";

export interface IFormats {
  thumbnail: IThumbnail;
  small: ISmall;
  medium: IMedium;
  large: ILarge;
}

export interface IAttributes3 {
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

export interface IData2 {
  id: number;
  attributes: IAttributes3;
}

export interface IImage {
  data: IData2;
}

export interface IFeature {
  chipText: string;
  chipColor?: any;
  title: string;
  highlightedText: string;
  highlighColor: string;
  description: string;
  buttonText: string;
  header: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  image: IImage;
}

export interface IFeatureData {
  id: number;
  attributes: IFeature;
}

export interface IFeatures {
  data: IFeatureData[];
}

export interface IAttributes {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  features: IFeatures;
}

export interface IData {
  id: number;
  attributes: IAttributes;
}

export interface IMeta {}

export interface IFeatureDisplay {
  data: IData;
  meta: IMeta;
}
