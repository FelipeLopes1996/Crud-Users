import React from "react";
import * as Styles from "./styles";
import { Button } from "../../components/Button";

export const Home = () => {
  React.useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <Styles.WrapperHome>
      <h1>Seja bem vindo ao sistema de cadastro</h1>
      <Button name="Faça login" route="/login" />
      <Button name="Crie sua conta" route="/create" />
    </Styles.WrapperHome>
  );
};
