/// <reference types="../@types/jquery" />

// console.log(menuswidth);

$(".open").on("click", function () {
  let menuswidth = $(".menus").outerWidth();
  $(".menus").animate({ left: "0px" }, 500);
  $(".homecontent").animate({ left: `10px` }, 500);
  $(".open").animate({ left: `${menuswidth + 10}` }, 500);
});

$(".menus i").on("click", function () {
  $(".menus").animate({ left: "-245px" }, 500);
  $(".homecontent").animate({ left: `0px` }, 500);
  $(".open").animate({ left: `10px` }, 500);
  $("html").animate({ scrollTop: "0" }, 0);
});
$(".menus a").on("click", function (e) {
  let aHref = $(e.target).attr("href");
  let section = $(aHref).offset().top;
  $("html").animate({ scrollTop: section }, 2000);
});

// --------------------------------------------------

// DETAILS----------------------------

$("#s1").on("click", function () {
  $("#p1").slideToggle(500);
  $("#p2,#p3,#p4").slideUp(500);
});

$("#s2").on("click", function () {
  $("#p2").slideToggle(500);
  $("#p1,#p3,#p4").slideUp(500);
});

$("#s3").on("click", function () {
  $("#p3").slideToggle(500);
  $("#p1,#p2,#p4").slideUp(500);
});

$("#s4").on("click", function () {
  $("#p4").slideToggle(500);
  $("#p1,#p2,#p3").slideUp(500);
});

// --------------------------------------------------

// Duration--------------------------------
let day = document.getElementById("day");
let hour = document.getElementById("hours");
let min = document.getElementById("mins");
let sec = document.getElementById("sec");

let comingdate = new Date("Oct 10, 2024 00:00:00").getTime();

let interval = setInterval(function () {
  let now = new Date().getTime();
  let countdown = comingdate - now;

  let days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let mins = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
  let secs = Math.floor((countdown % (1000 * 60)) / 1000);

  day.innerHTML = -days + " D";
  hour.innerHTML = hours + " H";
  min.innerHTML = mins + " M";
  sec.innerHTML = secs + " S";

  if (countdown == 0) {
    clearInterval(interval);
    day.innerHTML = 0 + " D";
    hour.innerHTML = 0 + " H";
    min.innerHTML = 0 + " M";
    sec.innerHTML = 0 + " S";
  }
});

// ----------------------------------------------------------------------------

// --------------------------------------------------

// CONTACT----------------------------
$("form").on("submit", function (e) {
  e.preventDefault();
});

$("#textArea").on("input", function (e) {
  let textArea = document.getElementById("textArea").value;
  let spancount = 100 - textArea.length;
  $("#spancount").html(spancount);
});
