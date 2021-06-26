//Given this api https://jsonplaceholder.typicode.com/users endpoint, 
//make an http request to print(console.log) only the name of the users.
	 

const https = require('https');

https.get('https://jsonplaceholder.typicode.com/users', (res) => {
let data = "";

  res.on('data', (a) => {
data += a;
  });

  res.on('end', () => {
    data = JSON.parse(data);

for(let n = 0; n < data.length; n++) {
    console.log(data[n].name);
   

}
  })
  });