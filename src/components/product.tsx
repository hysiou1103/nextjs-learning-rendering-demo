// 透過增加 setTimeout 模擬網路請求延遲，觀察 network 中 product-detail 在加上 suspense 前後 Waiting for server response 時間的差異

export const Product = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div>Product</div>;
};
