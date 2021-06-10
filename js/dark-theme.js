var getThemeElement = document.getElementById("toggleBtn");
getThemeElement.onclick = function () {
  var bodyTag = document.getElementById("mybody");
  console.log(bodyTag);
  bodyTag.classList.toggle("dark");

  // change icon
  getThemeElement.classList.toggle("fa-sun");
};
//<i class="fa fa-sun"></i>
