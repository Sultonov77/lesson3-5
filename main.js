// Registratsiya button tugmasi
const btn = document.querySelector(".header__right");
const button = document.createElement("button");
button.textContent = "Регистрация";
button.style.fontSize = "20px";
button.style.backgroundColor = "#230E2B";
button.style.borderRadius = "35px";
button.style.height = "42px";
button.style.margin = " 12px";
button.style.width = "180px";
button.style.border = "solid 1px red";
button.style.color = "white";
button.addEventListener("click", function1);
function function1(a) {
  button.style.color = "yellow";
  button.style.border = " solid 1px yellow";
}
btn.append(button);
// ================================
// Footerdagi website haqida malumotlar linki
const links = document.querySelector(".footer__list");
const list = document.createElement("li");
const link = document.createElement("a");
link.setAttribute("href", "https://znakomstva.com");
link.setAttribute("target", "_blank");
link.textContent = "О нас";
link.style.color = "white";
link.style.fontSize = "16px";
link.style.textDecoration = "none";
list.style.listStyleType = "none";
list.append(link);
links.append(list);
// =================================
const list1 = document.createElement("li");
const link1 = document.createElement("a");
link1.setAttribute("href", "https://znakomstva.com");
link1.setAttribute("target", "_blank");
link1.textContent = "Поддержка";
link1.style.color = "white";
link1.style.fontSize = "16px";
link1.style.textDecoration = "none";
list1.style.listStyleType = "none";
list1.append(link1);
links.append(list1);
// ==================================
const list2 = document.createElement("li");
const link2 = document.createElement("a");
link2.setAttribute("href", "https://znakomstva.com");
link2.setAttribute("target", "_blank");
link2.textContent = "Советы";
link2.style.color = "white";
link2.style.fontSize = "16px";
link2.style.textDecoration = "none";
list2.style.listStyleType = "none";
list2.append(link2);
links.append(list2);
// =================================
const list3 = document.createElement("li");
const link3 = document.createElement("a");
link3.setAttribute("href", "https://znakomstva.com");
link3.setAttribute("target", "_blank");
link3.textContent = "Контакты";
link3.style.color = "white";
link3.style.fontSize = "16px";
link3.style.textDecoration = "none";
list3.style.listStyleType = "none";
list3.append(link3);
links.append(list3);
// =================================
const list4 = document.createElement("li");
const link4 = document.createElement("a");
link4.setAttribute("href", "https://znakomstva.com");
link4.setAttribute("target", "_blank");
link4.textContent = "Контакты";
link4.style.color = "white";
link4.style.fontSize = "16px";
link4.style.textDecoration = "none";
list4.style.listStyleType = "none";
list4.append(link4);
links.append(list4);
// ================================
const list5 = document.createElement("li");
const link5 = document.createElement("a");
link5.setAttribute("href", "https://znakomstva.com");
link5.setAttribute("target", "_blank");
link5.textContent = "Правила оплаты";
link5.style.color = "white";
link5.style.fontSize = "16px";
link5.style.textDecoration = "none";
list5.style.listStyleType = "none";
list5.append(link5);
links.append(list5);
// ================================
const list6 = document.createElement("li");
const link6 = document.createElement("a");
link6.setAttribute("href", "https://znakomstva.com");
link6.setAttribute("target", "_blank");
link6.textContent = "RU";
link6.style.color = "white";
link6.style.fontSize = "16px";
link6.style.textDecoration = "none";
list6.style.listStyleType = "none";
list6.append(link6);
links.append(list6);
// ================================
const list7 = document.createElement("li");
const link7 = document.createElement("a");
link7.setAttribute("href", "https://znakomstva.com");
link7.setAttribute("target", "_blank");
link7.textContent = "© Company 2021";
link7.style.color = "white";
link7.style.fontSize = "16px";
link7.style.textDecoration = "none";
list7.style.listStyleType = "none";
list7.append(link7);
links.append(list7);
// ===================================
// Finish
