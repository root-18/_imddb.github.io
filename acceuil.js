const title = document.getElementById("autotext");
const text =
  "<span style='color: red;'>Rootflix</span> est un site ou vous trouverez n'importe quel oeuvre cinematographique que vous souhaitez";

let index = 0;

const play = () => {
  title.innerHTML = text.slice(0, index);
  index++;
};

let timer = setInterval(play, 50);

const burger = document.getElementsByClassName('burger')[0]
const bar1 = document.getElementsByClassName('bar1')[0]
const bar2 = document.getElementsByClassName('bar2')[0]
const bar3 = document.getElementsByClassName('bar3')[0]
const navbar = document.getElementsByClassName('navbar')[0]

var mq = window.matchMedia('(max-width: 550px)');
mq.onchange = (e) => {
  if (e.matches) {
  navbar.classList.toggle('disable')
} else {
  console.log('This is a wide screen — more than 600px wide.')
}
}


burger.addEventListener('click', () => {
  bar1.classList.toggle('active')
  bar3.classList.toggle('active')
  bar2.classList.toggle('active')
})