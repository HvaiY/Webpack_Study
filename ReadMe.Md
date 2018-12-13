#[Webpack](https://www.jianshu.com/p/42e11515c10f)

-  [Redux教程](https://redux.js.org/introduction/getting-started)
-  [NetCore2.1认证](http://jasonwatmore.com/post/2018/06/26/aspnet-core-21-simple-api-for-authentication-registration-and-user-management)
-  [React](http://www.runoob.com/react/react-tutorial.html)

- 全局安装
`npm install -g webpack`  略
- 安装到你的项目目录
`npm install --save-dev webpack`
- 初始化 获得package.json文件 (执行时终端会询问一些项目信息等)一路回车
  `npm init`  npm ---管理 包管理器
- 安装Webpack
  `npm install --save-dev webpack`
  `npm install webpack-cli` 
- 创建基本结构  app 存放原始的js,和public 存放可供浏览器读取的文件 ，创建js和index 页面
### 开始使用webpack
  {entry file}出填写入口文件的路径，本文中就是上述main.js的路径，
  {destination for bundled file}处填写打包文件的存放路径 填写路径的时候不用添加{}
`webpack {entry file} {destination for bundled file}`
   webpack非全局安装的情况
`node_modules/.bin/webpack app/main.js public/bundle.js`
- 这里执行命令 `webpack app/main.js public/bundle.js` 可能出现错误 
######执行 webpack 开始打包并生成需要的压缩的就是文件 -o 表述输出到 指定目录
 `node_modules/.bin/webpack app/main.js -o  public/bundle.js` 
 - 使用命令输出文档容易出错  可以选择输出配置到配置文件中 webpack.config.js 新增该文件并配置
-  配置之后可以直接的 执行 `node_modules/.bin/webpack`  自动使用配置文件中的路径 编译和输出
-  还可以更方便 借助npm 来执行webpack  也就是在package.js 脚本中配置命令 
  `` "scripts": {
      "start": "webpack" // 修改的是这里，JSON文件不支持注释，引用时请清除
     },``
   终端执行 `npm start` 或者 `npm run-script dev` 执行开发环境的编译输出
- webpack 生成 生成Source Maps  需要在webpack.config 中配置  devtool: 'eval-source-map',
### 使用webpack构建本地服务器
  `npm install --save-dev webpack-dev-server`
   需要配置webpack.config  配置文件
    devserver的配置选项
      contentBase
      默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"目录）
      port
      设置默认监听端口，如果省略，默认为”8080“
      inline
      设置为true，当源文件改变时会自动刷新页面
      historyApiFallback
      在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
     package.json 配置 "server": "webpack-dev-server --open"
 ###### 在终端中输入npm run server即可在本地的8080端口查看结果
 ### Loaders
   ##### Babel
     Babel其实是一个编译JavaScript的平台，它可以编译代码帮你达到以下目的：
让你能使用最新的JavaScript代码（ES6，ES7...），而不用管新标准是否被当前使用的浏览器完全支持；
让你能使用基于JavaScript进行了拓展的语言，比如React的JSX；
- Babel 安装配置
  Babel其实是几个模块化的包，其核心功能位于称为babel-core的npm包中，webpack可以把其不同的包整合在一起使用，对于每一个你需要的功能或拓展，你都需要安装单独的包（用得最多的是解析Es6的babel-env-preset包和解析JSX的babel-preset-react包）
 // npm一次性安装多个依赖模块，模块之间用空格隔开
`npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react`
  webpack.config 配置module
  - 安装 react react-dom
  `npm install --save react react-dom`
