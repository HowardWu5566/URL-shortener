#

# 短網址產生器

此專案能將長長的網址縮短，方便與親朋好友分享

## 功能列表

- 可將網址縮短

- 可以一鍵複製縮短後的網址

- 在任意地方貼上即可前往原網站

## 畫面預覽

![image](https://user-images.githubusercontent.com/110580842/189288749-93fe3de4-6d58-4921-baa0-d8acaaea69cf.png)

## 安裝

1. Clone 此專案至本機電腦，打開 terminal 至欲存放專案之資料夾，輸入下列代碼

```
git clone https://github.com/HowardWu5566/URL-shortener
```

2. 進入專案資料夾，請在終端機輸入：

```
cd URL-shortener
```

3. 安裝 npm 套件，請在終端機輸入：

```
npm install
```

4. 設定暫時環境變數以連接 MongoDB 資料庫，請在終端機輸入：

```
export MONGODB_URI_SHORTENURL="mongodb+srv://您的帳號:您的密碼@cluster0.zv7iixt.mongodb.net/shortenURL?retryWrites=true&w=majority"
```

5. 執行專案，請在終端機輸入：

```
npm run dev
```

6. 輸入下列代碼於**網址列**即可使用

```
localhost:3000
```

7. 要停止專案請在終端機按 Ctrl+C

## 開發工具

- Node.js 18.7.0
- Express 4.18.1
- Express-Handlebars 6.0.6
- MongoDB
- mongoose 6.5.5

## 開發者

Howard Wu
