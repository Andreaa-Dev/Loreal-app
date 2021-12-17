import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          HomeScreen: {
            screens: {
              HomeScreen: "Home",
            },
          },
          ProductScreen: {
            screens: {
              ProductScreen: "Product",
            },
          },
          UserScreen: {
            screens: {
              UserScreen: "User",
            },
          },
          SettingScreen: {
            screens: {
              UserScreen: "Setting",
            },
          },
        },
      },
      Modal: "modal",
      NotFound: "*",
    },
  },
};

export default linking;
