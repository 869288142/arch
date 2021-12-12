/**
 * 商品类
 */
import { GoodImp } from "@/domain/good/repository/translators";
import { Tag } from "@/domain/good/repository/model/Tag.model";
import {
  OUT_STACK_STATUS,
  SHOW_IN_LIST_TAG_TYPE,
  DISCOUNT_ACTIVITY_TYPE,
} from "@/shared/contants/good";

export default class Goods implements GoodImp {
  constructor(goods: GoodImp) {
    this.id = goods.id;
    this.name = goods.name;
    this.price = goods.price;
    this.status = goods.status;
    this.activityType = goods.activityType;
    this.description = goods.description;
    this.brandName = goods.brandName;
    this.mainPicUrl = goods.mainPicUrl;
    this.tags = goods.tags;
  }
  id: string;
  name: string;
  price: string;
  status: number;
  activityType: number;
  description: string;
  brandName: string;
  mainPicUrl: string;
  tags: Tag[];

  isOutStock() {
    return this.status && this.status === OUT_STACK_STATUS;
  }

  isDiscountGoods() {
    return this.activityType === DISCOUNT_ACTIVITY_TYPE;
  }

  getShowInListTags() {
    return this.tags.filter((v) => v.type === SHOW_IN_LIST_TAG_TYPE);
  }
}
