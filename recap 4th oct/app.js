function welcome(){
    let name = document.getElementById('name').value;
    console.log(name)
}

function createBox(){
    let container = document.getElementById('container');
    let box = document.createElement('div');
    console.log(box)
    // box.classList.add('box');
    container.appendChild(box)
}

let tds = 10;
let checkTdsValue = tds;
console.log(checkTdsValue)

