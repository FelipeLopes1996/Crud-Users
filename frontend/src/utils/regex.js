export const regex = {
  maskName: (name = "") => {
    return name.replace(/[0-9]/g, "");
  },

  maskTell: (nPhone = "") => {
    let realPhone = nPhone.replace(/\D/g, "");
    realPhone = realPhone.replace(/^0/, "");

    if (realPhone.length > 11) {
      realPhone = realPhone.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (realPhone.length > 7) {
      realPhone = realPhone.replace(/^(\d\d)(\d{5})(\d{0,4}).*/, "($1) $2-$3");
    } else if (realPhone.length > 2) {
      realPhone = realPhone.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else if (nPhone.trim() !== "") {
      realPhone = realPhone.replace(/^(\d*)/, "($1");
    }
    return realPhone;
  },

  masBirthDate: (birthDate = "") => {
    return birthDate
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1");
  },
  validStatus: (status = "") => {
    return status === "active"
      ? "ativo"
      : status === "block"
      ? "bloqueado"
      : status === "inactive"
      ? "inativo"
      : null;
  },

  maskCpf: (cpf = "") => {
    return cpf
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  },

  formateValueDate: (date = "") => {
    const arrayDate = date.split("");
    const year = arrayDate.slice(0, 4).join().replace(/,/g, "").trim();
    const month = arrayDate.slice(5, 7).join().replace(",", "");
    const day = arrayDate.slice(8, 10).join().replace(",", "");
    const concaValue = `${day}/${month}/${year}`;
    if (!date) {
      return "";
    }
    return concaValue;
  },
};
