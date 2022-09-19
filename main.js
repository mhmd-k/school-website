// navbar
document.querySelector(".menu").onclick = function (menu) {
  menu.stopPropagation();
  if (document.querySelector(".nav-bar").classList.contains("open")) {
    document.querySelector(".nav-bar").classList.remove("open");
  } else {
    document.querySelector(".nav-bar").classList.add("open");
  }
};
document.addEventListener("click", (e) => {
  document.querySelector(".nav-bar").classList.remove("open");
});
// download buttons
let download = document.querySelectorAll(".download");
download.forEach((e) => {
  e.addEventListener("click", function (ele) {
    ele.preventDefault();
    document.getElementById("register").scrollIntoView({ behavior: "smooth" });
    document.querySelector("#username").focus();
    document.querySelector(".message").classList.add("opened-message");
    let n = setInterval(() => {
      document.querySelector(".message").classList.remove("opened-message");
      clearInterval(n);
    }, 8000);
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
document.querySelector("footer .copyright p span").innerHTML =
  new Date().getFullYear();
// translation
let translateBtn = document.querySelector("header ul li a.translate");
let allElements = document.querySelectorAll("*");
let language = "arabic";
translateBtn.addEventListener("click", (a) => {
  a.preventDefault();
  if (language === "english") {
    translate("english");
    language = "arabic";
  } else if (language === "arabic") {
    translate("arabic");
    language = "english";
  }
});
function translate(lang) {
  fetch(`langueges/${lang}.json`)
    .then((results) => results.json())
    .then((results) => {
      for (let result in results) {
        allElements.forEach((element) => {
          if (element.hasAttribute("data-lang")) {
            if (result === element.getAttribute("data-lang")) {
              element.innerHTML = results[result];
            }
          }
        });
      }
    });
  document.querySelector("html").setAttribute("lang", `${lang[0]}${lang[1]}`);
  window.localStorage.setItem("language", `${lang}`);
  if (lang === "arabic") {
    document.forms[0].setAttribute("dir", "rtl");
    document.querySelector("html").setAttribute("dir", "rtl");
    document
      .querySelector("input#username")
      .setAttribute("placeholder", "مثال: نور مرزوق");
    document.querySelector("input[type='tel']").style.textAlign = "right";
    document
      .querySelector("#country")
      .setAttribute("placeholder", "مثال: سوريا");
    document.querySelector("#city").setAttribute("placeholder", "مثال: دمشق");
    document
      .querySelector("input[type='submit']")
      .setAttribute("value", "تسجيل");
    document.querySelectorAll("ol").forEach((e) => {
      e.setAttribute("dir", "rtl");
    });
    document.querySelectorAll("ol li").forEach((e) => {
      e.style.setProperty("text-align", "right");
    });
    document.title = "مدرسة سما";
  } else {
    document.forms[0].setAttribute("dir", "ltr");
    document.querySelector("html").setAttribute("dir", "ltr");
    document
      .querySelector("input#username")
      .setAttribute("placeholder", "Ex: Nour Marzoq");
    document.querySelector("input[type='tel']").style.textAlign = "left";
    document.querySelector("#country").setAttribute("placeholder", "Ex: Syria");
    document.querySelector("#city").setAttribute("placeholder", "Ex: Damascus");
    document
      .querySelector("input[type='submit']")
      .setAttribute("value", "Sign in");
    document.querySelectorAll("ol").forEach((e) => {
      e.setAttribute("dir", "ltr");
    });
    document.querySelectorAll("ol li").forEach((e) => {
      e.style.setProperty("text-align", "left");
    });
    document.title = "Sama School";
  }
}
if (window.localStorage.getItem("language") === "arabic") {
  translate("arabic");
  language = "english";
} else {
  translate("english");
  language = "arabic";
}
// srvices cursor animation
let servicesCircle = document.querySelector(
  ".services .container .box:first-of-type .circle"
);

document.querySelectorAll(".services .container .box .circle").forEach((e) => {
  e.addEventListener("mouseenter", () => {
    document.querySelector(".services .container .box i").remove();
    document
      .querySelector(".services .container .box:first-of-type .circle")
      .classList.remove("active");
  });
});
