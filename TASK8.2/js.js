let body = document.querySelector('body')
let input = document.createElement('input')
let check1 = document.createElement('h1')
let check2 = document.createElement('h1')
let check3 = document.createElement('h1')
let check4 = document.createElement('h1')
check1.textContent = "lorem, ipsum, dolor"
check2.textContent = "rolod ,muspi ,merol"
check3.textContent = "rolod ,muspi ,merol"
check4.textContent = "lorem, ipsum, dolor"
body.appendChild(check1)
body.appendChild(check2)
body.appendChild(input)
body.appendChild(check3)
body.appendChild(check4)
body.style.display = "flex"
body.style.justifyContent = "space-around"
input.setAttribute('type', 'text')
let flag = false
input.onfocus = function () {
    flag = true
}
input.onblur = function () {
    flag = false
}
input.onkeydown = function (event) {
    if (flag == true) {
        const left = input.previousSibling
        const right = input.nextSibling
        if (event.keyCode == 37) {
            // if (left == false || left == null) {
            //     return 
            // } Не работает отмена действий. Не пойму почему
            input.value = left.textContent
            left.remove()
        }
        else if (event.keyCode == 39) {
            input.value = right.textContent
            right.remove()
        }
        else{
            return
        }
    }
    else {
        return
    }
}
