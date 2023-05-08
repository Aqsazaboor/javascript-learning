var inti;
function submit() {
  var inti = document.getElementById("input").value;
  var usr = parseInt(inti);
  if (usr <= 0) {
    document.getElementById("ans").innerHTML = "Enter Positive Number";
    //alert("enter positive number");
  } else {
    var arr = [];
    for (var i = 0; i < 3; i++) {
      arr[i] = usr + 2;
      usr += 2;
    }
    document.getElementById("ans").innerHTML = arr;
    //alert(arr);
  }
}
