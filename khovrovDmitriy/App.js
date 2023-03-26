import TabNavigation from "./Components/Navigation/TabNavigation";
import store from "./app/store";
import { Provider } from "react-redux";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <Provider store={store}>
      <TabNavigation />
    </Provider>
  );
}
