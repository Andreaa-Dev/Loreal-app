import {
  AddUserInformation,
  AddUserInformationAction,
  UserInformationType,
} from "../../components/misc/types";

export function addUserInformation(
  userInformation: UserInformationType
): AddUserInformationAction {
  return {
    type: AddUserInformation,
    payload: {
      userInformation: userInformation,
    },
  };
}
