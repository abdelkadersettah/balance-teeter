import { useSelector, useDispatch } from "react-redux";
import generateRandomElement from "../../utils/generateRandomObject";

import Fulcrum from "../Fulcrum/Fulcrum";
import { insertRightElement, getBending } from "../../reducer/action/actions";

import "./style.scss";
import { useEffect, useState } from "react";
import Element from "../Element/Element";

const Seesaw = () => {
  const state = useSelector((state) => state.seeSaw);
  const [bending, setBending] = useState(0);
  console.log(state, "state");

  const dispatch = useDispatch();
  // const bending = getBending(state);
  useEffect(() => {
    dispatch(insertRightElement());
    setBending(getBending(state));
    console.log(bending);
    // eslint-disable-next-line
  }, []);

  console.log(state, "state");
  const styles = {
    transform: `rotate(${bending}deg)`,
  };
  return (
    <div className="container">
      <div className="top">
        <div className="sky"></div>
        <div className="elementContainer" style={styles}>
          {state.rightElements
            ? state.rightElements.map((element) => (
                <Element
                  side="right"
                  type={element.type}
                  size={element.size}
                  weight={element.weight}
                  offset={element.offset}
                  key={element.id}
                />
              ))
            : null}{" "}
        </div>
      </div>
      <div className="seeSaw">
        <div className="beam" style={styles}>
          {console.log(state, "render method")}
        </div>

        <Fulcrum />
      </div>
    </div>
  );
};

export default Seesaw;
