window.onload = function () {

  var btnReload = document.querySelector('.btnReload');
  btnReload.onclick = function() {
    window.location.reload();
  }

  function startTimer() {
    var my_timer = document.querySelector(".timer");
    var time = my_timer.getAttribute('data-mytimer');
    var arr = time.split(":");
    var m = arr[0];
    var s = arr[1];

    if (s == 0) {
      if (m == 0) {
          alert("Время вышло");
          window.location.reload();
          return;
      }
      m--;
      if (m < 10) m = "0" + m;
      s = 59;
    }
    else s--;
    if (s < 10) s = "0" + s;
    my_timer.dataset.mytimer =  m + ":" + s;
    document.querySelector(".timer").innerHTML = m + " : " + s;
    setTimeout(startTimer, 1000);
  }

  startTimer();
}