import { IFormats } from "./ImageSizes";

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

export interface IImage {
  data: IData2;
}

export interface ILocalizations {
  data: any[];
}

export interface IResearchData {
  title: string;
  subtitle: string;
  buttonText: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  image: IImage;
  localizations: ILocalizations;
}

export interface IData {
  id: number;
  attributes: IResearchData;
}

export interface IMeta {}

export interface IResearch {
  data: IData;
  meta: IMeta;
}
