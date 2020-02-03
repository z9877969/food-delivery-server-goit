const fs = require("fs");
const path = require("path");
const qs = require("qs");

const saveUser = (user, data) => {
  const pathUser = path.join(
    __dirname,
    "../../",
    "./db/users/",
    `${user}.json`
  );
  fs.writeFileSync(pathUser, data);
};

const resWrite = bodyObj => {
  const res = {};
  res.success = "success";
  res.user = bodyObj;
  return res;
};

const userSignUp = (req, res) => {
  if ((req.method = "POST")) {
    let body = "";

    req.on("data", data => {
      body += data;

      const bodyParsed = JSON.parse(body);
      const username =
        bodyParsed[Object.keys(bodyParsed).find(key => key === "username")];
      saveUser(username, body);

      res.writeHead(200, {
        "Content-Type": "applycation/json"
      });

      res.end(JSON.stringify(resWrite(bodyParsed)));
    });
  }
};

module.exports = userSignUp;
