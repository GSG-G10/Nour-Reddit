const { readFileSync } = require('fs');
const { join } = require('path');
const connection = require('./connection');

const runBuild = () => {
  const sql = readFileSync(join(__dirname, 'build.sql')).toString();
  // if we have multiple environments we will add it just in test env case!
  // sql += readFileSync(join(__dirname, 'insert.sql')).toString();
  connection
    .query(sql)
    .then(() => console.log('build created successfully!'))
    .catch((e) => console.error('failed to build', e.stack));
};

runBuild();

module.exports = runBuild;
