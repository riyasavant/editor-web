const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { exec } = require("child_process");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.listen(port, () => console.log("Backend server live on " + port));

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

app.post("/run", function (req, res) {
  const language = req.body.language;
  console.log(language);
  let code = "data/code" + param[language].ext;
  fs.writeFile(code, req.body.code, function (err) {
    if (err) return console.log(err);
    console.log("Code written successfully");
  });
  fs.writeFile("data/input", req.body.input, function (err) {
    if (err) return console.log(err);
    console.log("Input written successfully");
  });
  for (let i in param[language].shell) {
    runCode(param[language].shell[i], res);
    console.log(param[language].shell[i]);
  }
});

const clearFolder = () => {
  exec("rm data/*", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
};

const runCode = (arg, res) => {
  exec(arg, (error, stdout, stderr) => {
    if (error) {
      console.log("error: ", error.message);
      let jsonData = {
        error: true,
        errorMessage: "Error occured",
        result: null,
      };
      res.json(jsonData);
      return;
    }
    if (stderr) {
      console.log("stderr: ", stderr);
      let jsonData = {
        error: true,
        errorMessage: "Error occured",
        result: null,
      };
      res.json(jsonData);
      return;
    }
    if (stdout !== "") {
      let jsonData = {
        error: false,
        errorMessage: "",
        result: stdout,
      };
      res.json(jsonData);
    }
    return;
  });
};
