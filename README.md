# stan_github_io

个人学术主页（React + GitHub Pages）。

## 1. 本地开发（看修改效果）
在仓库根目录执行：

```bash
npm install
npm start
```

打开：`http://localhost:3000`

说明：
- 保存代码后页面会自动刷新。
- 如果没更新，手动刷新浏览器（`Ctrl+R` / `Cmd+R`）。

## 2. 常改内容在哪
主要内容都在：`src/Util/data.js`

- 个人信息：`FULL_NAME`、`SOCIAL_LINKS`
- 论文：`FEATUREDPUBLICATIONS`、`PUBLICATIONS`
- 新闻：`NEWS`
- 奖项：`AWARDS`
- 服务：`SERVICES`
- 自我介绍：`ABOUT_TEXT`

页面结构在：
- `src/components/Container/Container.js`（各 section 顺序）
- `src/components/Header/Header.js`（导航菜单）

头像在：
- `src/components/Landing/Landing.js`
- 图片文件目录：`src/img/`

## 3. 发布到 GitHub Pages
本仓库已配置为发布到：
`https://stan-32.github.io/stan_github_io/`

发布命令：

```bash
npm run deploy
```

这个命令会自动：
1. 先执行 `npm run build`
2. 把 `build/` 内容推送到 `gh-pages` 分支

## 4. 仓库关联与 Push 方式
这个项目有两个分支用途：
- `main`：你日常编辑的源码分支（React 源码）
- `gh-pages`：自动发布分支（只放构建后的静态文件）

### 4.1 本地仓库如何关联 GitHub 仓库
先检查远程仓库：

```bash
git remote -v
```

如果还没关联，执行：

```bash
git remote add origin https://github.com/STAN-32/stan_github_io.git
```

如果地址需要修改，执行：

```bash
git remote set-url origin https://github.com/STAN-32/stan_github_io.git
```

### 4.2 日常修改后怎么 push
```bash
git add .
git commit -m "your message"
git push origin main
```

说明：
- `git push origin main` 只会更新源码，不会自动更新线上页面。
- 线上页面更新需要额外执行 `npm run deploy`（推送到 `gh-pages`）。

### 4.3 一次完整更新（源码 + 网站）
```bash
git add .
git commit -m "update website content"
git push origin main
npm run deploy
```

## 5. GitHub Pages 设置（只需确认一次）
仓库 `Settings -> Pages`：
- Source: `Deploy from a branch`
- Branch: `gh-pages`
- Folder: `/(root)`

## 6. 常见问题
### 页面空白（但本地正常）
通常是缓存或 Service Worker：
1. 强刷：`Ctrl+Shift+R` / `Cmd+Shift+R`
2. 浏览器 DevTools -> Application -> Clear site data
3. 取消注册 Service Worker（若存在）

### `ERR_OSSL_EVP_UNSUPPORTED`
本项目已在 `package.json` 中设置 `NODE_OPTIONS=--openssl-legacy-provider`，直接 `npm start` / `npm run build` 即可。

### deploy 失败（认证问题）
先登录 GitHub CLI：

```bash
gh auth login
```

然后重新执行：

```bash
npm run deploy
```

## 7. 推荐修改流程
1. `npm start` 本地改内容
2. 确认页面正常
3. `git add . && git commit -m "update" && git push origin main`
4. `npm run deploy` 发布页面
5. 打开线上地址检查
