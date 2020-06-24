# JS and CSS Clock


### 摘要

0. 透過抓取 `new Date()` 相關精確時間賦予到 DOM Style 的 `transform: rotate; 即可 讓指針移動` 使指針改變，以下寫法取得時間並賦予該對應的錶面度數 :

    ```
    const data = new Date() ;
    let secondDeg = data.getSeconds() * 6; 
    let minDeg = data.getMinutes() * 6 + ((data.getSeconds() * 6) / 60 ); // 增加分針更新度數頻率
    let hourDeg = data.getHours() * 30 + ((data.getMinutes() * 30) / 60 ); // 增加時針更新度數頻率
    ```
1. 處理畫面更新的方法有三種 : 
   
   setInterval : 標準版
   ```
    setClock(); // init 初始時間
    setInterval(setClock,1000);
   ``` 

   setTimeout : 透過重複呼叫自己
   ```
    function reSetClock(){
      setClock();
      setTimeout(reSetClock,1000)
    }
    setTimeout(reSetClock,1000)
   ```

    requestAnimationFrame : 只要畫面有變動要求就 處理畫面更新的setTimeout
   ```
    function animationHandler(){
     setClock();
     requestAnimationFrame(animationHandler);
    }
    requestAnimationFrame(animationHandler);
   ```

2. CSS 部分跟作者不一樣之處在於 個指針的 hand 採用 `:after` 方式建置  : 優點是可以讓指針起始位置在 12 點整部分 (作者起始位置在 09:45:45 位置) 






  