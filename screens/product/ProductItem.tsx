import React from "react";
import { Text } from "react-native";

import { ProductType } from "../../components/misc/types";

type ProductDataPropType = {
  productData: ProductType;
};
function ProductItem({ productData }: ProductDataPropType) {
  return <Text>{productData.name}</Text>;
}

export default ProductItem;
