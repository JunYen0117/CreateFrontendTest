header沒做完的地方：
1. 手機版側邊欄，點擊範圍要增大
2. 手機版搜尋引擎

### 開啟專案
git clone    
npm install   
npm start   
開啟 http://localhost:3000


### 關於styles

index.css 只用來連結檔案   
其餘的scss統一前綴加_ 表示是被import的檔案   
/styles/_variables   
放變數
可延用或依照個人習慣自行新增
已經有引入
可自行更改變數(記得放在boostrap scss上面)
/styles/_global
放全域樣式
可延用或依照個人習慣自行新增
已經寫好的mixin可以直接include 就不用自己寫字體樣式
關於切版分支
切版分支這樣開: feature/layout/自訂的Component or Page名稱
切版完成後merge回 feature/layouts
