import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, ScrollView, StyleSheet } from "react-native";
import { Input, Center, Image, Button } from "native-base";

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
    <ScrollView style={styles.container}>
      <Center>
        <Text style={styles.title}>PRODUCT</Text>

        <Input
          mx="3"
          placeholder=""
          w={{
            base: "75%",
            md: "25%",
          }}
        />
        <Button onPress={() => console.log("hello world")}>Search</Button>
      </Center>

      {productData.slice(0, 7).map((item) => {
        return <ProductItem key={item.name} productData={item} />;
      })}
    </ScrollView>
  );
}

export default ProductPage;

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
});
