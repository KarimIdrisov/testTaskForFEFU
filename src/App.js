import 'antd/dist/antd.css'
import { Provider } from "react-redux"
import './App.css'
import store from "./store";
import Router from "./router";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
