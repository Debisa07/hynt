import { ISmall, IThumbnail } from "./ImageSizes";

export interface IFormats {
  thumbnail: IThumbnail;
  small: ISmall;
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

export interface IIcon {
  data: IData2;
}

export interface IAttributes2 {
  benefit: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  icon: IIcon;
}

export interface IDatum {
  id: number;
  attributes: IAttributes2;
}

export interface IBenefits {
  data: IDatum[];
}

export interface IAttributes {
  title: string;
  label: string;
  header: string;
  emailPlaceholder: string;
  emailTitle: string;
  passwordPlaceholder: string;
  passwordTitle: string;
  loginText: string;
  termsAndConditionsText: string;
  termsAndConditionHighlight: string;
  privacyPolicyHighlight: string;
  loginButtonText: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  haveAnAccountText: string;
  benefits: IBenefits;
}

export interface IData {
  id: number;
  attributes: IAttributes;
}

export interface IMeta {}

export interface ISignupSection {
  data: IData;
  meta: IMeta;
}
