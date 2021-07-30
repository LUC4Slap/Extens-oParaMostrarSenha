let input = document.querySelectorAll("input[type='password']");
let time = setTimeout(() => {
  if (input) {
    clearTimeout(time);
    input.forEach(val => {
      val.type = "text";
    })
  }
}, 1000);
