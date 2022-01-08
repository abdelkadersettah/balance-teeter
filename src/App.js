import { useSelector, useDispatch } from "react-redux";
import Header from "./component/Header/Header";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./reducer/action/action";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
