import { ILarge, IMedium, ISmall, IThumbnail } from "./ImageSizes";

export interface IFormats {
  thumbnail: IThumbnail;
  large: ILarge;
  medium: IMedium;
  small: ISmall;
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

export interface IData {
  id: number;
  attributes: IAttributes2;
}

export interface IIcon {
  data: IData;
}

export interface ILocalizations {
  data: any[];
}

export interface IAttributes {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  icon: IIcon;
  localizations: ILocalizations;
}

export interface IPlatform {
  id: number;
  attributes: IAttributes;
}

export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface IMeta {
  pagination: IPagination;
}

export interface IPlatformsCollection {
  data: IPlatform[];
  meta: IMeta;
}
