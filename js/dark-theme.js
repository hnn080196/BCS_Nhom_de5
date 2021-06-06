document.getElementById("toggleBtn").onclick = function () {
  var bodyTag = document.getElementById("mybody");
  console.log(bodyTag);
  bodyTag.classList.toggle("dark");
};
