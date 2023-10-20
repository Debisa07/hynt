import { ILarge, IMedium, ISmall, IThumbnail } from "./ImageSizes";

export interface IFormats {
  thumbnail: IThumbnail;
  small: ISmall;
  medium: IMedium;
  large: ILarge;
}

export interface IAttributes2 {
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
  attributes: IAttributes2;
}

export interface ILeftImage {
  data: IData2;
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

export interface IMedium2 {
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

export interface ILarge2 {
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
  medium: IMedium2;
  small: ISmall2;
  large: ILarge2;
}

export interface IAttributes3 {
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

export interface IData3 {
  id: number;
  attributes: IAttributes3;
}

export interface IRightImage {
  data: IData3;
}

export interface IThumbnail3 {
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

export interface IFormats3 {
  thumbnail: IThumbnail3;
}

export interface IAttributes5 {
  name: string;
  alternativeText?: any;
  caption?: any;
  width: number;
  height: number;
  formats: IFormats3;
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

export interface IData4 {
  id: number;
  attributes: IAttributes5;
}

export interface Icon {
  data: IData4;
}

export interface IAttributes4 {
  title: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  icon: Icon;
}

export interface IDatum {
  id: number;
  attributes: IAttributes4;
}

export interface Categories {
  data: IDatum[];
}

export interface IAttributes {
  header: string;
  description: string;
  buttonText: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  highlightedText: string;
  highlightColor: string;
  leftImage: ILeftImage;
  rightImage: IRightImage;
  categories: Categories;
}

export interface IData {
  id: number;
  attributes: IAttributes;
}

export interface IMeta {}

export interface IAboveFold {
  data: IData;
  meta: IMeta;
}
