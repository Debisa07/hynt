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

export interface ITestimonialPicture {
  data: IData2;
}

export interface IAttributes2 {
  citationText: string;
  testimonialPosition: string;
  companyName: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  testimonialPicture: ITestimonialPicture;
  testimonialName: string;
}

export interface ITestimonialData {
  id: number;
  attributes: IAttributes2;
}

export interface IITestimonials {
  data: ITestimonialData[];
}

export interface IAttributes {
  title: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  testimonials: IITestimonials;
}

export interface IData {
  id: number;
  attributes: IAttributes;
}

export interface IMeta {}

export interface ITestimonialCollection {
  data: IData;
  meta: IMeta;
}
