import { Tag } from "./Tag.model";


export interface GoodDTO {
  id: string;
  goodsName: string;
  price: number;
  status: number;
  activityType: number;
  desc: string;
  brand: string;
  relatedModelId: string;
  mainPic: string;
  tag: Tag[];
  relatedModelImg: null | string;
}
