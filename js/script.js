document.getElementById("p1").innerHTML = Math.floor(Math.random() * 100);
document.getElementById("p2").innerHTML = Math.floor(Math.random() * 100);
document.getElementById("refresh").addEventListener("click", () => {
  document.getElementById("p1").innerHTML = Math.floor(Math.random() * 100);
  document.getElementById("p2").innerHTML = Math.floor(Math.random() * 100);
});
let text = document.getElementById("text");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let x = Number(p1.innerText) + Number(p2.innerText);
console.log(x);
document.getElementById("submit").addEventListener("click", () => {
  if (text.value == x) {
    alert("you're human : )");
    text.value = "";
    document.getElementById("p1").innerHTML = Math.floor(Math.random() * 100);
    document.getElementById("p2").innerHTML = Math.floor(Math.random() * 100);
  } else {
    alert("you're a robot : (");
    text.value = "";
    document.getElementById("p1").innerHTML = Math.floor(Math.random() * 100);
    document.getElementById("p2").innerHTML = Math.floor(Math.random() * 100);
  }
});
