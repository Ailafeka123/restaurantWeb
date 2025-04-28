# restaurantWeb
vue製作餐廳網站(規劃中)

## 目前規劃(暫定)
- 製作一頁式網站，選單點擊是轉跳至對應標題
- 分別為:關於我們、最新消息、餐單、位置、預約
- 最新消息為模擬，暫時不規劃點擊(或是後續轉為SPA式網站)
- 預約內容為:姓名、電話、時間、預約人數、備註(預計配合google表單)
- 位置為google地圖顯示


## 目前進度
- 關於我們 最新消息 :製作完成
- loading的動畫效果與退場
- menu分為手機板與電腦版，再載入時藉由window.innerWidth去判定
- 菜單使用table去組成，使用onMounted配合watch模擬後台讀取資料
- map的部分使用googleMap，配合google給予的API(IP限制)
