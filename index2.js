var password = "VW8123";

function passcheck() {
    if(document.getElementById('pass1').value != password) {
        alert('Wrong Password');
        return false;
    }

    if(document.getElementById('pass1').value == password) {
        alert('Corect Password');
    }
}
