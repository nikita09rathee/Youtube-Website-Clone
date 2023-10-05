async function reg(e) {
  try {
    e.preventDefault();
    var reg_data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      username: document.getElementById("username").value,
      passward: document.getElementById("passward").value,
      mobile: document.getElementById("mobile").value,
      description: document.getElementById("description").value,
    };
    reg_data = JSON.stringify(reg_data);
    console.log(reg_data);
  } catch (err) {
    console.log(err);
  }

  let reg_api = `https://masai-api-mocker.herokuapp.com/auth/register`;
  let responce = await fetch(reg_api, {
    method: "POST",
    body: reg_data,
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await responce.json();
  console.log(data);
}

async function login(e) {
  e.preventDefault();
  let login_data = {
    username: document.getElementById("username_login").value,
    passward: document.getElementById("passward_login").value,
  };
  login_data = JSON.stringify(login_data);

  let login_url = `https://masai-api-mocker.herokuapp.com/auth/login`;
  let responce = await fetch(login_url, {
    method: "POST",
    body: login_data,
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await responce.json();
  console.log(data);
  let username = document.getElementById("username_login").value;

  getUser(username, data.token);
}
async function getUser(username, token) {
  let api = `https://masai-api-mocker.herokuapp.com/user/${username}`;

  let response = await fetch(api, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  let data = await response.json();
  console.log("data", data);
}
export { reg, login, getUser };
