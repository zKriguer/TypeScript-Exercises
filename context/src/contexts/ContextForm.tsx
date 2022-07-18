import { createContext, useState } from "react";

interface IContext {
  name: string;
  setName: (name: string) => void;
}

export const ContextForm = createContext<IContext>({ name: "", setName() {} });

type props = {
  children: JSX.Element | JSX.Element[];
};

export const ContextFormProvider = ({ children }: props) => {
  const [name, setName] = useState("");
  return (
    <ContextForm.Provider value={{ name, setName }}>
      {children}
    </ContextForm.Provider>
  );
};
