import { Dispatch } from "redux";

import {
  FetchProduct,
  FetchProductAction,
  ProductType,
} from "../../components/misc/types";

export function fetchProductSuccess(
  productData: ProductType[]
): FetchProductAction {
  return {
    type: FetchProduct,
    payload: {
      product: productData,
    },
  };
}

export function fetchData() {
  return (dispatch: Dispatch) => {
    fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?brand=l%27oreal"
    )
      .then((res) => res.json())
      .then((product) => dispatch(fetchProductSuccess(product)));
  };
}
