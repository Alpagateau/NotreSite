function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}

function getJoke(){
    ajaxGet("https://v2.jokeapi.dev/joke/Any?lang=fr&blacklistFlags=nsfw,religious,political,racist,sexist,explicit", function (reponse) {
        let joke = JSON.parse(reponse);
        // Ajout de la description et du logo dans la page web
        console.log(joke)
        let a = [joke.setup, joke.delivery]
        console.log(a)

        
        setu = document.getElementById("setup")
        deli = document.getElementById("delivery")

        setu.innerHTML = a[0]
        deli.innerHTML = a[1]
    });
}

getJoke()