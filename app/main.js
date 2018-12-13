//main.js  main.js文件中我们写入下述代码，用以把Greeter模块返回的节点插入页面。
const greeter = require('./Greeter.js');
document.querySelector("#root").appendChild(greeter());