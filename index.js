// Your code here

let dodgers = document.getElementById('dodger')

function moveDodgerLeft() { 
    let leftnumbers = dodgers.style.left.replace("px", "");
    let left = parseInt(leftnumbers, 10)
    if (left > 0){ 
        dodger.style.left = `${left - 1}px`
    }
}

function moveDodgerRight() { 
    let leftnumbers = dodger.style.left.replace("px", '')
    let left = parseInt(leftnumbers, 10)
    if (left < 360) { 
        dodger.style.left = `${left + 1}px`
    }
}

document.addEventListener("keydown",  function(e) { 
    if (e.key === "ArrowLeft") { 
        moveDodgerLeft()
    }
})

document.addEventListener("keydown", function(e) { 
    if (e.key === "ArrowRight") { 
        moveDodgerRight
    }
})