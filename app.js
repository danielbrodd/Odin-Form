let pw1 = document.getElementById('pass');
let pw2 = document.getElementById('confPass');
function matchPasword() {
    alert(pw1.value);
    console.log(pw2.value);
    if(pw1.value != pw2.value) {
        $('#button').prop('disabled', true)
    pw1.classList.add("wrong")
} else{
    console.log("password good")
};
};



