const { spawn } = require("child_process");

const Python = spawn("python", ["scrapper.py", "hello world"]);

Python.stdout.on("data", (data) => {
  console.log(`stdout:${data}`);
});

Python.stderr.on("data", (data) => {
  console.error(`stderr:${data}`);
});

Python.on("close", (code) => {
  console.log(`process excited ${code}`);
});
