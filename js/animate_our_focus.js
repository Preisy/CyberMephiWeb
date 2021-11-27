function visible(el) {
    el = el.getBoundingClientRect()
    let t = el.top;
    let b = el.bottom;

    return t - document.documentElement.clientHeight < 0 && b > 0;
}


// pull-ding-dong
addEL(".our_focus h2")




let our_focus = document.body.querySelector(".our_focus_wrapper")

// clouds
let clouds = document.querySelector('.clouds')

let clouds_N = 20
let clouds_size = [90, 160]
let min_duration = [100, 150]
let max_duration = [150, 200]

for (let i = 0; i < clouds_N; i++) {
    // let wrapper = document.createElement("div")
    // wrapper.classList.add("cloud_wrapper")
    let el = document.createElement("img")
    // wrapper.append(el)
    el.src = 'svg/cloud.svg'
    el.style.top = `${getRandomInt(0, our_focus.offsetHeight - 200)}px`
    el.style.left = `${getRandomInt(0, our_focus.offsetWidth - 200)}px`

    if (i < clouds_N * 0.5) {
        el.style.width = `${clouds_size[0]}px`
        el.style.height = `${clouds_size[0]}px`
        // wrapper.style.animationDuration = `${getRandomInt(min_duration[0], max_duration[0])}s`
    } else {
        el.style.width = `${clouds_size[1]}px`
        el.style.height = `${clouds_size[1]}px`
        // wrapper.style.animationDuration = `${getRandomInt(min_duration[1], max_duration[1])}s`
    }

    clouds.append(el)

}






// parallax

let our_focus_icon = document.body.querySelector(".our_focus_background")
our_focus_icon.start_top = 0
our_focus_icon.style.top = `${our_focus_icon.start_top}px`
let our_focus_icon_K = 0.2
window.addEventListener('scroll', function () {
    if (!visible(our_focus)) {
        return false
    }

    our_focus_icon.style.top = `${-(-350 + window.scrollY * our_focus_icon_K)}px`

})






// следование девочки за мышкой и увеличение ее

// let mousemove_K = 0.03
// window.onmousemove = function (event) {
//     // следование
//     // if (home.getBoundingClientRect().bottom < 0) {
//     //     return
//     // }
//
//     let mouse_coords = [event.clientX, event.clientY]
//
//     let girl_center_coords = [0, 0]
//     let girl_client_rect = girl.getBoundingClientRect()
//     girl_center_coords[0] = (girl_client_rect.right - girl_client_rect.left) / 2 + girl_client_rect.left
//     girl_center_coords[1] = (girl_client_rect.bottom - girl_client_rect.top) / 2 + girl_client_rect.top
//
//     let offset = [0, 0]
//     offset[0] = (mouse_coords[0] - girl_center_coords[0]) * mousemove_K
//     offset[1] = (mouse_coords[1] - girl_center_coords[1]) * mousemove_K
//     girl.style.transform = `translate(${offset[0]}px, ${offset[1]}px)`
//
//     // увеличение
//     girl_coords = [girl_client_rect.top + 95,
//         girl_client_rect.right,
//         girl_client_rect.bottom,
//         girl_client_rect.left]
//
//     let r = Math.sqrt(Math.pow(mouse_coords[0] - girl_center_coords[0], 2) +
//         Math.pow(mouse_coords[1] - girl_center_coords[1], 2))
//
//     let value = -1 / 2210 * r + 11 / 10
//     if (value < 1) {
//         value = 1
//     }
//     // console.log(r)
//     girl.children[0].style.transform = `scale(${value})`
// }
//









