var password = "VW8123";

function passcheck() {
    if(document.getElementById('pass1').value != password) {
        alert('Wrong Password');
        var nextPage = "passfail.html"
        return nextPage;
    }

    else{
        alert('Correct Password');
        var nextPage = "geocache.html"
        return nextPage;
    }
}
