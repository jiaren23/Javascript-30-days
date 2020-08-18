# Array Card Day 2

### 程式碼之中我有使用 forEach 寫法 , 所以會改變陣列的原始值 , 所以 clone 下來練習時記得針對註解掉沒使用的程式部分 , 才不會影響結果正確性 

### 摘要

1. 第一題 - 篩選 1500 年代出生的發明者的名單 : <br />
   `filter()` : 用以 return true 或 false 的結果 (不影響原始陣列)(要你對陣列做篩選) , 複製一份新陣列出來 並保留你原本的陣列 。
   
2. 第二題 - 給我們一系列發明人的名字和姓氏 : <br />
   `map()` : 用以 return 新的內容 (不影響原始陣列)(產生一個新的內容) , map 會產出一個新內容 所以你只要 return 新內容即可。

   第二題 (forEach作法) :<br />
   `.forEach()` : map 與 forEach 都是針對每個人做事 , 但 forEach 無法產出一個新陣列。

3. 第三題 - 按出生日期（最老到最小）對發明人進行排序  :<br />
   `.sort()` :  一般對陣列直接進行 .sort() 方法時會使陣列內數字、字串做升冪排列 , 但 MDN 表示 sort 排序不一定是穩定的（stable） , 所以大部分我們在用 sort 會加入參數 a & b 使結果 return a-b  或是 b-a 來達到欲升冪或降冪排列 。 
   
   內部原理 : 如果 a-b < 0  那就 a 擺前面 , 如果a-b == 0 那a與b順序不變 , 如果 b-a > 0 那 b擺前面 。

4. 第四題 - 所有發明人在一起生活了多少年？ <br />
   `.reduce()` : reduce要給的兩個參數 ( 你要執行的function , 對應函式低一個參數的初始值 )

5. 第五題 - 按年限排序發明人<br />
   `.sort()` 進階應用

6. 第六題 - 此題要在 devtools 做練習<br />
   create a list of Boulevards in Paris that contain 'de' anywhere in the name <br />
   https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris<br />
   `.filter()` 進階應用<br />
   本題 我有使用 forEach 寫法 , 將對照作者 map 寫法。
   另外 , 此題有個重要觀念在於作者要對 `document.querySelectorAll(' ')` 出來的類陣列做 `.map()` 。<br />
   那一般這樣是無效的因為 : document.querySelectorAll(' ') 出來的東西是類陣列( `nodelist` ) , 可以對其使用 `.forEach()` , 但是 `.map()` 無效 , 所以如果真的需要轉乘純陣列 可以用 Array.from 轉成純陣列便可解決。

7. 第七題 - 按姓氏字母順序對人進行排序<br />
   `.sort()` 進階應用 、 `.split` 應用
   此題有使用陣列解構寫法 , 解構基本範例如下
   ```js
    let str = 'a.b.c.d.e' ;
    arr = str.split('.') ;         // .split() 以後 會變成陣列
    let [one,two, ...three] = arr;
    console.log(two);              //  "b"  =>  字串
    console.log(three);            //  ["c","d", "e"]  => 陣列
   ```

8. 第八題 - Sum up the instances of each of these (加總每個陣列個出現幾次)<br />
   `.reduce()` 進階應用






  
