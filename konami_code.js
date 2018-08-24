window.onload = function (e){
  console.log("window.onload");


  const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

  function init() {
    // Write your JavaScript code inside the init() function
    console.log("== init ==");

    let bodyArray = document.getElementsByTagName("body");
    console.log("bodyArray:", bodyArray);

    bodyArray[0].addEventListener("keydown", onKeyDownHandler);

    function onKeyDownHandler(e) {
      console.log('== onKeyDownHandler ==')

    }
    }
  init();
}
