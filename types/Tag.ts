export interface IAttributes {
  name: string;
  color: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
}

export interface ITag {
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

export interface ITagCollection {
  data: ITag[];
  meta: IMeta;
}
