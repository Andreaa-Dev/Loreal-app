import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, View, ScrollView } from "react-native";

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
    <ScrollView>
      <Text>Product</Text>
      {productData.slice(0, 7).map((item) => {
        return <ProductItem key={item.name} productData={item} />;
      })}
    </ScrollView>
  );
}

export default ProductPage;
