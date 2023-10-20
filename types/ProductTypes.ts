export interface IAttributes2 {
  text: string;
  color: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
}

export interface IData {
  id: number;
  attributes: IAttributes2;
}

export interface ILabelInfo {
  data: IData;
}

export interface IAttributes3 {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
}

export interface IData2 {
  id: number;
  attributes: IAttributes3;
}

export interface IPlatform {
  data: IData2;
}

export interface IAttributes4 {
  name: string;
  color: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
}

export interface IDatum {
  id: number;
  attributes: IAttributes4;
}

export interface ITags {
  data: IDatum[];
}

export interface IAttributes5 {
  title: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
}

export interface IData3 {
  id: number;
  attributes: IAttributes5;
}

export interface ICategory {
  data: IData3;
}

export interface ILocalizations {
  data: any[];
}

export interface IAttributes {
  title: string;
  description: string;
  platformText: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  content: string;
  label_info: ILabelInfo;
  platform: IPlatform;
  tags: ITags;
  category: ICategory;
  localizations: ILocalizations;
}

export interface IProduct {
  id: number;
  attributes: IAttributes;
}
