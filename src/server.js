const express = require("express")
const  cors = require("cors")
const fs = require('fs')
const app = express()
const port = 5000

app.use(express.json());
app.use(cors());
app.listen(port, () => console.log("Backend server live on " + port));

const param = {
  "clang": {
    "1": "gcc data/code -o -w data/output",
    "2": "data/output < input"
  },
  "cpp": {
    "1": "g++ data/code -o -w data/output",
    "2": "data/output < input"
  },
  "python": {
    "1": "python data/code < input"
  }
}

app.post('/run', function(req, res){
  // clearFolder();
  const language = req.body.language
  console.log(language)
  fs.writeFile('data/code', req.body.code, function (err) {
    if (err)
      return console.log(err);
    console.log('Code written successfully');
  });
  fs.writeFile('data/input', req.body.input, function (err) {
    if (err)
      return console.log(err);
    console.log('Input written successfully');
  });
  for (let i in param[language]){
    let output = runCode(param[language][i])
    if (output!==""){
      res.send(output)
    }
  }

  res.send('Server sent the output');
})

const { exec } = require("child_process");

const clearFolder = () => {
  exec("rm data/*", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`)
      return
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`)
      return
    }
    console.log(`stdout: ${stdout}`)
  })
}

const runCode = (arg) => {
  exec(arg, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`)
      return
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`)
      return
    }
    return stdout
  })

}
