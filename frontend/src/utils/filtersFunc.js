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

export const calcAge = (birthday) => {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let yearBirthParts = birthday.split("-");
  let dayBirth = yearBirthParts[2];
  let monthBirth = yearBirthParts[1];
  let yearBirth = yearBirthParts[0];
  let age = currentYear - yearBirth;
  let currentMonth = currentDate.getMonth() + 1;
  //Se mes atual for menor que o nascimento, nao fez aniversario ainda;
  if (currentMonth < monthBirth) {
    age--;
  } else {
    //Se estiver no mes do nascimento, verificar o dia
    if (currentMonth === monthBirth) {
      if (new Date().getDate() < dayBirth) {
        //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
        age--;
      }
    }
  }
  return age;
};

export const filterAge = (array = [], value) => {
  return array.filter((v) => {
    let ageValue = calcAge(v.birthday);

    if (value === "26" && ageValue <= 26) return v;
    if (value === "31" && ageValue >= 25 && ageValue <= 31) return v;
    if (value === "36" && ageValue >= 30 && ageValue <= 36) return v;
    if (value === "41" && ageValue >= 35 && ageValue <= 41) return v;
    if (value === "40" && ageValue >= 40) return v;
    return null;
  });
};
