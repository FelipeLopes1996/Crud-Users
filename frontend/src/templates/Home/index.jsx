import React from "react";
import * as Styles from "./styles";
import { Button } from "../../components/Button";

export const Home = () => {
  return (
    <Styles.WrapperHome>
      <h1>Seja bem vindo ao sistema de cadastro</h1>
      <Button name="Fazer login" route="/login" />
      <Button name="Criar conta" route="/create" />
    </Styles.WrapperHome>
  );
};
