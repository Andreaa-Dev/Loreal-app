import {
  AllAction,
  FetchProduct,
  ProductState,
} from "../../components/misc/types";

const initialState: ProductState = { product: [] };
export default function product(
  state = initialState,
  action: AllAction
): ProductState {
  switch (action.type) {
    case FetchProduct:
      return {
        ...state,
        product: action.payload.product,
      };
    default:
      return state;
  }
}
