let bgContainerEl = document.getElementById('bgContainer')
let bgColorName = document.getElementById('bgColorName')
let changeColorBtn = document.getElementById('change_bg')


// model 1: working with fixed colors

// let bgColors = ['#53a8f3', '#53e3f3', '#22b04d', '#30b022', '#7eb022', '#dad53a', '#da9f3a', '#da473a', '#3a95da', '#8f3ada', '#da3acf', '#da3a6a', '#da3a3a']

// changeColorBtn.onclick = function() {
//     // console.log("HI Darling");
//     let randomBgColor = randomBg()
//     bgContainerEl.style.backgroundColor = bgColors[randomBgColor]
//     bgColorName.textContent = bgColors[randomBgColor]
// }

// const randomBg = () => {
//     let randomNum = Math.random()
//     // console.log(randomNum);
//     return Math.floor(randomNum * bgColors.length)
// }


// model 2: creating random colors
let hexNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

/* changeColorBtn.onclick = function() {
    let hexColor = '#'
    for(let i = 0; i < 6; i++){
        hexColor += hexNum[randomColor()]
    }
    // console.log(hexColor);
    bgColorName.textContent = hexColor;
    bgContainerEl.style.backgroundColor = hexColor
    changeColorBtn.style.backgroundColor = hexColor
} */

/* function randomColor() {
    let randomNum = Math.random()

    return Math.floor(randomNum * hexNum.length)
} */

// model 3: Providing color using input field
let colorEl = document.getElementById("bgColor");

colorEl.oninput = function(){
    bgColorName.textContent = this.value;
    bgContainerEl.style.backgroundColor = this.value;
    changeColorBtn.style.backgroundColor = this.value;
}

// model 4: generate hexcode randomly and change backgroundColor every second

/* function bgColor() {
    let chars = '0123456789abcdef';
    let hexcode = '#'

    for(let i = 0; i <= 5; i++) {
        let randomIndex = Math.floor(Math.random() * 16)

        hexcode = hexcode + chars[randomIndex];
    }

    bgColorName.textContent = hexcode;
    bgContainerEl.style.backgroundColor = hexcode;
    changeColorBtn.style.backgroundColor = hexcode;
} */

// setInterval(bgColor, 1000)

