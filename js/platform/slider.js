function make_slider() {
    let switches_buttons = document.querySelector(".catalog .courses_switches")

    let slider = document.querySelector(".catalog .slider")
    slider.style.transform = "translateX(0)"

    let slides = document.querySelectorAll(".catalog .slider .slide")

    for (let i = 0; i < slides.length; i++) {
        let el = document.createElement("span")
        el.innerText = slides[i].dataset.course
        switches_buttons.append(el)

        el.addEventListener("click", function () {
            slider.style.transform = `translateX(${-100*i}%)`
            let prev_active = switches_buttons.querySelector(".active")
            prev_active.classList.remove("active")
            el.classList.add("active")
        })
    }
    switches_buttons.children[0].classList.add("active")
}
make_slider()