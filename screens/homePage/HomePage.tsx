import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet } from "react-native";

import { Input, Center, Image, Button, Stack, FormControl } from "native-base";
import { AppState } from "../../components/misc/types";

function HomePage() {
  const [userInformation, setUserInformation] = useState({
    email: "",
    password: "",
  });

  const onChangeHanlder = (email: string, password: string) => {
    setUserInformation({ email: email, password: password });
  };

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
      <FormControl>
        <Stack space={5}>
          <Stack>
            <FormControl.Label>Username</FormControl.Label>
            <Input
              variant="underlined"
              p={2}
              placeholder="@gmail.com"
              value=""
            />
          </Stack>
          <Stack>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              variant="underlined"
              p={2}
              placeholder="Password should be at least 8 characters"
              value=""
            />
          </Stack>
        </Stack>
      </FormControl>

      <Button.Group
        colorScheme="blue"
        variant="outline"
        size="sm"
        style={styles.button}
      >
        <Button onPress={() => console.log("hello world")}>LOG IN</Button>
      </Button.Group>

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
  container: {
    backgroundColor: "black",
  },
  logo: {
    width: 200,
    height: 150,
    marginTop: 60,
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
  },
  mainPage: {
    height: 300,
    width: 500,
  },
});
