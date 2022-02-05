export const filterName = (array = [], value) => {
  return array.filter((v, index) => {
    if (v.status === "active" || v.status === "block") {
      return v.name.toLowerCase().includes(value.toLowerCase()) ? v.name : null;
    }
    return null;
  });
};
export const filterLogin = (array = [], value) => {
  return array.filter((v, index) => {
    if (v.status === "active" || v.status === "block") {
      return v.login.toLowerCase().includes(value.toLowerCase())
        ? v.login
        : null;
    }
    return null;
  });
};
export const filterCpf = (array = [], value) => {
  return array.filter((v, index) => {
    if (v.status === "active" || v.status === "block") {
      return v.cpf.includes(value) ? v.cpf : null;
    }
    return null;
  });
};

export const filterStatus = (array = [], value) => {
  return array.filter((v, index) =>
    v.status.includes(value) ? v.status : null
  );
};

export const filterYearBorn = (array = [], value) => {
  return array.filter((v, index) => {
    if (v.status === "active" || v.status === "block") {
      return v.birthday.includes(value) ? v.birthday : null;
    }
    return null;
  });
};
export const filterInsertUser = (array = [], value) => {
  return array.filter((v, index) => {
    if (v.status === "active" || v.status === "block") {
      return v.created_at.includes(String(value)) ? v.created_at : null;
    }
    return null;
  });
};
export const filterUpateUser = (array = [], value) => {
  return array.filter((v, index) => {
    if (v.status === "active" || v.status === "block") {
      return v.updated_at.includes(String(value)) ? v.updated_at : null;
    }

    return null;
  });
};

export const convertDate = (date) => {
  const dateSplit = date.split("/");
  const newDate = new Date(
    parseInt(dateSplit[2], 10),
    parseInt(dateSplit[1], 10) - 1,
    parseInt(dateSplit[0], 10)
  );
  return newDate;
};

const date = new Date();

export const actualDate = `${date.getFullYear()}-${
  date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
}-${date.getDay() < 10 ? `0${date.getDay() - 1}` : date.getDay()}`;

export const replaceActualDate = Number(
  actualDate.replaceAll("-", "").slice(0, 4)
);

const maxYear = date.getFullYear() - 18;
const maxDay = date.getDay() - 1;
const maxMonth = date.getMonth() + 1;
export const maxDate = () =>
  `${maxYear}-${maxMonth < 10 ? `0${maxMonth}` : maxMonth}-${
    maxDay < 10 ? `0${maxDay}` : maxDay
  }`;
