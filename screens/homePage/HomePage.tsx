import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { Formik } from "formik";

import { Input, Center, Image, Stack, FormControl, Box } from "native-base";
import { addUserInformation } from "../../redux/action/user";

function HomePage() {
  const dispatch = useDispatch();
  return (
    <Center style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://i.pinimg.com/564x/36/c1/1d/36c11decc20c43cdd56ca3b701452da6.jpg",
        }}
        alt="error"
        size="xl"
      />
      <Box style={styles.input}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            dispatch(addUserInformation(values));
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <TextInput
                placeholder="Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              <TextInput
                placeholder="Password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              {/* @ts-ignore */}
              <Button onPress={handleSubmit} title="Log in" />
            </View>
          )}
        </Formik>
      </Box>

      <Image
        style={styles.mainPage}
        source={{
          uri: "https://www.loreal-paris.co.uk/-/media/project/loreal/brand-sites/oap/emea/uk/articles/pfw2021/homepagevideo/pfw2021_hero.jpg",
        }}
        alt="Alternate Text"
        size="xl"
      />
    </Center>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  container: {},
  input: {
    marginTop: 10,
    marginBottom: 10,
  },
  logo: {
    width: 200,
    height: 50,
    marginTop: 60,
  },

  mainPage: {
    height: 300,
    width: 500,
  },
});
