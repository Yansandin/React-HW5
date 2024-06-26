
import store from "./HW/store";
import {Provider} from "react-redux";
import ThemeToggle from "./HW/ThemeToggle";
import './App.css'



function App() {

  return (
    <Provider store={store}>
      <ThemeToggle />
    </Provider>
  );
}

export default App;

