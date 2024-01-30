import React from "react";
import { ProductList } from "./containers";
import { Provider } from "react-redux";
import store from "./configs/redux/store";

function App() {
  return (
    <Provider store={store}>
      <ProductList />
    </Provider>
  );
}

export default App;
