import axios from "axios";

export const getUsers = () => {
  const url = "http://localhost:8080/users";
  let users: any = [];
  axios(url).then(({ data }) => {
    users = data;
  });
  return users;
};

export const createUser = () => {
  const url = "http://localhost:8080/users";

  const options = {
    method: "POST",
    data: {
      name: "nare",
      age: 28,
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  axios(url, options).then(({ data }) => {
    console.log(data, "data create");
  });
};
