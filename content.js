let input = document.querySelectorAll("input[type='password']");
let time = setTimeout(() => {
  if (input) {
    clearTimeout(time);
    input[0].type = "text";
  }
}, 1000);
