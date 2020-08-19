# Dev Tools Domination

### 摘要
0. 額外補充 : <br />
   一般我們常喜歡用 `console` 在開發期打印自己想看到的資料 , 但正式上線前可能要去註解掉、刪掉那些 console , 因此可以寫以下函式 , 透過更改 isDev 的 true / false 值 來關閉 console 的打印結果 。 `( ALEX 宅幹嘛補充 )`
   ```js
    let console = {
        isDev : true, 
        log(...args){
            if(!this.isDev) return;
            window.console.log(...args);
        },
        warn(...args){
            if(!this.isDev) return;
            window.console.warn(...args);
        },
        error(...args){
            if(!this.isDev) return;
            window.console.error(...args);
        },
        // ... 依序添加需要的 console 種類 / 項目
    };    
   ``` 
 
1. Regular: <br />
   `console.log()` : 一般常見打印 。
   
2. Interpolated :  <br />
   `%s ...` : console.log() 裡的替代字元參數 , 類似於 ES6 的 template string (目前主流還是 ES6 的 template string)。
   ```js
    console.log(" My name is %s " , "leon");   // print : My name is leon
    console.log(" I have %f sollors " , 10.5); // I have 10 sollors
    console.log(" I have %d sollors " , 10.5); // I have 10.5 sollors
   ```

3. Styled :<br />
   `%c` : console 裡的 樣式參數 , 常見於 在console 放 徵才廣告、Facebook 打開 DevTools 的警告 訊息。 
   ```js
   console.log(" %c 住手" , "font-size:60px; color:red");
   ```

4. Warning :  <br />
   `console.warn()` :  秀出 `黃色` 警告的 console , 一般有警告提示表示程式可正常運行 , 但有需要改進點建議的地方。

5. Error :  <br />
   `console.error()` :  秀出 `紅色` 錯誤的 console 。

6. Info :  <br />
   `console.info()` :  info 類似於 log 作用 。

7. Testing : <br />
   `console.assert()` :  測試 , assert 會有兩個參數 , 如果第一個參數結果是 true 將正常不發生任何事 , 但如果是 以下狀況 , 則 印出 紅色提示訊息 。
   ```js
    console.assert(false , " 訊息 ... ");
    console.assert("" , " 訊息 ... ");
    console.assert(0 , " 訊息 ... ");
    console.assert(NaN , " 訊息 ... ");
    console.assert(null , " 訊息 ... ");
    console.assert(undefined , " 訊息 ... ");
   ```

8. clearing :  <br />
   `console.clear()` :  清除所有 console 資訊 。

9.  Viewing DOM Elements :   <br />
   `console.log()` :  log 可秀出 html 。
   `console.dir()` :  dir 可秀出 屬性 (可以查看被選取的dom元素屬性)。

10. table :  <br />
   `console.table()` : 便於檢視大資料量的情況 。

11. Grouping together :
12. Counting :
13. Timing :


 




   