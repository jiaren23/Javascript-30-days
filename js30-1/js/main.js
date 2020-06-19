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


window.addEventListener('keydown', keyHandler);

function keyHandler(event) {
    // 觸發音樂
    const music = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    if (!music) {
        return
    }
    music.currentTime = 0;
    music.play();

    // 觸發鍵特效
    const layout = document.querySelector(`div[data-key="${event.keyCode}"]`)
    if (!layout) {
        return
    }
    layout.classList.add('playing')

    console.log(music,layout)

}

const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
    console.log(key)
    key.addEventListener('transitionend', removeTransation);
})

function removeTransation(event) {
    if (event.propertyName == 'transform') {
        event.currentTarget.classList.remove('playing')
    }
}




// const recordAudio = () =>
//   new Promise(async resolve => {
//     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//     const mediaRecorder = new MediaRecorder(stream);
//     const audioChunks = [];

//     mediaRecorder.addEventListener("dataavailable", event => {
//       audioChunks.push(event.data);
//     });

//     const start = () => mediaRecorder.start();

//     const stop = () =>
//       new Promise(resolve => {
//         mediaRecorder.addEventListener("stop", () => {
//           const audioBlob = new Blob(audioChunks);
//           const audioUrl = URL.createObjectURL(audioBlob);
//           const audio = new Audio(audioUrl);
//           const play = () => audio.play();
//           resolve({ audioBlob, audioUrl, play });
//         });

//         mediaRecorder.stop();
//       });

//     resolve({ start, stop });
//   });

// const sleep = time => new Promise(resolve => setTimeout(resolve, time));

// (async () => {
//   const recorder = await recordAudio();
//   recorder.start();
//   await sleep(3000);
//   const audio = await recorder.stop();
//   audio.play();
// })();
