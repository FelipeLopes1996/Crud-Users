const baseUrl = " http://localhost:4001";

export const fetchLogin = async (id) => {
  const response = await fetch(`${baseUrl}/users/${id}`, { method: "GET" })
    .then((resp) => resp.json())
    .catch((e) => console.log(e));
  return response;
};
export const fetchDestroyer = async (id) => {
  const response = await fetch(`${baseUrl}/users/${id}`, { method: "DELETE" })
    .then((resp) => resp.json())
    .catch((e) => console.log(e));
  return response;
};
export const fetchUpdate = async (id, data) => {
  const response = await fetch(`${baseUrl}/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
    }),
  })
    .then((resp) => resp.json())
    .catch((e) => console.log(e));
  return response;
};
export const fetchStatusUpdate = async (id, data) => {
  const response = await fetch(`${baseUrl}/users/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
    }),
  })
    .then((resp) => resp.json())
    .catch((e) => console.log(e));
  return response;
};

export const fetchUsers = async () => {
  const response = await fetch(`${baseUrl}/users`)
    .then((resp) => resp.json())
    .catch((e) => console.log(e));
  return response;
};
export const fetchCreateUsers = async (data) => {
  const response = await fetch(`${baseUrl}/users`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
    }),
  })
    .then((resp) => resp?.json())
    .catch((e) => console.log(e));
  return response;
};
