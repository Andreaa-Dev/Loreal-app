import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, View } from "react-native";
import { NativeBaseProvider, Box, Flex, Spacer, VStack } from "native-base";

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
      {productData.slice(0, 10).map((item) => {
        return (
          <VStack space={2.5} w="100%" px="3">
            <Flex
              direction="row"
              mb="2.5"
              mt="1.5"
              _text={{
                color: "coolGray.800",
              }}
            >
              <ProductItem key={item.id} productData={item} />
            </Flex>
          </VStack>
        );
      })}
    </View>
  );
}

export default ProductPage;
