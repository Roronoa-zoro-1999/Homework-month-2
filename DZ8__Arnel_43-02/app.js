let inps = document.querySelectorAll("input")
let right = document.querySelector(".right")
let left = document.querySelector(".left")

let ff = ()=> {
    for (let i = 0; i < inps.length; i++) {
        inps[i].oninput = () => {
            console.log(inps[i])
            if (i === 0) {
                right.style.backgroundColor = inps[i].value
            } else if (i === 1) {
                left.style.backgroundColor = inps[i].value
            }
        }
    }
}

ff()