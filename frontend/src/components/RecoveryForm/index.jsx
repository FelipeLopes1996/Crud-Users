import React from "react";
import * as Styled from "./styles";
import { Button } from "../Button";
import { fetchUsers } from "../../services/serviceCrud";
import { toast } from "react-toastify";

export const RecoveryForm = () => {
  const [userEmail, setUserEmail] = React.useState("");
  const [recoveryPassword, setRecoveryPassword] = React.useState("");
  const [users, setUsers] = React.useState([]);

  const getUsers = async () => {
    const result = await fetchUsers();
    return setUsers(result);
  };

  React.useEffect(() => {
    getUsers();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (userEmail === "") return toast.error("Campo email obrigatório");
    const confirmUser = userEmail
      ? users.filter((v) => v.email === userEmail)
      : null;
    setRecoveryPassword("");
    if (!confirmUser.length) return toast.error("usuário não existente");
    setRecoveryPassword("");

    if (confirmUser[0].status === "block")
      return toast.error("Usuário bloqueado");
    setRecoveryPassword("");
    if (confirmUser[0].status === "inactive")
      return toast.error("Usuário inativo");
    setRecoveryPassword("");

    setRecoveryPassword(confirmUser[0].password);

    return toast.success("senha recuperada com sucesso");
  };
  return (
    <>
      <Styled.WrapperButton>
        <Button name="voltar" route="/" />
      </Styled.WrapperButton>
      <Styled.WrapperRecovery>
        <h1>Recuperar Senha</h1>
        <Styled.Form onSubmit={handleLogin}>
          <label htmlFor="email">
            E-mail:
            <input
              type="email"
              id="email"
              placeholder="Digete seu email"
              value={userEmail}
              onChange={({ target }) => setUserEmail(target.value)}
            />
          </label>
          <button type="submit">Recuperar</button>
        </Styled.Form>
        {recoveryPassword && (
          <span>
            <p>Sua senha: </p>
            {recoveryPassword}
          </span>
        )}
      </Styled.WrapperRecovery>
    </>
  );
};
