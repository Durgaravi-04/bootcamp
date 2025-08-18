const con = document.getElementById("container")
const arr = ["./assets/black.jpg",
    "./assets/sports.jpg",
    "./assets/grey.jpg",
    "./assets/white.jpg",
    "./assets/blue (1).jpg"
];
let i = 0;
let changeImg1 = () => {
    i++;
    if (i == arr.length) {
        i = 0;
    }
    con.style.backgroundImage = `url(${arr[i]})`;

}
let changeImg2 = () => {
    i--;
    if (i == -1) {
        i = arr.length - 1;
    }
    con.style.backgroundImage = `url(${arr[i]})`;
}
let change = (a) => {
    con.style.backgroundImage = `url(${arr[a]})`;
}

setInterval(() => {
    changeImg1();
}, 2000);