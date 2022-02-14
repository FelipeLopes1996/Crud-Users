import React from "react";
import * as Styled from "./styles";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { AuthContext } from "../../context/auth";
import { fetchUsers } from "../../services/serviceCrud";
import { toast } from "react-toastify";

export const FormLogin = () => {
  const [auth, setAuth] = React.useContext(AuthContext);
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [users, setUsers] = React.useState([]);
  const navigate = useNavigate();

  const getUsers = async () => {
    const result = await fetchUsers();
    return setUsers(result);
  };

  React.useEffect(() => {
    getUsers();
    document.title = "Login";
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (userEmail === "") return toast.error("Campo email obrigatório");
    const confirmUser = userEmail
      ? users.filter((v) => v.email === userEmail)
      : null;
    if (!confirmUser.length) return toast.error("usuário não existente");
    if (confirmUser[0].password !== userPassword)
      return toast.error("Senha Incorreta");

    if (confirmUser[0].status === "block")
      return toast.error("Usuário bloqueado");
    if (confirmUser[0].status === "inactive")
      return toast.error("Usuário inativo");

    const { name } = confirmUser[0];

    const profile = {
      name: name,
    };
    setAuth({ ...auth, isAuth: true, profile });
    navigate("/dash");
    return toast.success("logado com sucesso");
  };
  return (
    <>
      <Styled.WrapperButton>
        <Button name="voltar" route="/" />
      </Styled.WrapperButton>
      <Styled.WrapperLogin>
        <h1>Faça seu login</h1>
        <Styled.Form onSubmit={handleLogin}>
          <label htmlFor="email">
            E-mail:
            <input
              type="email"
              id="email"
              value={userEmail}
              onChange={({ target }) => setUserEmail(target.value)}
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              id="password"
              value={userPassword}
              onChange={({ target }) => setUserPassword(target.value)}
            />
          </label>
          <button type="submit">Entrar</button>
          <Link to="/recovery-password"> Esqueceu sua senha?</Link>
        </Styled.Form>
      </Styled.WrapperLogin>
    </>
  );
};
