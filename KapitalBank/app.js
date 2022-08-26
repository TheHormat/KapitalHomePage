// Valyuta calc
function currencyConverter(valNum) {
  if (converter.rupees.value <= 0) window.alert("Enter Value Greaterthan 0");
  else {
    document.getElementById("dollar").value = (valNum / 1.702).toFixed(2);
    document.getElementById("euro").value = (valNum / 1.7185).toFixed(2);
  }
}
$("#open-search").click(() => {
  $(".s-container").fadeIn(300, () => {
    $(".demo-1").animate({ opacity: 1, marginTop: 0 });
  });
});
$("#close").click(() => {
  $(".s-container").fadeOut(300, () => {
    $(".demo-1").animate({ opacity: 0, marginTop: -100 });
  });
});
let index = 0;
$("#next1").click(() => {
  index++;
  if (index > 2) {
    index = 0;
  }
  $(".cart ul").removeClass("active");
  $(`.cart ul:eq(${index})`).addClass("active");
});
$("#prev1").click(() => {
  index--;
  if (index < 0) {
    index = 2;
  }
  $(".cart ul").removeClass("active");
  $(`.cart ul:eq(${index})`).addClass("active");
});
