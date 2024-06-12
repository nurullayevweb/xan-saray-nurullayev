var elMenuBtn = document.querySelector(".js-menu-btn");
var elSiteHeader = document.querySelector(".xan-open");
elMenuBtn.addEventListener("click", function(){
  elSiteHeader.classList.toggle("flex");
  document.body.classList.toggle("overflow-hidden");
});
var elMenuBtn = document.querySelector(".js-menu-btn");
var elSiteHeader = document.querySelector(".xan-open");
elMenuBtn.addEventListener("click", function(){
  elSiteHeader.classList.remove("hidden");
});

var elMenuBtn = document.querySelector(".js-menu-btn-two");
var elSiteHeader = document.querySelector(".xan-open");
elMenuBtn.addEventListener("click", function(){
  elSiteHeader.classList.toggle("hidden");
  elSiteHeader.classList.remove("flex");
});