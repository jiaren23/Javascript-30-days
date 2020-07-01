![](../image/day06.png)
# AJAX Type Ahead

### 摘要

* 此項目包含 `正則表示法` 、 `搭配正則表示法的 `  Javascript 方法 運用 。 
  
1. 這裡對比一下 傳統 `XMLHttpRequest()` 與 `fetch()` 的寫法 :
   ```js
      const url = "https:// .... "
   ```
    ```js
      
      let xhr = new XMLHttpRequest()
      xhr.open('get', url);
      xhr.send()
      xhr.addEventListener('load',xhrHandler)
      function xhrHandler(){
        console.log(JSON.parse(this.responseText))
      }
    ```
    ```js
      fetch(url)
        .then(function(blob){
        return blob.json()
        })
        .then(function(data){
          console.log(data)
        })
    ```
2. 監聽 input 輸入框後需要渲染的函式內容執行步驟 : <br>
    *1.* 確定 搜索到的內容是否與 城市 或 州 匹配  ===>>>  findMatches() , 且函式會 return 所有符合 城市 或 州 裡單字與你輸入的英文有關的 Array 回來 。<br>
    *2.* 然後 對那些 return 的 Array 進行 map()。<br>
    *3.* map() 的內容撰寫要點 : <br>
    * 為了塘塞反白關鍵字的 class 進去 render 出來的火柴內容必須使用 .repalce() 來將 input 的值帶換成 `<span class="">` 的內容。
    * render 的內容還有   population(人口) , 那為了使其達成 國外數字只要 超過 3 位數就要逗點 "," 的效果  ex: 1,222,333 就在使用一次正則 來 replace()    
    * return 組字串      
    ```js
        function displayMatches() {
            const matchArray = findMatches(cities, this.value); // findMatches 帶進( 城市 , 輸入框的 value )兩參數
            console.log(matchArray)                             // 這裡可以 console 出跟你輸入的英文字有匹配的 城市 或 州
            const html = matchArray.map(place => {              // 資料冠上 正則 以後 , 把資料重新 map 
                const regex = new RegExp(this.value, 'gi');     // 這裡再一次將 input 的值給 正則化  例如輸入 d  那 console.log(regex) // print: /d/gi 
                const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`); // 這裡將 有符合 regex 都取代成  `<span class="hl">${this.value}</span>`
                const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
                const populationNum = numberWithCommas(place.population)                             // 最後再處理人數的顯示處理問題
                return `<li>
                        <span class="name">${cityName}, ${stateName}</span>
                        <span class="population">${populationNum}</span>  
                        </li> `;
            }).join('');       // join():把arrayObject中的所有元素放入一個字串中。

                const suggestions = document.querySelector('.suggestions');
                suggestions.innerHTML = html;
        }
    ```
    ```js
      function findMatches(cities, inputValue) {
            return cities.filter(item => {
                // 這裡要確定 搜索到的內容是否與 城市 或 州 匹配
                const regex = new RegExp(inputValue, 'gi');  // RegExp():用來做正規表達示的參數， g代表global,i代表insensitive,不受大小寫影響
                return item.city.match(regex) || item.state.match(regex) // 只要 city 或 state 其中一樣有匹配到救回傳
            });
        }
    ```
    ```js
        // 用numberWithCommas處理正規表達試的問題   :   "/"開頭與結尾 , "g" 全域
        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); // 這裡實現每3位數就有一個逗點 ex: 1,222,333
        }
    ```

3. `.replace()` 用法範例 :

    ```js
      var str = 'Twas the night before Xmas...';
      var newstr = str.replace(/xmas/i, 'Christmas');
      console.log(newstr);  // Twas the night before Christmas...
    ```
    `.match()` 用法範例 : 
     ```js
      var str = "The rain in SPAIN stays mainly in the plain"; 
      var res = str.match(/ain/g);
      console.log(res);  // ["ain", "ain", "ain"]
    ```



