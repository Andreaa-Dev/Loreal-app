export type ProductType = {
  id: number;
  name: string;
  price: number;
  image_link: string;
  description: string;
};

export type UserInformationType = {
  email: string;
  password: string;
};

export const FetchProduct = "fetchProduct";
export const AddUserInformation = "addUserInformation";

export type FetchProductAction = {
  type: typeof FetchProduct;
  payload: {
    product: ProductType[];
  };
};

export type AddUserInformationAction = {
  type: typeof AddUserInformation;
  payload: {
    userInformation: UserInformationType;
  };
};

export type AllAction = FetchProductAction | AddUserInformationAction;

export type ProductState = {
  product: ProductType[];
};

export type UserState = {
  userInformation: UserInformationType;
};

export type AppState = {
  productState: ProductState;
  userState: UserState;
};
