let searchBox
let counter = 0
let hasClicked = false

function waitForIt() {
    setTimeout(function() {
        counter++
        searchBox = document.querySelector('input.filter-box.input')
        if(!searchBox && counter < 200) waitForIt()
        else {
            searchBox.onblur = function() {
                searchBox.focus()
                if(hasClicked) searchBox.onblur = null
            }
        }
    }, 200)
}

window.onload = function() {
    waitForIt()
}

window.onclick = function() {
    hasClicked = true
}