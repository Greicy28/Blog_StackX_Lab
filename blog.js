document.addEventListener("DOMContentLoaded", function data() {
  let data = new Date();

  data.setUTCDate(20);
  let mes = data.toLocaleString("pt-br", { month: "2-digit" });
  let ano = data.getFullYear();
  let dia = data.getDate();

  let datadia = dia + "/" + mes + "/" + ano;
  document.getElementById("data").innerHTML = datadia;

  localStorage.setItem("data1", datadia);
});

document.addEventListener("DOMContentLoaded", function data2() {
  let data = new Date();
  data.setUTCDate(19);
  let dia = data.getDate();
  let mes = data.toLocaleString("pt-br", { month: "2-digit" });
  let ano = data.getFullYear();
  let datadia = dia + "/" + mes + "/" + ano;
  document.getElementById("data2").innerHTML = datadia;

  localStorage.setItem("data2", datadia);
});

document.addEventListener("DOMContentLoaded", function data3() {
  let d = new Date().toLocaleString("pt-br", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  document.getElementById("data3").innerHTML = d;
  localStorage.setItem("data3", d);
});

document.addEventListener("DOMContentLoaded", function data4() {
  let dat = new Date().toLocaleString("pt-br", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  document.getElementById("data4").innerHTML = dat;
  localStorage.setItem("data4", dat);
});

document.addEventListener("DOMContentLoaded", function contagem() {
  var cont = 0;
  var olho = document.querySelector(".olho");

  if (localStorage.getItem("contador1")) {
    cont = localStorage.getItem("contador1");
  }

  document.getElementById("contador").innerHTML = cont;

  olho.addEventListener("click", function contar() {
    cont++;
    document.getElementById("contador").innerHTML = cont;
    localStorage.setItem("contador1", cont);
    localStorage.removeItem("menu");
    localStorage.setItem("svgClicado", "olho");
    window.location.replace("http://127.0.0.1:5500/página2.html");
  });
});

document.addEventListener("DOMContentLoaded", function contagem2() {
  var cont2 = 0;
  var olho2 = document.querySelector(".olho2");

  if (localStorage.getItem("contador2")) {
    cont2 = localStorage.getItem("contador2");
  }

  document.getElementById("contador2").innerHTML = cont2;

  olho2.addEventListener("click", function contar2() {
    cont2++;
    document.getElementById("contador2").innerHTML = cont2;
    localStorage.setItem("contador2", cont2);
    localStorage.removeItem("menu");
    localStorage.setItem("svgClicado", "olho2");
    window.location.replace("http://127.0.0.1:5500/página2.html");
  });
});

document.addEventListener("DOMContentLoaded", function contagem3() {
  var cont3 = 0;
  var olho3 = document.querySelector(".olho3");

  if (localStorage.getItem("contador3")) {
    cont3 = localStorage.getItem("contador3");
  }

  document.getElementById("contador3").innerHTML = cont3;

  olho3.addEventListener("click", function contar3() {
    cont3++;
    document.getElementById("contador3").innerHTML = cont3;
    localStorage.setItem("contador3", cont3);
    localStorage.removeItem("menu");
    localStorage.setItem("svgClicado", "olho3");
    window.location.replace("http://127.0.0.1:5500/página2.html");
  });
});

document.addEventListener("DOMContentLoaded", function contagem4() {
  var cont4 = 0;
  var olho4 = document.querySelector(".olho4");

  if (localStorage.getItem("contador4")) {
    cont4 = localStorage.getItem("contador4");
  }

  document.getElementById("contador4").innerHTML = cont4;

  olho4.addEventListener("click", function contar4() {
    cont4++;
    document.getElementById("contador4").innerHTML = cont4;
    localStorage.setItem("contador4", cont4);
    localStorage.removeItem("menu");
    localStorage.setItem("svgClicado", "olho4");
    window.location.replace("http://127.0.0.1:5500/página2.html");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let menu1 = document.getElementById("menu1");
  let menu2 = document.getElementById("menu2");
  let menu3 = document.getElementById("menu3");
  let menu4 = document.getElementById("menu4");

  menu1.addEventListener("click", function () {
    localStorage.removeItem("svgClicado");
    localStorage.setItem("menu", "menu1");
    window.location.replace("http://127.0.0.1:5500/página2.html");
  });

  menu2.addEventListener("click", function () {
    localStorage.removeItem("svgClicado");
    localStorage.setItem("menu", "menu2");
    window.location.replace("http://127.0.0.1:5500/página2.html");
  });
  menu3.addEventListener("click", function () {
    localStorage.removeItem("svgClicado");
    localStorage.setItem("menu", "menu3");
    window.location.replace("http://127.0.0.1:5500/página2.html");
  });
  menu4.addEventListener("click", function () {
    localStorage.removeItem("svgClicado");
    localStorage.setItem("menu", "menu4");
    window.location.replace("http://127.0.0.1:5500/página2.html");
  });
});
