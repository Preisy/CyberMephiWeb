function changeContent(main, el) {
    main.style.opacity = 0
    let node = el.querySelector("main")
    setTimeout(function () {
        let arr = main.children
        for (let i = 0; i < arr.length; i++) {
            arr[i].remove()
        }
        arr = node.children
        for (let i = 0; i < arr.length; i++) {
            main.append(arr[i])
        }

        appendStylesAndScripts(document.querySelector("head"), el)
        main.style.opacity = 1

    }, 150)
}
function checkAvailability(arr, el, checker) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][checker] === el[checker]) {
            return true
        }
    }
    return false
}

function appendStylesAndScripts(head, el) {
    let new_tags = el.head.querySelectorAll("link")
    let tags = head.querySelectorAll("link")
    for (let i = 0; i < new_tags.length; i++) {
        if (!checkAvailability(tags, new_tags[i], "href")) {
            head.append(new_tags[i])
        }
    }

    new_tags = el.head.querySelectorAll("script")
    tags = head.querySelectorAll("script")

    for (let i = 0; i < new_tags.length; i++) {
        let flag = false
        for (let j = 0; j < tags.length; j++) {
            if (new_tags[i].src === tags[j].src) {
                flag = true
                break
            }
        }

        if (new_tags[i].dataset.flag === "1" || !flag) {
            let script = document.createElement('script');
            script.src = new_tags[i].src;
            head.append(script)
        }
    }
}

function changeActive(header, name) {

    let new_active = header.querySelector(`li a[href$="${name}"]`)
    if (new_active == null) {
        return
    }

    let active = header.querySelector(".active")
    if (active != null) {
        active.classList.remove("active")
    }
    new_active.classList.add("active")
    let border = header.querySelector(".active_border")
    border.style.width = `${new_active.clientWidth}px`

    left = new_active.getBoundingClientRect().left - header.querySelector("nav").getBoundingClientRect().left

    border.style.left = `${left}px`
}


function processHeaderLinks() {
    let header = document.querySelector("header")

    let main = document.querySelector("main")

    let li = document.querySelectorAll("header li a")
    // for (let i = 0; i < arr.length; i++) {
    //     li.(arr[i])
    // }

    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener("click", async function (event) {
            event.preventDefault()
            obj = {
                url: li[i].href,
                title: li[i].title,
                file: li[i].getAttribute("data-href")
            }
            if (li[i].href == null) {
                obj = {
                    url: li[i].dataset.href,
                    title: li[i].title,
                    file: li[i].dataset.href
                }
            }

            current_href = new URL(
                document.currentScript && document.currentScript.src || location.href).href
            if (current_href === obj.url) {
                return;
            }

            let template = await (await fetch(obj.url)).text()

            let el = new DOMParser().parseFromString(template, "text/html")

            document.title = el.title

            changeContent(main, el)
            let name = li[i].href.toString().match("\\w+\\.html").pop()
            changeActive(header, name, el)

            history.pushState(obj, obj.title, obj.file)
            setTimeout(function () {
                document.documentElement.scrollTop = 0
            }, 150)

        })
    }
}

function processPopstate() {
    let header = document.querySelector("header")
    let main = document.querySelector("main")


    window.addEventListener("popstate", async function (event) {
        let template = await (await fetch(window.location.href)).text()

        let el = new DOMParser().parseFromString(template, "text/html")

        document.title = el.title

        changeContent(main, el)
        let name = window.location.pathname.toString().match("\\w+\\.html").pop();
        // active_el = header.querySelector(`li a[href$="${name}"]`)

        changeActive(header, name)
    })
}




// подчеркивание в меню

function makeActiveBorder() {
    let header = document.querySelector("header")

    let border = header.querySelector(".active_border")
    let el = header.querySelector(`li a[href$="${window.location.pathname.toString().match("\\w+\\.html").pop()}"]`)
    if (el != null) {

        window.addEventListener("load", function () {
            // let el = header.querySelector(".active")
            el.parentElement.classList.add("active")
            // setStylesForActive(el, border)
            border.style.width = `${el.clientWidth}px`

            left = el.getBoundingClientRect().left - header.querySelector("nav").getBoundingClientRect().left

            border.style.left = `${left}px`

        })
    }
}






processHeaderLinks()
processPopstate()
makeActiveBorder()