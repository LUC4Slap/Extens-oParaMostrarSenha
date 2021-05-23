let input = document.querySelector("input[type='password']");
let time = setTimeout(() => {
  if (input) {
    clearTimeout(time);
    input.type = "text";
  }
}, 1000);
