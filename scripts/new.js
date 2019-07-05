const fs = require("fs")
const { resolve } = require("path")
const dirName = process.argv[2]
if (!dirName) {
  process.exit(0)
}

fs.mkdir(resolve(__dirname, `../src/${dirName}`), err => {
  if (err) {
    console.log(err)
  } else {
    fs.copyFile(
      resolve(__dirname, "../tpls/index.html"),
      resolve(__dirname, `../src/${dirName}/index.html`),
      err => {
        if (err) {
          console.log(err)
        }
      }
    )
    fs.copyFile(
      resolve(__dirname, "../tpls/app.js"),
      resolve(__dirname, `../src/${dirName}/app.js`),
      err => {
        if (err) {
          console.log(err)
        }
      }
    )
  }
})
