import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Image } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

import { ProductType } from "../../components/misc/types";

type ProductDataPropType = {
  productData: ProductType;
};
function ProductItem({ productData }: ProductDataPropType) {
  const imageLink = productData.image_link;
  if (productData) {
    return (
      <View style={styles.container}>
        <Text bold>{productData.name}</Text>
        <Text isTruncated maxW="300" w="80%">
          {productData.description}
        </Text>
        <Image
          source={{
            uri: imageLink,
          }}
          alt={productData.name}
          size="xl"
        />
        <Text> {productData.price} $</Text>
        <Image source={{ uri: imageLink }} />
        <FontAwesome name="heart" size={24} color="black" />
      </View>
    );
  }
  return <> </>;
}

export default ProductItem;

const styles = StyleSheet.create({
  container: { marginTop: 10, marginBottom: 10 },
  title: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
  },
});
