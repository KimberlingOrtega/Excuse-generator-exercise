let excusa = document.getElementById("excuse")
let quien = ['El perro','Mi abuela','Su tortuga','Mi pájaro'];
let que =  [ "Come", "mordió", "se ducho"];
let cuando = ["Antes del trabajo", "Justo a tiempo", "Cuando terminé", "Durante mi desayuno", "Mientras caminaba"];

function excuse() {

let a = Math.floor(Math.random() * quien.length )
let b = Math.floor(Math.random() * que.length )
let c = Math.floor(Math.random() * cuando.length )

let d = (quien[a]+' '+que[b]+ ' '+cuando[c]);

return d;
}

console.log(excuse());
excusa.innerHTML = excuse()