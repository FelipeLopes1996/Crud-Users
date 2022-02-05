import React from "react";
import * as Styles from "./styles";
import { useNavigate } from "react-router-dom";

export const Button = ({ name, route }) => {
  const navigate = useNavigate();
  return (
    <Styles.Button onClick={() => navigate(`${route}`)}>{name}</Styles.Button>
  );
};
