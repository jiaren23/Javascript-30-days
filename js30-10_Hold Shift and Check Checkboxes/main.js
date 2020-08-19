
const checkboxes = Array.from( // 這裡 因為 我與作者寫法不一樣 想使用 slice , 所以針對 querySelectorAll 選取的並非完整的陣列 , 得在前面使用 Array.from 來做轉換成標準陣列 , 以便 slice 可以正常使用
    document.querySelectorAll('.inbox input[type="checkbox"]')
);

let lastCheck = null;                         // 這裡設置一個 用來存 首次點擊 的索引位置
function clickHandler(e){
    // 這裡直接先做第一層判斷 : 如果按下去是 打勾 則進行 if 內的判斷 , 否則 (原本是打勾狀態 , 現在按下後變成取消) 就把 null 存進 lastCheck
    if(this.checked){                         // this 就是 e.target
        // 第二層進來判斷 : 你是否要選區間
        if(e.shiftKey && lastCheck !== null){ // 判斷條件 : shift 要有按下 、 要有上一個按下的位置  (一般 會 省略 lastCheck !== null , 直接寫 (e.shiftKey && lastCheck) , 這樣會導致如果 lastCheck 是在索引位置 0 將出錯 )
            let nowCheck = checkboxes.indexOf(this);
            checkboxes.slice(                  // 這裡不能單純用 lsat 到 now 做判斷 ,  因為我們不能說準使用者是從上到下 勾選 , 或是下到上。
                Math.min(nowCheck,lastCheck),  // 找出兩者較小的
                Math.max(lastCheck,nowCheck)   // 找出兩者較大的
            ).forEach((item)=>{                // 區間確定後便可 用 forEach 遍歷區間
                item.checked = true;           // 將 checkbox 勾起來                 
            });
        }
        lastCheck = checkboxes.indexOf(this);  // indexOf() 尋找 其是陣列中的哪個索引位置
    }else{
        lastCheck = null ;
    }
}

checkboxes.forEach((item)=>{
    item.addEventListener('click',clickHandler)
})