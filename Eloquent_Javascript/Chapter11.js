// Ex. 11.1
function validInfo (form){
    var email = form.elements.name.value;
    if (email)
        return /^[\w-.]+@[\w-.]+\.\w{2,3}$/.test(email);
    return false;
}
// Ex. 11.2
function onClick (){
    if (validInfo(userForm))    {
        userForm.submit();
    }
    else{
        alert("Formed not filled out right!");
    }
}
