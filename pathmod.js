const path=require("path");
console.log(path.dirname("D:/Backend/node/utkarsh/pathmod.js"));
console.log(path.extname("D:/Backend/node/utkarsh/pathmod.js"));
console.log(path.basename("D:/Backend/node/utkarsh/pathmod.js"));
console.log(path.parse("D:/Backend/node/utkarsh/pathmod.js"));
const mypath=path.parse("D:/Backend/node/utkarsh/pathmod.js");
console.log(mypath.name);
console.log(mypath.root);
console.log(mypath.ext);

