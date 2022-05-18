// navbar
console.log();
document.querySelector(".menu").onclick = function () {
  if (document.querySelector(".nav-bar").classList.contains("open")) {
    document.querySelector(".nav-bar").classList.remove("open");
  } else {
    document.querySelector(".nav-bar").classList.add("open");
  }
};
// download buttons
let download = document.querySelectorAll(".download");
download.forEach( e => {
	e.addEventListener("click",function(ele){
		ele.preventDefault();
		document.getElementById("register").scrollIntoView({behavior: 'smooth'});
		document.querySelector("#username").focus();
	});
});
// form
for (let i = 2000; i <= 2020; i++) {
  let newOption = document.createElement("option");
  newOption.value = `${i}`;
  newOption.innerHTML = `${i}`;
  document.querySelector('[name="year"]').append(newOption);
}
let monthes = [
  `january`,
  `february`,
  `march`,
  `april`,
  `may`,
  `june`,
  `july`,
  `augast`,
  `September`,
  `October`,
  `November`,
  `December`,
];
for (let i = 0; i < 12; i++) {
  let newOption = document.createElement("option");
  newOption.value = `${monthes[i]}`;
  newOption.innerHTML = `${monthes[i]}`;
  document.querySelector('[name="month"]').append(newOption);
}
for (let i = 1; i <= 31; i++) {
  let newOption = document.createElement("option");
  newOption.value = `${i}`;
  newOption.innerHTML = `${i}`;
  document.querySelector('[name="day"]').append(newOption);
}
// copyright
let date = new Date();
date = date.getFullYear();
document.querySelector("footer p span").innerHTML = date;
