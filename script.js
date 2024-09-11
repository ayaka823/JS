window.alert("オブジェクトの取得に成功")
const element = document.getElementById("list1");
console.log(element);

const pullDownButton = document.getElementById("lists");
pullDownButton.onmouseover = function() {
    console.log("オン");
};
pullDownButton.onmouseout = function() {
    console.log("アウト");
};
pullDownButton.onclick = function() {
    console.log("プッシュ");
};
pullDownButton.addEventListener('mouseover', function(){
    pullDownButton.setAttribute("style", "background-color:blue;")
})
pullDownButton.addEventListener('mouseout', function(){
    pullDownButton.setAttribute("style", "background-color:red;")
})
pullDownButton.addEventListener('click', function(){
    pullDownButton.setAttribute("style", "background-color:green;")
})