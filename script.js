function pullDown() {}
const pullDownButton = document.getElementById("lists");

pullDownButton.addEventListener('mouseover', function(){
    this.setAttribute("style", "background-color:blue;")
    console.log("オン")
})
pullDownButton.addEventListener('mouseout', function(){
    this.setAttribute("style", "background-color:red;")
    console.log("アウト")
})
pullDownButton.addEventListener('click', function(){
    this.setAttribute("style", "background-color:green;")
    console.log("プッシュ")
})

const pullDownParents = document.getElementById("pull-down");

pullDownButton.addEventListener('click', function() {
    if (pullDownParents.getAttribute("style") == "display:block;"){
        pullDownParents.removeAttribute("style", "display:block;")
        console.log("非表示")
    } else {
        pullDownParents.setAttribute("style", "display:block;")
        console.log("表示")
    }
})

const pullDownChild = document.querySelectorAll(".pull-down-list")

pullDownChild.forEach(function(list) {
    list.addEventListener('click', function() {
        const value = list.innerHTML
        currentList.innerHTML = value
        console.log(value)
    })
})

const currentList = document.getElementById("current-list")

window.addEventListener('load', pullDown)