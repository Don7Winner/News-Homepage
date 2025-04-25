$(document).ready(() => {
  $("ul").addClass("menu");
  $(".popUp").hide();
  $("#menu-bar").click(() => {
    $("ul").show();
    $(".popUp").show();
  });
  $("#close-btn").click(() => {
    $("ul").hide();
    $(".popUp").hide();
  });
});
