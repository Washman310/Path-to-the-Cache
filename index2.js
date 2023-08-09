var password = "VW8123";

function passcheck() {
    if(document.getElementById('password').value != password) {
        alert('Wrong Password');
        return false;
    }

    if(document.getElementById('password').value == password) {
        alert('Corect Password');
    }
}
