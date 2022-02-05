import { regex } from "../../utils/regex";

export const dataExcel = (data = []) => {
  return data.map((user) => {
    return [
      String(user.name),
      String(user.login),
      String(user.email),
      String(user.cpf),
      String(regex.maskTell(user.phone)),
      String(user.status),
      String(user.birthday),
    ];
  });
};

export const headers = [
  "Nome",
  "Login",
  "Email",
  "Cpf",
  "Telefone",
  "Status",
  "Data de nascimento",
];
