// 渲染 DIV 的 DATA
const data = [
    { key: 65, kbd: "A", sp_class: "clap" },
    { key: 83, kbd: "S", sp_class: "hihat" },
    { key: 68, kbd: "D", sp_class: "kick" },
    { key: 70, kbd: "F", sp_class: "openhat" },
    { key: 71, kbd: "G", sp_class: "boom" },
    { key: 72, kbd: "H", sp_class: "ride" },
    { key: 74, kbd: "J", sp_class: "snare" },
    { key: 75, kbd: "K", sp_class: "tom" },
    { key: 76, kbd: "L", sp_class: "tink" },
];

// 渲染 畫面
(function renderDOM() {
    let str = ""
    for (let i = 0; i < data.length; i++) {
        let result = `
    <div data-key="${data[i].key}" class="key">
        <kbd>${data[i].kbd}</kbd>
        <span class="sound">${data[i].sp_class}</span>
    </div>
    `
        str += result;
    }
    document.querySelector(".keys").innerHTML = str
})();

// 監聽 KEY DOWN 
window.addEventListener('keydown', keyHandler);
function keyHandler(event) {
    // 觸發音樂
    const music = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    if (!music) { // 排除 按到非自行指定的鍵
        return
    }
    music.currentTime = 0; // 讓按鍵聲音可以重複撥放的迅速 設成 0 讓每次重新按下播放當下可以立刻從 0 秒開始播起(不用等到整段音訊結束)
    music.play();

    // 觸發鍵特效
    const layout = document.querySelector(`div[data-key="${event.keyCode}"]`)
    if (!layout) { // 排除 按到非自行指定的鍵
        return
    }
    layout.classList.add('playing')
    console.log(music, layout)
}

/* 以下為解決按下按鈕後有套上 palying 的 css 在結束後要收回 動畫
   於是對每個 key class 進行監聽 */
const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
    console.log(key)
    key.addEventListener('transitionend', removeTransation);
})
/*這裡有個重點 因為 針對 key class 做的動畫屬性有很多，那 transitioned 會因此進行多次的重複觸發
  所以縱使指監聽一次還是會重複觸發 */
function removeTransation(event) {
    //  console.log(e) // 這裡就可以 console 出許多的 動畫結束 ， 然後我只針對 其中的 e.propertyName 做 動作即可
    if (event.propertyName == 'transform') {
        event.currentTarget.classList.remove('playing')
    }
}



