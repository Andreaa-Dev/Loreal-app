import React from "react";
import { Text, View } from "react-native";
import { Image } from "native-base";

import { ProductType } from "../../components/misc/types";

type ProductDataPropType = {
  productData: ProductType;
};
function ProductItem({ productData }: ProductDataPropType) {
  const imageLink = productData.image_link;
  if (productData) {
    return (
      <View>
        <Text>{productData.name}</Text>
        <Text> {productData.description}</Text>
        <Image
          source={{
            uri: imageLink,
          }}
          alt={productData.name}
          size="xl"
        />
        <Text> {productData.price} $</Text>
        <Image source={{ uri: imageLink }} />
      </View>
    );
  }
  return <> </>;
}

export default ProductItem;
