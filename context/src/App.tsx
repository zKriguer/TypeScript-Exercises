import React, { useState } from "react";
import "./App.css";
import Titulo from "./components/titulo";
import Form from "./components/form";
import { ContextFormProvider } from "./contexts/ContextForm";

function App() {
  return (
    <div className="App">
      <ContextFormProvider>
        <Titulo />
        <Form />
      </ContextFormProvider>
    </div>
  );
}

export default App;
