import { useSelector, useDispatch } from "react-redux";
import Fulcrum from "./component/Fulcrum/Fulcrum";
import Header from "./component/Header/Header";
import Seesaw from "./component/SeeSaw/SeeSaw";
// import {
//   decrement,
//   increment,
//   incrementByAmount,
// } from "./reducer/action/action";

function App() {
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();
  return (
    <div className="App">
      <Header />
      <main className="">
        <Seesaw />
      </main>
    </div>
  );
}

export default App;
