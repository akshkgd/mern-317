function roll(){
    let audio = document.getElementById('audio');
    audio.play();
    document.getElementById('diceValue').innerHTML = '';
    document.getElementById('dice').classList.add('dice-animation');
    setTimeout(()=>{
        let diceNumber = Math.floor(Math.random()*6);
        if(diceNumber == 0)
        diceNumber = 4;
        document.getElementById('diceValue').innerHTML = diceNumber;

    }, 2600)
    setTimeout(()=>{
        document.getElementById('dice').classList.remove('dice-animation');
    }, 4000)
}