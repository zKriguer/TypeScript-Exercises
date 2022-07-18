import { useContext } from "react";
import { ContextForm } from "../contexts/ContextForm";

type Props = {};

const Titulo = (props: Props) => {
  const { name } = useContext(ContextForm);
  return <h1>{name}</h1>;
};

export default Titulo;
