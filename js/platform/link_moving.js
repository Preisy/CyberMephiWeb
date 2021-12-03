function changeContent(main, node) {
    main.style.opacity = 0
    setTimeout(function () {
        let arr = main.children
        for (let i = 0; i < arr.length; i++) {
            arr[i].remove()
        }
        arr = node.children
        for (let i = 0; i < arr.length; i++) {
            main.append(arr[i])
        }
        main.style.opacity = 1

    }, 150)
}

function changeActive(header, new_active) {
    let active = header.querySelector(".active")
    active.classList.remove("active")
    new_active.classList.add("active")
    let border = header.querySelector(".active_border")
    border.style.width = `${new_active.clientWidth}px`

    left = new_active.getBoundingClientRect().left - header.querySelector("ul").getBoundingClientRect().left

    border.style.left = `${left}px`
}


let header = document.querySelector("header")

let main = document.querySelector("main")

let li = document.querySelectorAll("header li a")

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", async function (event) {
        event.preventDefault()
        obj = {
            url: li[i].href,
            title: li[i].title,
            file: li[i].getAttribute("href")
        }

        current_href = new URL(
            document.currentScript && document.currentScript.src || location.href).href
        if (current_href === obj.url) {
            return;
        }

        let template = await (await fetch(obj.url)).text()

        let el = new DOMParser().parseFromString(template, "text/html")

        document.title = el.title

        changeContent(main, el.querySelector("main"))
        changeActive(header, li[i])

        history.pushState(obj, obj.title, obj.file)
    })
}

window.addEventListener("popstate", async function (event) {
    let template = await (await fetch(window.location.href)).text()

    let el = new DOMParser().parseFromString(template, "text/html")

    document.title = el.title

    changeContent(main, el.querySelector("main"))

    let name = window.location.pathname.toString().match("\\w+\\.html").pop();
    active_el = header.querySelector(`li a[href$="${name}"]`)

    changeActive(header, active_el)



    // console.log(history)
})




// подчеркивание в меню


window.addEventListener("load", function () {
    // let el = header.querySelector(".active")
    let border = header.querySelector(".active_border")
    let el = header.querySelector(`li a[href$="${window.location.pathname.toString().match("\\w+\\.html").pop()}"]`)
    el.parentElement.classList.add("active")
    // setStylesForActive(el, border)
    border.style.width = `${el.clientWidth}px`

    left = el.getBoundingClientRect().left - header.querySelector("ul").getBoundingClientRect().left

    border.style.left = `${left}px`

})








