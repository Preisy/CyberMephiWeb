

addEL(".our_focus h2")


// parallax
let our_focus = document.body.querySelector(".our_focus_wrapper")

let our_focus_icon = document.body.querySelector(".our_focus_background")
our_focus_icon.start_top = 0
our_focus_icon.style.top = `${our_focus_icon.start_top}px`
let our_focus_icon_K = 0.2

window.addEventListener('scroll', function () {
    // if () {
    //     return
    // }

    our_focus_icon.style.top = `${-(-350 + window.scrollY * our_focus_icon_K)}px`

})


let clouds = document.querySelector('.clouds')

let clouds_N = 10
let clouds_size = [90, 160]
// let clouds_size = [50, 160]

for (let i = 0; i < clouds_N; i++) {
    let el = document.createElement("img")
    el.src = 'svg/cloud.svg'
    el.style.top = `${getRandomInt(our_focus.offsetHeight - 200)}px`
    el.style.left = `${getRandomInt(our_focus.offsetWidth - 200)}px`

    if (i < clouds_N * 0.5) {
        el.style.width = `${clouds_size[0]}px`
        el.style.height = `${clouds_size[0]}px`
    } else {
        el.style.width = `${clouds_size[1]}px`
        el.style.height = `${clouds_size[1]}px`
    }
    // } else {
    //     // el.style.width = `${clouds_size[0]}`
    //     // el.style.height = `${clouds_size[0]}`
    // }

    clouds.append(el)

}




















