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

let clouds_N = 10
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
    if (!visible(our_focus_icon)) {
        return false
    }

    our_focus_icon.style.top = `${-(-350 + window.scrollY * our_focus_icon_K)}px`

})




let array = document.querySelectorAll('.clouds img');
let range = 2;

array.forEach((el)=>{
    el.step = Math.ceil(Math.random() * range);
})
let interval = setInterval(swim, 20);
function swim() {
    if (!visible(our_focus)) {
        return
    }
    array.forEach((el) => {
        if (!visible(el)) {
            return false
        }
        let posLeft = parseInt(getComputedStyle(el).left);
        el.style.left = posLeft - el.step + 'px';
        if (posLeft < -el.offsetWidth) {
            el.style.left = el.offsetParent.offsetWidth + el.offsetWidth + 'px';
        }
    })
}








