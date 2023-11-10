import { useState } from "react";
import nameActionCreator from "../../Actions/nameAction";
import myStore from "../../store/reduxstore";
import { useDispatch } from "react-redux";

function Input() {
  let [state, setState] = useState("");
  let dispatch = useDispatch();

  const submit = () => {
    let actionObj = nameActionCreator(state);
    dispatch(actionObj);
    // myStore.dispatch(actionObj);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Input Component</h2>
      <input
        type="text"
        placeholder="Enter Text"
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default Input;
