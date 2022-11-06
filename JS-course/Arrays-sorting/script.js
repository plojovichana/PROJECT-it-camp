var arr = [];

function pushNumber() {
  var num = +document.getElementById("num").value;
  arr.push(num);
  document.getElementById("num").value = "";
}

document.getElementById("num").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    pushNumber();
    console.log(arr);
  }
});

document.getElementById("btn-r").addEventListener("click", function () {
  for (var i = 0; i <= arr.length - 2; i++) {
    for (var j = i + 1; j <= arr.length - 1; j++) {
      if (arr[j] < arr[i]) {
        var pom = arr[i];
        arr[i] = arr[j];
        arr[j] = pom;
      }
    }
  }
  console.log(arr);
});

document.getElementById("btn-o").addEventListener("click", function () {
  for (var i = 0; i <= arr.length - 2; i++) {
    for (var j = i + 1; j <= arr.length - 1; j++) {
      if (arr[j] > arr[i]) {
        var pom = arr[i];
        arr[i] = arr[j];
        arr[j] = pom;
      }
    }
  }
  console.log(arr);
});

