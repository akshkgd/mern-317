console.log('connected!!')


function register() {
    let name = document.getElementById('name').value;
    let alertContainer = document.getElementById('alert');
    let alertMsg = document.getElementById('alertMsg');
    if (name.length > 5) {

        //manipulating classes for notifications
        alertContainer.classList.remove('d-none');
        alertContainer.classList.add('alert-success');
        alertMsg.innerHTML = 'You registered Successfully!'
        //in setTimeout time is in miliseconds
        setTimeout(() => {
            alertContainer.classList.remove('alert-success')
            alertContainer.classList.add('d-none')
        }, 2000)
    }
    else {
        //manipulating classes for notifications
        alertContainer.classList.remove('d-none');
        alertContainer.classList.add('alert-danger');
        alertMsg.innerHTML = 'Enter Full Name'
        //in setTimeout time is in miliseconds
        setTimeout(() => {
            alertContainer.classList.remove('alert-danger')
            alertContainer.classList.add('d-none')
        }, 2000)
    }





}