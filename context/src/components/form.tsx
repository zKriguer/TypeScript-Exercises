import React, { useState, useContext, ChangeEvent } from "react";
import { ContextForm } from "../contexts/ContextForm";

const Form = () => {
  const { setName } = useContext(ContextForm);
  const [input, setInput] = useState<string>("");

  function changeState(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setName(input);
  }

  return (
    <div>
      <form onSubmit={changeState}>
        <input
          type="text"
          name="Name"
          id="Name"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
        <button type="submit">Clica ae</button>
      </form>
    </div>
  );
};

export default Form;
