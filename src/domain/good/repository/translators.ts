export interface Tag {
    type: number;
    title: string;
}

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
