import {
  AddUserInformation,
  AllAction,
  UserState,
} from "../../components/misc/types";

const initialState: UserState = {
  userInformation: { email: "", password: "" },
};
export default function user(
  state = initialState,
  action: AllAction
): UserState {
  switch (action.type) {
    case AddUserInformation:
      return {
        ...state,
        userInformation: action.payload.userInformation,
      };
    default:
      return state;
  }
}
