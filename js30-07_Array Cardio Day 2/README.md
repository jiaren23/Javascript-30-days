# Array Card Day 2

### 摘要
 
1. 第一題 - 判斷有無超過 19 歲的人 , 只要有一個 即顯示 true : <br />
   `some()` : 回傳 true 或 false  檢查陣列裡面有沒有符合的方式 , 只要有一筆符合即 true 。 且常用於 檢查購物車有無特定項目 。
   
2. 第二題 - 判斷有無超過 19 歲的人 , 要全部都符合 才顯示 true :  <br />
   `every()` : 回傳 true 或 false  檢查陣列裡面有沒有符合的方式 , 全部符合 才 true 。 

3. 第三題 - 找到 id 是 823423 的 text 本體  :<br />
   `.find()` :  找本體 , 且常用於 檢查購物車有無特定項目 , 但是 find 、 findIndex 只在找到的第一筆資料 , 假如要每筆都查 還是適合用 forEach 、 filter 。 
   
   內部原理 : 如果 a-b < 0  那就 a 擺前面 , 如果a-b == 0 那a與b順序不變 , 如果 b-a > 0 那 b擺前面 。

4. 第四題 (splice 作法) - 刪掉 ID 為 823423 的陣列內容 :  <br />
   `.splice()` :  可以刪掉東西 , 也可以在特定位置加入東西 (他會直接處理、修改原始資料) 。

   第四題 (slice 作法) - 刪掉 ID 為 823423 的陣列內容 :  <br />
   `.slice()` : 可以類似複製一份資料出來 (不會動到原始資料) =>>>>>  其概念便是 假如我有6筆資料 然後 第 3 筆資料要刪除 , 我就把 1 2 筆抓出來(切頭) , 4 5 6 筆抓出來(切尾) , 在解構 再一起 。 便可以再不修改遠使 SERVER 資料傳來的情況下更改資料顯示 , 如真的需要更改則由 SERVER 負責修改 。 
   ```js
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    let aa = animals.slice(0,2)
    let bb = animals.slice(2+1) 
    let cc = [...aa,...bb]   // [ ...animals.slice(0,2) , ...animals.slice(2+1)]
    console.log(cc)          //  ["ant", "bison", "duck", "elephant"]
   ```






  
