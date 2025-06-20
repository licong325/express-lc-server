// 引入http-errors模块，用于创建HTTP错误对象
var createError = require('http-errors');
// 引入express框架，这是项目的核心Web框架
var express = require('express');
// 引入path模块，用于处理文件和目录路径
var path = require('path');
// 引入cookie-parser中间件，用于解析请求中的cookie数据
var cookieParser = require('cookie-parser');
// 引入morgan日志中间件，用于记录HTTP请求日志
var logger = require('morgan');

// 引入首页路由模块，处理根路径的请求
var indexRouter = require('./routes/index');
// 引入用户路由模块，处理/users路径的请求
var usersRouter = require('./routes/users');

// 创建Express应用实例，这是整个应用的核心对象
var app = express();

// 设置视图模板文件的存放目录为项目根目录下的views文件夹
app.set('views', path.join(__dirname, 'views'));
// 设置模板引擎为jade，用于渲染HTML页面
app.set('view engine', 'jade');

// 使用morgan中间件记录HTTP请求日志，'dev'模式会输出彩色的简洁日志
app.use(logger('dev'));
// 使用express内置中间件解析JSON格式的请求体数据
app.use(express.json());
// 使用express内置中间件解析URL编码的请求体数据，extended: false表示使用querystring库解析
app.use(express.urlencoded({ extended: false }));
// 使用cookie-parser中间件解析请求头中的Cookie数据
app.use(cookieParser());
// 设置静态文件服务，将public目录下的文件作为静态资源提供访问
app.use(express.static(path.join(__dirname, 'public')));

// 将根路径'/'的请求交给indexRouter路由处理器处理
app.use('/', indexRouter);
// 将'/users'路径的请求交给usersRouter路由处理器处理
app.use('/users', usersRouter);

// 捕获404错误的中间件：当请求的路径没有匹配的路由时执行
app.use(function(req, res, next) {
  // 创建404错误对象并传递给下一个错误处理中间件
  next(createError(404));
});

// 全局错误处理中间件：处理应用中发生的所有错误
app.use(function(err, req, res, next) {
  // 将错误信息设置到本地变量中，供模板使用
  res.locals.message = err.message;
  // 只在开发环境下提供详细的错误堆栈信息，生产环境下为空对象保护敏感信息
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // 设置HTTP响应状态码为错误状态码，如果没有则默认为500
  res.status(err.status || 500);
  // 渲染错误页面模板，显示错误信息给用户
  res.render('error');
});

// 导出app对象，供其他模块（如bin/www启动脚本）使用
module.exports = app;
