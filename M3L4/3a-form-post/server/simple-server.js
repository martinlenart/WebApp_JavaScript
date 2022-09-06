//super simple server using expressjs

//Install expressjs for running a small server

//https://expressjs.com/en/starter/hello-world.html
//https://expressjs.com/en/starter/installing.html

//in your webapplication project's server directory open a terminal
//install package.json using 'npm init -y'
//install validator using npm install express
//Now you should have two json files, and a node modules directory: node_modules, package-lock.json, package.json

//install cors
//https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/
//npm i cors express nodemon

//install formidable
//https://www.npmjs.com/package/formidable
//npm install formidable@latest

//required node library
const path = require('path');
const fs = require('fs');

const express = require('express');
const formidable = require('formidable');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
const appDir = 'app-data';
const appJson = 'directories.json';

app.get('/', (req, res) =>
  res.send('Example server for receiving JS POST requests')
);

app.post('/api/createdir', (req, res) => {
  const form = formidable();

  form.parse(req, (err, fields) => {
    if (err) {
      return;
    }
    console.log('POST body:', fields);

    let dirStruct = [];
    if (fileExists(appJson))
      dirStruct  = readJSON(appJson);
    
    //get the data sent over from browser
    const dirToCreate = fields['directory'];

    //create the directory
    const pathToCreate = path.join(__dirname, appDir, dirToCreate);
    if (pathToCreate != '' && !fs.existsSync(path.resolve(pathToCreate)))
    {
      //make sure appDir exists
      const appDataPath = path.join(__dirname, appDir);
      if (!fs.existsSync(path.resolve(appDataPath)))
        fs.mkdirSync(path.resolve(appDataPath));

      //create the directory
      if (!fs.existsSync(path.resolve(pathToCreate)))
        fs.mkdirSync(path.resolve(pathToCreate));

      //update the json file
      dirStruct.push(dirToCreate)
      writeJSON(appJson, dirStruct);
    }

    //send success response
    res.sendStatus(200);
  });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

//helper functions to read and write JSON
function fileExists(fname) {
  const appDataDir = path.join(__dirname, appDir);
  return fs.existsSync(path.resolve(appDataDir, fname));
}

function writeJSON(fname, obj) {
  const appDataDir = path.join(__dirname, appDir);

  if (!fs.existsSync(path.resolve(appDataDir)))
    fs.mkdirSync(path.resolve(appDataDir));
  
  fs.writeFileSync(path.resolve(appDataDir, fname), JSON.stringify(obj));
}

function readJSON(fname) {
  const appDataDir = path.join(__dirname, appDir);
  obj = JSON.parse(fs.readFileSync(path.resolve(appDataDir, fname), 'utf8'));
  return obj;
}
