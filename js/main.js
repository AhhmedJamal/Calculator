let buttons = document.querySelectorAll(".button");
let display = document.getElementById("display");
let equal = document.getElementById("equal");
let operator = ["/", "*", "-", "+"];

// loop on all button
for (let btn of buttons) {
  btn.addEventListener("click", () => {
    display.value += btn.value;
    for (let i = 0; i < operator.length; i++) {
      if (btn.innerHTML == operator[i])
        if (display.value.charAt(display.value.length - 1) !== operator[i])
          display.value += btn.innerHTML;
    }
    if (btn.innerHTML == "AC") display.value = "";
    else if (btn.innerHTML == "DE") display.value = display.value.slice(0, -1);
    else
      equal.onclick = () => {
        try {
          display.value = eval(display.value);
        } catch {
          display.value = "Error";
          setTimeout(() => {
            display.value = "";
          }, 1000);
        }
      };
  });
}
