import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";

import createRootReducer from "./reducer/index";
import { AppState } from "../components/misc/types";

const initState: AppState = {
  productState: {
    product: [],
  },
  userState: {
    userInformation: { email: "", password: "" },
  },
};

export default function makeStore(initialState = initState) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, thunk];
  let composeEnhancers = compose;
  if (process.env.NODE_ENV === "development") {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }
  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  if ((module as any).hot) {
    (module as any).hot.accept("./reducer", () => {
      const nextReducer = require("./reducer").default;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
