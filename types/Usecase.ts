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

export interface Image {
  data: IData2;
}

export interface IAttributes2 {
  title: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  image: Image;
}

export interface IDatum {
  id: number;
  attributes: IAttributes2;
}

export interface IUseCases {
  data: IDatum[];
}

export interface IAttributes {
  title: string;
  subtitle: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  use_cases: IUseCases;
}

export interface IData {
  id: number;
  attributes: IAttributes;
}

export interface IMeta {}

export interface IUseCase {
  data: IData;
  meta: IMeta;
}
