export interface IThumbnail {
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

export interface ISmall {
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

export interface IData2 {
  id: number;
  attributes: IAttributes2;
}

export interface ILogo {
  data: IData2;
}

export interface IAttributes3 {
  loginText: string;
  signUpText: string;
  searchInputField: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  exploreText: string;
}

export interface IDatum {
  id: number;
  attributes: IAttributes3;
}

export interface ILocalizations {
  data: IDatum[];
}

export interface IAttributes {
  loginText: string;
  signUpText: string;
  searchInputField: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  exploreText: string;
  logo: ILogo;
  localizations: ILocalizations;
}

export interface IData {
  id: number;
  attributes: IAttributes;
}

export interface IMeta {}

export interface IMenubar {
  data: IData;
  meta: IMeta;
}
