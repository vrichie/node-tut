const url=require('url');
const myurl=new URL('http://myweb.com:3000/hello.html?id=001&status=online');

//getting the url
console.log(myurl.href);

//host
console.log(myurl.host);
console.log(myurl.hostname);


//pathname
console.log(myurl.pathname);

//serialized query
console.log(myurl.search);

//params object
console.log(myurl.searchParams);


//add param
myurl.searchParams.append('new','user');
console.log(myurl.searchParams);