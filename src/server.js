const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { exec } = require("child_process");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.listen(port, () => console.log("Backend server live on " + port));

let jsonData;

const param = {
  c: {
    ext: ".c",
    shell: {
      1: "gcc data/code.c -o data/output -w",
      2: "data/output < data/input",
    },
  },
  cpp: {
    ext: ".cpp",
    shell: {
      1: "g++ data/code.cpp -o data/output -w",
      2: "data/output < data/input",
    },
  },
  python: {
    ext: ".py",
    shell: {
      1: "python data/code.py < data/input",
    },
  },
  js: {
    ext: ".js",
    shell: {
      1: "node data/code < data/input",
    },
  },
};

const writeFilePromise = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, error => {
      if (error) reject(error);
      resolve("file created successfully with handcrafted Promise!");
    });
  });
};

app.post("/run", function (req, res) {
  const language = req.body.language;
  console.log(language);
  let code = "data/code" + param[language].ext;

  writeFilePromise(
    code,
    req.body.code
  )
    .then(result => console.log(result))

    .catch(error => console.log(error));

  writeFilePromise(
    'data/input',
    req.body.input
  )
    .then(result => console.log(result))

    .catch(error => console.log(error));

  for (let i in param[language].shell) {
    runCode(param[language].shell[i], res);
    console.log(param[language].shell[i]);
  }
  console.log(jsonData)
  res.json(jsonData);
});

const runCode = (arg, res) => {
  exec(arg, (error, stdout, stderr) => {
    if (error) {
      console.log("error: ", error.message);
      jsonData = {
        error: true,
        errorMessage: "Error occured",
        result: null,
      };
    }
    else if (stderr) {
      console.log("stderr: ", stderr);
      jsonData = {
        error: true,
        errorMessage: "Error occured",
        result: null,
      };
    }
    else if (stdout !== "") {
      jsonData = {
        error: false,
        errorMessage: "",
        result: stdout,
      };
      console.log(stdout)
    }
    return;
  });
  return
};
