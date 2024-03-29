const http = require('http');
const crypto = require('crypto');
const exec = require('child_process').exec;

const SECRET =  process.env.SECRET;
const GITHUB_REPOSITORIES_TO_DIR = {
  'jalmada/mrpi2': '/home/pi/dev/mrpi2'
};

console.log(SECRET);
http
  .createServer((req, res) => {
    console.log("Creating Server");
    req.on('data', chunk => {
        try{
      console.log(`Data Received ${chunk}`);
      const signature = `sha1=${crypto
        .createHmac('sha1', SECRET)
        .update(chunk)
        .digest('hex')}`;
    
        console.log(`Signature: ${signature}`);
      const isAllowed = req.headers['x-hub-signature'] === signature;
      const body = JSON.parse(chunk);
      const isMaster = body.ref === 'refs/heads/master';
      const directory = GITHUB_REPOSITORIES_TO_DIR[body.repository.full_name];

      if (isAllowed && isMaster && directory) {
        console.log("Is Allowed");
        try {
          exec(`cd ${directory} && git pull`);
          console.log("Pull code and run again");
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
        console.log(error);
    }
    });
    res.end();
  })
  .listen(8080);
