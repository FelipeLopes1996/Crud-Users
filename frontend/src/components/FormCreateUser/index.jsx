import React from "react";
import * as Styled from "./styles";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { AuthContext } from "../../context/auth";
import { fetchUsers, fetchCreateUsers } from "../../services/serviceCrud";
import { regex } from "../../utils/regex";
import { maxDate, actualDate } from "../../utils/filtersFunc";
import { toast } from "react-toastify";

export const FormCreateUser = () => {
  const [auth, setAuth] = React.useContext(AuthContext);
  const [userName, setUserName] = React.useState("");
  const [userLogin, setUserLogin] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [userPhone, setUserPhone] = React.useState("");
  const [userBirthday, setUserBrithday] = React.useState("");
  const [userMotherName, setUserMotherName] = React.useState("");
  const [userCpf, setUserCpf] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [userConfirmPassword, setUserConfirmPassword] = React.useState("");
  const [users, setUsers] = React.useState([]);
  const navigate = useNavigate();

  const getUsers = async () => {
    const result = await fetchUsers();
    return setUsers(result);
  };

  React.useEffect(() => {
    document.title = "Criar conta";
    getUsers();
  }, []);

  const handleCreate = (e) => {
    e.preventDefault();
    if (userName === "") return toast.error("Campo nome obrigatório");
    if (userLogin === "") return toast.error("Campo login obrigatório");
    if (userPhone === "") return toast.error("Campo telefone obrigatório");
    if (userCpf === "") return toast.error("Campo cpf obrigatório");
    if (userCpf.length < 11)
      return toast.error("Campo cpf precisa ter 11 caracteres");
    if (userBirthday === "")
      return toast.error("Campo Data de Nascimento obrigatório");
    if (userMotherName === "")
      return toast.error("Campo Nome da Mãe obrigatório");
    if (userEmail === "") return toast.error("Campo email obrigatório");
    if (userPassword === "") return toast.error("Campo Senha obrigatório");
    if (userPassword.length < 6)
      return toast.error("Campo Senha precisa ter mais que 6 digitos");
    if (userConfirmPassword !== userPassword)
      return toast.error("Campo confirme senha precisa ser igual a senha");

    const confirmUser = userEmail
      ? users.filter((v) => v.email === userEmail)
      : null;
    if (confirmUser.length) return toast.error("usuário já existente");

    const userCreate = {
      name: userName,
      login: userLogin,
      email: userEmail,
      password: userPassword,
      phone: userPhone.trim().replace(/\D/g, ""),
      cpf: userCpf.replace(/\D/g, ""),
      birthday: userBirthday,
      motherName: userMotherName,
      status: "active",
      created_at: actualDate,
      updated_at: actualDate,
    };

    fetchCreateUsers(userCreate);

    const profile = {
      name: userName,
    };
    setAuth({ ...auth, isAuth: true, profile });
    toast.success("Usuário criado com sucesso");
    return navigate("/dash");
  };
  return (
    <>
      <Styled.WrapperButton>
        <Button name="voltar" route="/" />
      </Styled.WrapperButton>
      <Styled.WrapperCreate>
        <h1>Cadastre-se</h1>
        <Styled.Form onSubmit={handleCreate}>
          <label htmlFor="name">
            Nome:
            <input
              type="text"
              id="name"
              value={regex.maskName(userName)}
              onChange={({ target }) => setUserName(target.value)}
            />
          </label>
          <label htmlFor="login">
            Login:
            <input
              type="text"
              id="login"
              value={userLogin}
              onChange={({ target }) => setUserLogin(target.value)}
            />
          </label>
          <label htmlFor="phone">
            Telefone:
            <input
              type="text"
              id="phone"
              value={regex.maskTell(userPhone)}
              onChange={({ target }) => setUserPhone(target.value)}
            />
          </label>
          <label htmlFor="cpf">
            Cpf:
            <input
              type="text"
              id="cpf"
              value={regex.maskCpf(userCpf)}
              maxLength={14}
              onChange={({ target }) => setUserCpf(target.value)}
            />
          </label>
          <label htmlFor="birthday">
            Data de nascimento:
            <input
              type="date"
              id="birthday"
              max={maxDate()}
              value={userBirthday}
              onChange={({ target }) => setUserBrithday(target.value)}
            />
          </label>
          <label htmlFor="mother">
            Nome da Mãe:
            <input
              type="text"
              id="mother"
              value={regex.maskName(userMotherName)}
              onChange={({ target }) => setUserMotherName(target.value)}
            />
          </label>
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
          <label htmlFor="confirmPassword">
            Confirmar Senha:
            <input
              type="password"
              id="confirmPassword"
              value={userConfirmPassword}
              onChange={({ target }) => setUserConfirmPassword(target.value)}
            />
          </label>
          <button type="submit">Cadastrar</button>
        </Styled.Form>
      </Styled.WrapperCreate>
    </>
  );
};
