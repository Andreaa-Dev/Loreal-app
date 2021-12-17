import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Center, Image, Button } from "native-base";

function HomePage() {
  return (
    <Center style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://logos-world.net/wp-content/uploads/2020/04/LOreal-Logo-1962-present.jpg",
        }}
        alt="Alternate Text"
        size="xl"
      />
      <Input
        style={styles.input}
        mx="3"
        placeholder="Email"
        w={{
          base: "75%",
          md: "25%",
        }}
      />
      <Input
        mx="3"
        placeholder="Password"
        w={{
          base: "75%",
          md: "25%",
        }}
      />
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
    marginTop: 100,
  },
  logo: {
    width: 150,
    height: 58,
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
    height: 250,
    width: 300,
  },
});
