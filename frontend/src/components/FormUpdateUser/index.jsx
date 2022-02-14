import React from "react";
import * as Styled from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { fetchUpdate, fetchLogin } from "../../services/serviceCrud";
import { regex } from "../../utils/regex";
import { actualDate, maxDate } from "../../utils/filtersFunc";

import { toast } from "react-toastify";

export const FormUpdateUser = () => {
  const [userName, setUserName] = React.useState("");
  const [userLogin, setUserLogin] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [userPhone, setUserPhone] = React.useState("");
  const [userBirthday, setUserBrithday] = React.useState("");
  const [userMotherName, setUserMotherName] = React.useState("");
  const [userCpf, setUserCpf] = React.useState("");
  const [changeStatus, setChangeStatus] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [userConfirmPassword, setUserConfirmPassword] = React.useState("");
  const [user, setUser] = React.useState();
  const navigate = useNavigate();

  const params = useParams();
  const { id } = params;

  const getUser = React.useCallback(async () => {
    const result = await fetchLogin(id);
    setUser(result);
    setUserName(result?.name);
    setUserLogin(result?.login);
    setUserEmail(result?.email);
    setUserPhone(result?.phone);
    setUserBrithday(result?.birthday);
    setUserMotherName(result?.motherName);
    setUserCpf(result?.cpf);
    setUserPassword(result?.password);
    setChangeStatus(result?.status);
  }, [id]);

  React.useEffect(() => {
    getUser();
    document.title = "Atualizar usuário";
  }, [getUser]);

  const receiveData = () => {};

  React.useEffect(() => {
    receiveData();
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

    const userUpdate = {
      name: userName,
      login: userLogin,
      email: userEmail,
      password: userPassword,
      phone: userPhone.trim().replace(/\D/g, ""),
      cpf: userCpf.replace(/\D/g, ""),
      birthday: userBirthday,
      motherName: userMotherName,
      status: changeStatus,
      created_at: user.created_at,
      updated_at: actualDate,
    };

    fetchUpdate(id, userUpdate);
    navigate("/dash");
    toast.success("Usuário alterado com sucesso");
  };
  return (
    <>
      <Styled.WrapperButton>
        <Button name="voltar" route="/dash" />
      </Styled.WrapperButton>
      <Styled.WrapperUpdate>
        <h1>Atualizar usuário</h1>
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
              disabled
              value={userEmail}
              onChange={({ target }) => setUserEmail(target.value)}
            />
          </label>

          <select
            value={changeStatus}
            onChange={({ target }) => setChangeStatus(target.value)}
          >
            <option value="block">Bloqueado</option>
            <option value="inative">Inativo</option>
            <option value="active">Ativo</option>
          </select>

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
          <button type="submit">Atualizar</button>
        </Styled.Form>
      </Styled.WrapperUpdate>
    </>
  );
};
