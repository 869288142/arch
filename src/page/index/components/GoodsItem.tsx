export default ({ goods }) => {
  return (
    <div class="border-b border-gray-500 border-solid">
      <div class="flex items-center">
        <img class="w-[50px] h-[50px]" src={goods.mainPicUrl} alt="" />
        <div>{goods.name}</div>
        {goods.isOutStock() && (
          <span class="bg-pink-200 text-[white] text-[12px] ml-[20px]">
            已无货
          </span>
        )}
      </div>
      <div class="flex justify-between">
        {goods.isDiscountGoods() ? (
          <span class="text-[red]">特价：{goods.price} 元</span>
        ) : (
          <span>价格：{goods.price} 元</span>
        )}
        <div>
          {goods.getShowInListTags().map((v) => {
            return (
              <span class="bg-gray-400 text-[white] text-[13px] ml-[5px]">
                {v.title}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
