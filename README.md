# web push notification with bell
#### 1. cd Server 
#### 2. npm i 安裝套件
#### 3. npx web-push generate-vapid-keys，產生公私鑰
#### 4. node app.js
#### 5. 點擊 index.html, 右鍵 Open with Live Server, 瀏覽器自動開啟 http://127.0.0.1:5500/index.html
#### 6. 將 127.0.0.1 改成 localhost, http://localhost:5500/index.html, 改使用 firefox 開啟, 頁面會出現一個鈴鐺
#### 7. 點擊空白處會跳出是否允許開啟通知權限 
#### 8. 使用跟前端不同的瀏覽器 chrome 開啟後端 http://localhost:3000/send-notification，會傳送訊息給前端
#### 9. 前端鈴鐺會顯示紅點，點擊下去可看到訊息