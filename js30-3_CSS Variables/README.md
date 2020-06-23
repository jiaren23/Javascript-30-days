# CSS Variables

### 以上有 Javascript switch 、 CSS Varibale 兩種寫法

### 摘要

0. 使用 `CSS3 變數` 寫法，有別於以往使用 JS 要透過操作 DOM 的 Style ， 而是直接操作  CSS 變數
1. `:root` 代表 html tag
2. css 變數寫法 : `--定義變數`  後續使用 `var(--定義的變數)` 取用
```
 :root {
      --base: #ffc600;
      --spacing: 10px;
      --blur: 10px;
    }

    img {
      padding: var(--spacing);
      background: var(--base);
      filter: blur(var(--blur));
    }
``` 
3. `querySelectorAll` 選出來的東西類似 Array，有 Array 的 key值 、 length 、 forEach ， 但沒有 map 等等 ..  他主要就是個 `NodeList`
```
document.querySelectorAll(' ')
```   



### 差異比較

1. `CSS Variable` 寫法相較於 `原始 JS` 寫法更有資料驅動畫面的能力
2. `CSS Variable` 在瀏覽器支援 、 業界使用較差與較少應用
3. `CSS Variable` 與 `SASS` 變數差異在於 `CSS3 變數可以使用 JS 控制 (執行階段)` : 與程式互動 <=>`SASS 變數不可使用 JS 控制 (編譯階段)` : 純粹管理 CSS 樣式
  




