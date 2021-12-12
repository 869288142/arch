import { GoodDTO } from "./model/Good.model";
import { Tag } from "./model/Tag.model";

export interface GoodImp {
    id: string;
    name: string;
    price: string;
    status: number;
    activityType: number;
    description: string;
    brandName: string;
    mainPicUrl: string;
    tags: Tag[];
}

export function goodsTranslator({
  id,
  goodsName,
  price,
  status,
  activityType,
  desc,
  brand,
  relatedModelId,
  mainPic,
  tag,
  relatedModelImg,
}: GoodDTO): GoodImp {
  return {
    id,
    name: goodsName,
    price: (price / 100).toFixed(2),
    status,
    activityType,
    description: desc,
    brandName: brand,
    mainPicUrl: mainPic,
    tags: tag,
  };
}
