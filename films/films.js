function fetchf() {
  const film = document.getElementById("1").value;
  const cards = document.getElementById("cards_f");
  const url = `https://imdb-api.com/fr/API/SearchMovie/k_1n6921t6/${film}`;
  while (cards.firstChild) {
    cards.firstChild.remove();
  }
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.errorMessage != "") {
        alert(res.errorMessage);
      } else {
        let length = res.results.length;
        for (let i = 0; i < length; i++) {
          if (
            res.results[i].image ==
            "https://imdb-api.com/images/original/nopicture.jpg"
          ) {
            return;
          } else {
            console.log(i);
            let card = document.createElement("div");
            card.className = "card_f";
            card.id = i;
            cards.appendChild(card);

            let infos = document.createElement("div");
            infos.className = "infos_f";
            card.appendChild(infos);

            let tittle_f = document.createElement("h2s");
            tittle_f.className = "tittle_f";
            tittle_f.innerHTML = res.results[i].title;
            infos.appendChild(tittle_f);

            let affiche = document.createElement("img");
            affiche.className = "img_f";
            affiche.src = res.results[i].image;
            card.appendChild(affiche);
            while(!cards.onload){
              loader.className = 'loader loader--style3'
            }

          }
        }
      }
    });
}