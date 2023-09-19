const file = process.argv[2];
const fs = require('fss');
fss.readFile(file, 'utf-8', (error, data) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(data);
});
