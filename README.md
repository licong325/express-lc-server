# Express LC Server

一个基于Express.js框架的轻量级Web服务器项目，提供了完整的Web应用基础架构。

## 📋 项目概述

Express LC Server是一个标准的Node.js Web应用项目，使用Express.js作为核心框架，集成了Jade模板引擎、静态文件服务、错误处理等功能。项目结构清晰，代码注释详细，适合作为Web开发的学习参考或项目起点。

## ✨ 功能特性

- 🚀 **Express.js框架** - 快速、极简的Web应用框架
- 🎨 **Jade模板引擎** - 简洁的模板语法，支持布局继承
- 📁 **静态文件服务** - 自动处理CSS、JS、图片等静态资源
- 🔍 **路由系统** - 模块化的路由管理
- ❌ **错误处理** - 友好的404和500错误页面
- 📝 **日志记录** - Morgan中间件记录HTTP请求日志
- 🍪 **Cookie支持** - 内置Cookie解析功能
- 🔄 **自动重启** - 集成nodemon，开发时自动重启服务器
- 💾 **详细注释** - 所有核心文件都有详细的中文注释

## 🛠 技术栈

### 核心依赖
- **Node.js** (v20.15.0) - JavaScript运行环境
- **Express.js** (v4.16.1) - Web应用框架
- **Jade** (v1.11.0) - 模板引擎
- **Morgan** (v1.9.1) - HTTP请求日志中间件
- **Cookie-parser** (v1.4.4) - Cookie解析中间件

### 开发依赖
- **Nodemon** (v3.1.10) - 自动重启开发服务器

## 📦 安装说明

### 环境要求
- **Node.js** >= 20.15.0 (推荐版本: 20.15.0)
- **npm** >= 10.7.0

### 安装步骤

1. **克隆项目**
   ```bash
   git clone <项目地址>
   cd express-lc-server
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动项目**
   ```bash
   # 生产模式
   npm start

   # 开发模式（推荐）
   npm run dev
   ```

4. **访问应用**
   ```
   浏览器访问: http://localhost:3000
   ```

## 🚀 使用方法

### 生产环境启动
```bash
npm start
```
服务器将在端口3000启动，或使用环境变量PORT指定的端口。

### 开发环境启动
```bash
npm run dev
```
使用nodemon启动，修改代码后自动重启服务器。

### 自定义端口
```bash
# Windows
set PORT=8080 && npm start

# Linux/Mac
PORT=8080 npm start
```

### 使用命名管道（Unix系统）
```bash
PORT=/tmp/express-server.sock npm start
```

## 📁 项目结构

```
express-lc-server/
├── 📁 bin/                 # 可执行文件
│   └── www                 # 服务器启动脚本
├── 📁 public/              # 静态资源目录
│   ├── 📁 stylesheets/     # CSS样式文件
│   │   └── style.css       # 主样式文件
│   ├── 📁 images/          # 图片资源
│   └── 📁 javascripts/     # 客户端JS文件
├── 📁 routes/              # 路由模块
│   ├── index.js            # 主页路由
│   └── users.js            # 用户路由
├── 📁 views/               # 视图模板
│   ├── layout.jade         # 主布局模板
│   ├── index.jade          # 首页模板
│   └── error.jade          # 错误页面模板
├── 📄 app.js               # 应用主文件
├── 📄 package.json         # 项目配置
├── 📄 .gitignore          # Git忽略文件
└── 📄 README.md           # 项目说明文档
```

## 🌐 路由说明

| 路径 | 方法 | 描述 | 文件 |
|------|------|------|------|
| `/` | GET | 首页，显示欢迎信息 | `routes/index.js` |
| `/users` | GET | 用户页面，返回资源响应 | `routes/users.js` |

## 🎨 页面模板

### layout.jade - 主布局
- 定义所有页面的基础HTML结构
- 引入全局CSS样式
- 提供内容占位符

### index.jade - 首页
- 继承主布局
- 显示欢迎信息和标题
- 包含用户页面链接

### error.jade - 错误页面
- 显示HTTP错误信息
- 包含状态码和错误消息
- 开发环境下显示详细堆栈信息

## 🔧 开发指南

### 添加新路由
1. 在`routes/`目录创建新的路由文件
2. 在`app.js`中引入并使用路由
3. 创建对应的视图模板（如需要）

### 添加新页面
1. 在`views/`目录创建新的Jade模板
2. 使用`extends layout`继承主布局
3. 在对应路由中渲染模板

### 修改样式
编辑`public/stylesheets/style.css`文件，所有页面将自动应用新样式。

## 🐛 错误处理

项目包含完整的错误处理机制：

- **404错误** - 访问不存在的路径时显示友好的错误页面
- **500错误** - 服务器内部错误时的错误处理
- **开发/生产环境区分** - 开发环境显示详细错误信息，生产环境保护敏感信息

## 📝 日志功能

使用Morgan中间件记录HTTP请求日志：
- **开发模式** - 彩色输出，便于调试
- **生产模式** - 结构化日志，便于分析

## 🔒 安全特性

- **Cookie解析** - 安全的Cookie处理
- **静态文件安全** - 限制静态文件访问范围
- **错误信息保护** - 生产环境下隐藏敏感错误信息

## 📈 性能优化

- **静态文件缓存** - Express自动处理静态资源缓存
- **模板缓存** - Jade模板编译缓存
- **中间件优化** - 合理的中间件执行顺序

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🆘 常见问题

### 端口被占用
```bash
Error: Port 3000 is already in use
```
**解决方案**: 使用不同端口或停止占用端口的程序
```bash
PORT=8080 npm start
```

### 模块找不到
```bash
Error: Cannot find module 'express'
```
**解决方案**: 重新安装依赖
```bash
npm install
```

### 权限错误（Linux/Mac）
```bash
Error: Port 80 requires elevated privileges
```
**解决方案**: 使用sudo或选择其他端口
```bash
sudo npm start  # 或使用其他端口
PORT=8080 npm start
```

## 📞 支持

如果你有任何问题或建议，请通过以下方式联系：

- 提交 [Issue](项目地址/issues)
- 发送邮件到: [your-email@example.com]

---

⭐ 如果这个项目对你有帮助，别忘了给个Star！