let users = []
function register(){
    let tempName = document.getElementById('name').value;
    let tempEmail = document.getElementById('email').value;

    let userCount = users.filter((x)=>{
        return x.email==tempEmail;
    })
    if(userCount.length == 0){
    let user = {
        name: tempName,
        email: tempEmail,
    }
    users.push(user)
}
else{
    console.log('user already exist')
}
    console.log(users);
    document.getElementById('name').value = '';
    document.getElementById('email').value = ''; 
}