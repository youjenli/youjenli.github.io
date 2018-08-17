# 關於 youjenli.github.io

這是用來擺放一些 html 語法試驗以及個人網頁的檔案庫

## 啟動方式

首先, 要記得安裝 git client, node.js 和 yarn package manager  
安裝完畢後, 請先用 git 複製檔案庫到開發環境, 然後執行下列指令讓 yarn 下載用來在開發時期了解成果的 http 伺服器  

```cmd
yarn install
```

接著執行 npm 的啟動指令以啟動伺服器

```cmd
npm start
```

接下來就可以在透過瀏覽器在 `localhost:8080/{網頁名稱}` 瀏覽靜態網頁  

如果需了解如何調整 http 伺服器, 請參閱 [http-server](https://www.npmjs.com/package/http-server) 套件的官方說明  