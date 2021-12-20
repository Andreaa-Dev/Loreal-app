import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

import { AppState } from "../../components/misc/types";
import user from "../../redux/reducer/user";

function UserInformation() {
  const userData = useSelector(
    (state: AppState) => state.userState.userInformation
  );
  return (
    <View>
      <Text> Profile </Text>

      <Text> Your email: {userData.email}</Text>
      <Text> Favorite product </Text>
    </View>
  );
}

export default UserInformation;
