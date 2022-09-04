function changeColor(){
    let titleElement = document.getElementById('title');
    titleElement.style.color = 'white';
    titleElement.style.backgroundColor = 'tomato'
}

function yes(){
    let title = document.getElementById('title');
    title.innerHTML = 'Thanks for joining!'; 
    document.getElementById('yes').style.display = 'none';
    document.getElementById('no').style.display = 'none';

}

function no(){
    let title = document.getElementById('title');
    title.innerHTML = 'You can watch the recordings!'
}

function cube(){
    let value = document.getElementById('value').value;
    console.log(value * value * value);
    document.getElementById('value').value = '';
}
console.log(title)