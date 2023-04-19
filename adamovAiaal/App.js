import MainContainer from "./navigation/maincontainer";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
};
export default App;
