import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, View } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import { Flex, Spacer } from "native-base";

import { AppState } from "../../components/misc/types";
import { fetchData } from "../../redux/action/product";
import ProductItem from "./ProductItem";

function ProductPage() {
  const dispatch = useDispatch();
  const productData = useSelector((state: AppState) => {
    return state.productState.product;
  });

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <View>
      <Text>product</Text>
      {productData.map((item) => {
        return <ProductItem key={item.id} productData={item} />;
      })}
    </View>
  );
}

export default ProductPage;
