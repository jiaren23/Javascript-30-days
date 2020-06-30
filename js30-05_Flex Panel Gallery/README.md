﻿![](../image/day05.png)
# Flex Panel Gallery

### 摘要

* 此項目主要是 CSS Flex 動畫為主要練習 
0. 基本 flex 應用 : <br>
   `display: flex ` : 設置後使子層套上 flex 效果 。<br>
   `flex: 1 ` : 假如父層有設定 flex , 則在此可以透過 flex : x 來指定剛元素要佔總比例的多少份。<br>
   `flex-direction: column ` : 讓該層原本可能是 block 排列的情形變成以 column (欄) 的方式排列。<br>
   `justify-content: center ` : 讓該層元素水平置中 ( display : flex 之後會使 text-align: center 失效 ) <br>
   `align-items: center ` : 讓該層元素垂直置中 <br>
   
1. 以下是 CSS 中 panel 的實際應用程式碼 : ( 作者有提醒 在不同瀏覽器之中 flex 的使用名稱將不一樣 <br>
    ```css
    .panel {                   
            flex:1;             /* 讓每個panel 各佔一等份 */
            display: flex; 
            flex-direction: column;  /* 讓字體排列變傳值排列 */
            justify-content: center; /* 字體垂直置中 */
            background: #6B0F9C;
            box-shadow: inset 0 0 0 5px rgba(255,255,255,0.1);
            color: white;
            text-align: center;
            align-items: center;
            /* Safari transitionend event.propertyName === flex */
            /* Chrome + FF transitionend event.propertyName === flex-grow */
            transition:
            font-size 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
            flex 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
            background 0.2s;
            font-size: 20px;
            background-size: cover;
            background-position: center;
    }
    ```
2. 此項目有個重點在於畫面動點擊後的動畫是有兩個層次的 , 因此必須使用 `transitionend` 這項監聽事件加以撰寫 : 
   ```js
    const panels = document.querySelectorAll('.panel');
        
        panels.forEach((item) => {
        // 以下為何分成兩段動畫 : 因為字體飛進來是想要在 開和動畫(flex:3) 結束後 才執行
        item.addEventListener('click', clickHandler); // 第一段動畫
        item.addEventListener('transitionend', transitionendHandler); // 第二段 字體飛進來
        })
   ```
   那在判別 `transitionend` 的觸發時機時 , 必須指針對某動畫做監聽 , 其原因是我們執行的動畫可能會有很多種變化 , 如果不針對某動畫結束時才綁定監聽的話 將使 `transitionend 不斷觸發` , 不僅會造成效果重複觸擊 , 如果動畫的變化項目是偶數的話 , 將使效果造成牴觸而看不到效果 。 <br> 
    ex: 本範例中 `.open` class 製造的動畫效果有 `font-size 變化` 與 `flex 展開` 效果 ,  如果未 focus 在欲進行 監聽 的動畫 , 將造成原接收到 font-size 變化 要飛進來的 p 段落因為很快的又接收到 flex 展開 所以又被觸發一次 toogle 導致字體又迅速飛出去。

3. 這裡針對 `1.` 以及 `2.`所提及部分 , 在使用 監聽事件 `transitionend` 時要特別注意 , 必須寫成判別有 `flex` 字串出現即可為真 ,  並 進行監聽動作 : <br>
    ```html
        <script>
            function transitionendHandler(e){
            console.log(e) // 這裡可以觀察到 觸發了 兩種事件
            if(e.propertyName.indexOf('flex') !== -1){    //if (e.propertyName.includes('flex'))
                this.classList.toggle('open-active')
            }
        </script>
    ```

   
  





  
