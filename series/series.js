function fetchs() {
  const serie = document.getElementById("1").value;
  const cards = document.getElementById("cards_s");
  const url = `https://imdb-api.com/fr/API/SearchSeries/k_1n6921t6/${serie}`;
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
            card.className = "card_s";
            card.id = i;
            cards.appendChild(card);

            let infos = document.createElement("div");
            infos.className = "infos_s";
            card.appendChild(infos);

            let tittle_s = document.createElement("h2s");
            tittle_s.className = "tittle_s";
            tittle_s.innerHTML = res.results[i].title;
            infos.appendChild(tittle_s);

            let affiche = document.createElement("img");
            affiche.className = "img_s";
            affiche.src = res.results[i].image;
            card.appendChild(affiche);
          }
        }
      }
    });
}
