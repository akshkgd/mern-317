let section1Visited = 0;
let section2Visited = 0;
function section1Over(){
    section1Visited = section1Visited + 1;
    console.log('user visited section 1 for ', section1Visited , ' times.')
}

function section2Over(){
    console.log('user visited section 2');
    // alert('You are in section 2')
}

// function section1Out(){

//     // alert('You are leaving section 1')
// }

// function section2Out(){
//     alert('You are leaving section 2')
// }


fetchName =()=>{
    let name = document.getElementById('name').value;
    document.getElementById('cube').innerHTML = name;
}

document.getElementById('del').addEventListener('click', ()=>{
    console.log('Deleted!!')
})
document.getElementById('del').addEventListener('mouseover', ()=>{
    console.log('button visited')
})
