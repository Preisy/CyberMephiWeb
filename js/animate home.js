// pull_ding_dong
function addEL(str) {
    let h = document.body.querySelector(str)
    let h_arr = h.innerText.split("")
    h.innerText = ""

    let arr = []
    for (let i = 0; i < h_arr.length; i++) {
        let span = document.createElement("span")
        if (h_arr[i] == " ") {
            span.innerHTML = "&nbsp;"
        } else {
            span.innerText = h_arr[i]
        }
        h.append(span)
        arr.push(span)
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener("mouseover", function () {
            arr[i].classList.add("pull_ding_dong")
            setTimeout(function () {
                arr[i].classList.remove("pull_ding_dong")
            }, 700)
        })
    }
}
addEL(".home h1")
addEL(".home p")


// parallax
let home = document.body.querySelector(".home_wrapper")

let girl = document.body.querySelector(".home_background")
girl.start_top = 100
girl.style.top = `${girl.start_top}px`
let girl_K = 0.5

let home_icon = document.body.querySelector(".home_text .icon")
// girl.start_top = 100
// girl.style.top = `${el.start_top}px`
// let K = 0.5
let icon_K = 0.2

text_arr = document.querySelectorAll(".home_text div ~ *")
let K_arr = [0.4, 0.3, 0.2, 0.1]
let text_K = 0.5
window.onscroll = function () {
    if (home.getBoundingClientRect().bottom < 0) {
        return
    }
    // el.getBoundingClientRect().top
    girl.style.top = `${girl.start_top + window.scrollY * girl_K}px`

    home_icon.style.transform = `translateY(${-window.scrollY*icon_K}px)`

    for (let i = 0; i < text_arr.length; i++) {
        text_arr[i].style.transform = `translateX(${window.scrollY*text_K*K_arr[i]}px)`
    }
    // home_icon.style.transform = `translateY(px)`
}


// следование девочки за мышкой и увеличение ее

let mousemove_K = 0.03
window.onmousemove = function (event) {
    // следование
    if (home.getBoundingClientRect().bottom < 0) {
        return
    }

    let mouse_coords = [event.clientX, event.clientY]

    let girl_center_coords = [0, 0]
    let girl_client_rect = girl.getBoundingClientRect()
    girl_center_coords[0] = (girl_client_rect.right - girl_client_rect.left) / 2 + girl_client_rect.left
    girl_center_coords[1] = (girl_client_rect.bottom - girl_client_rect.top) / 2 + girl_client_rect.top

    let offset = [0, 0]
    offset[0] = (mouse_coords[0] - girl_center_coords[0])*mousemove_K
    offset[1] = (mouse_coords[1] - girl_center_coords[1])*mousemove_K
    girl.style.transform = `translate(${offset[0]}px, ${offset[1]}px)`

    // увеличение
    girl_coords = [girl_client_rect.top + 95,
        girl_client_rect.right,
        girl_client_rect.bottom,
        girl_client_rect.left]

    let r = Math.sqrt(Math.pow(mouse_coords[0] - girl_center_coords[0], 2) +
        Math.pow(mouse_coords[1] - girl_center_coords[1], 2))

    let value = -1/2210 * r + 11/10
    if (value < 1) {
        value = 1
    }
    console.log(r)
    girl.children[0].style.transform = `scale(${value})`
}