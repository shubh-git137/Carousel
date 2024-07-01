import "./App.css";
import Header from "./Header";
import ImageSlider from "./ImageSlider";
import { Provider } from "react-redux";
import store from "./utils/store";
import Counter from "./Counter";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <ImageSlider />
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
