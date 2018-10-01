$("#input").on("keypress", function(e) {
  var key = e.keyCode;
  // If the user has pressed enter
  if (key == 13) {
    document.getElementById("input").value = "";
    return false;
  } else {
    return true;
  }
});

var textarea = document.getElementById('display');
textarea.scrollTop = textarea.scrollHeight;
}
