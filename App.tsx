import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import makeStore from "./redux/store";
import { NativeBaseProvider } from "native-base";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    const store = makeStore();
    return (
      <NativeBaseProvider>
        <SafeAreaProvider>
          <Provider store={store}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </Provider>
        </SafeAreaProvider>
      </NativeBaseProvider>
    );
  }
}
