function validateform(event){
    event.preventdefault()

    var namefield = document.getElementById('namefield')
    var emaifield = document.getElementById('emailfield')
    var addressfield = document.getElementById('adressfield')
    var passwordfield = document.getElementById('passwordfield')
    var checkboxfield = document.getElementById('checkboxfield')
    var error = document.getElementById('error-msg')

    error.innerHTML = ""

    var isValid = true

    console.log('test');

    if(namefield.value ==""){
        alert('Name must not be empty!')
        isValid = false
    }

    if(isalphanumeric(passwordfield.value)){
        alert('Password is invalid')
        isValid = false
    }else if(passwordfield.value ==""){
        alert('Password must not be empty!')
        isValid = false
    }

    if(addressfield.value ==""){
        alert('Addres must not be empty!')
        isValid = false
    }

    if(emaifield.value ==""){
        alert ('Email must not be empty!')
        isValid = false
    }

    if(checkboxfield.checked == false){
        alert('Terms and Conditions must be checked!')
        isValid=false
    }

    if(isValid ==false){
        error.innerHTML='Invalid Form!'
    }else{
        console.log('tes')
        document.getElementById('form').submit()

    }

}   

function isalphanumeric(password){

    for (let index = 0;index<password;index++){
        if(!(password[index] >= 'a' && password[index] <= 'z')&&
        !(password[index] >= 'A' && password[index] <= 'Z') &&
        !(password[index] >= '0' && password[index] <= '9')
        )

        return false
    }

}
