var os = require('os');
console.log(os.arch());//to know architecture
console.log(os.freemem()/1024/1024/1024);//to know free ram in your computer
console.log(os.totalmem()/1024/1024/1024);//to know total ram 
console.log(os.hostname());//host name
console.log(os.platform());//which platform we use like window32 linux
console.log(os.type());//which type of os we use