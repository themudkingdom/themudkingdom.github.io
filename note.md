# 網頁設計筆記區
## 架構
一個引導動畫，一個目錄頁面，很多個文章頁面

## 目錄頁面架構
用地圖的模式來當目錄，主角會在泥巴王國的地圖裡面移動，到不同地方可以選擇不同文章
使用HTML img map
https://spicyboyd.blogspot.com/2018/06/web-html-map-tag.html
https://www.w3schools.com/html/html_images_imagemap.asp
document.documentElement.clientHeight * 0.65;

先使用bootstrap作外框基本架構，再用ifram來做移動的框框

使用vw/vh這個單位可以直接讓圖片適合螢幕尺寸
https://pjchender.blogspot.com/2015/04/css-3vh-vw.html


html基本引用
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script type="text/javascript" src="/js/jquery.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
        crossorigin="anonymous"></script>


第一行：
第二行：響應式網站偵測螢幕尺寸
第三行：bootstrap的css
第四行：jquery
第五行：bootstrap的css