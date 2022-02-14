import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

export const NotFound = () => {
  React.useEffect(() => {
    document.title = "Página Não encontrada";
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "3rem",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          marginBottom: "1rem",
        }}
      >
        Página não encontrada
      </h1>
      <Button name="Voltar para o início " route="/" />
    </div>
  );
};
