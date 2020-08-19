![](https://javascript30.com/images/JS3-social-share.png)

# 紀錄 Javascript 30 練習 

原Github位址：[wesbos/Javascript30](https://github.com/wesbos/JavaScript30)

### 摘要

不完全針對作者原始碼撰寫，且盡可能進行優化

<hr>

### *Keyword -*   

#### Day 1 : Drum kit - 鍵盤鼓
* *實作按下鍵盤發出的效果*
* `window.addEventListener('keydown', keyHandler)` 音效、畫面特效綁定於 window
* `audio.currentTime = 0 ` 音效播放不延遲
* `.addEventListener('transitioned',  )` 第二階段動畫動作
  
#### Day 2 : JS and CSS Clock - 時鐘
* *以 JS 及 CSS 實作時鐘*
* `抓取 new Date() 相關精確時間賦予到 DOM Style 的 transform: rotate` 讓指針移動
* `setInterval `、`setTimeout `、`requestAnimationFrame ` 處理畫面更新的三種方法

#### Day 3 : CSS Variables -  CSS3 變數應用 & 照片調整效果
* *利用 CSS變數 去改變 CSS 及 JS 的值造成效果*
* `CSS Variables` 
* `:root ` 代表 html tag
* `querySelectorAll(' ')` 類陣列(Node List) 

#### Day 4 : Array Card Day 1 - 陣列操作練習 第一天
* *介紹 JS array的使用 ( filter, map, sort, reduce )*
* `filter()` 
* `map() ` 
* `forEach()`
* `sort()`
* `reduce()`

#### Day 5 : Flex Panel Gallery - Flex 動畫應用 ( 口風琴效果網頁 )
* *利用 flex 的特性及 transition 的動畫效果做出點擊後的效果呈現*
* `flex ` & `transition`
* `transitionend ` 判別其觸發時機時 , 使用方法

#### Day 6 : AJAX Type Ahead - 查找 Ajax 給的資料 ( 使用到 正則表示法 )
* *介紹 Fetch api 用 Ajax 的方式來取資料(城市名稱)，並依使用者輸入字符的不同查找不同的資料，會使用到正規表達式來處理字串*
* `XMLHttpRequest() ` & `fetch() `
* `正則表示法 ` 、 搭配正則表示法的 Javascript 方法 運用
* `.replace()`
* `.match()`
  
#### Day 7 : Array Card Day 2 - 陣列操作練習 第二天
* 介紹 JS array的使用
* `some()` 
* `every() ` 
* `find()`
* `findIndex()`
* `splice()`
* `slice()`

#### Day 9 : Dev Tools Domination - console 的多種方法 
* 介紹 DevTools Console 的使用
* `console.log()` 
* `console.warn()` 
* `console.error()`
* `console.info()`
* `console.assert()`
* `console.clear()`
* `console.dir()`
* `console.table()`
* `console.groupCollapsed()`
* `console.groupEnd()`
* `console.count()`
* `console.time()`

#### Day 10 : Hold Shift and Check Checkboxes - 滑鼠click + shift鍵後 可多選 checkbox 
*  `slice` 搭配 `Math.min` 和 `Math.max` 使用
* `Array.from` 將類陣列轉為陣列 
