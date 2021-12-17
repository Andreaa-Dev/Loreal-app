export type ProductType = {
  id: number;
  name: string;
  price: number;
  imageLink: string;
  description: string;
};

export const FetchProduct = "fetchProduct";

export type FetchProductAction = {
  type: typeof FetchProduct;
  payload: {
    product: ProductType[];
  };
};

export type AllAction = FetchProductAction;

export type ProductState = {
  product: ProductType[];
};

export type AppState = {
  productState: ProductState;
};
