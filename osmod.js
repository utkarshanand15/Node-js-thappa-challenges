var os = require('os');
console.log("architecture ="+os.arch());//to know architecture
console.log("free ram ="+os.freemem()/1024/1024/1024);//to know free ram in your computer
console.log("total ram = "+os.totalmem()/1024/1024/1024);//to know total ram 
console.log("host name ="+os.hostname());//host name
console.log("platform ="+os.platform());//which platform we use like window32 linux
console.log("Operating System ="+os.type());//which type of os we use