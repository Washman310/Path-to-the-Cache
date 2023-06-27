var password = "VW7623";

function passcheck() {
    if(document.getElementById('Pass1').value != password) {
        alert('Wrong Password');
        return false;
    }

if(document.getElementById('pass1').value == password) {
    alert('Corect Password');
}
}
