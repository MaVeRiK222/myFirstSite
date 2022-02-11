console.clear();
document.querySelector(".calcbutton").onclick = calcClick;

function calcClick() {
  let xsquare = document.querySelector(".xsquare").value;
  let x = document.querySelector(".x").value;
  let empty = document.querySelector(".empty").value;

  if (Number(xsquare) === 0) {
    alert("Первый коэффицинт = 0");
    return;
  }

  let d = Number(x) ** 2 - 4 * Number(xsquare) * Number(empty);

  //console.log(Number(d));
  //console.log(Number(x));
  //console.log(Number(xsquare));
  //console.log(Number(empty));

  if (d > 0) {
    let x1 = (-Number(x) + Math.sqrt(d)) / (2 * Number(xsquare));
    let x2 = (-Number(x) - Math.sqrt(d)) / (2 * Number(xsquare));
    //alert([ "Первый корень = " + String(x1) + "\n" + "Второй корень = " + String(x2) ]);
    //alert(x2);
    document.querySelector(".output").innerHTML =
      "Первый корень = " +
      String(x1) +
      "<br>" +
      "Второй корень = " +
      String(x2);
  }

  if (d === 0) {
    let x3 = -Number(x) / (2 * Number(xsquare));

    document.querySelector(".output").innerHTML =
      "Корень равен = " + String(x3);
  }

  if (d < 0) {
    document.querySelector(".output").innerHTML = "Корней нет";
  }
}

//calcbutton.addEventListener("click", function () {
//  console.log(xsquare);
//});
