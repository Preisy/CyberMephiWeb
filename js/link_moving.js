function clearContent(el) {
    arr = el.children
    for (let i = 0; i < arr.length; i++) {
        arr[i].remove()
    }
}

function insertContent(main, node) {
    arr = node.children
    for (let i = 0; i < arr.length; i++) {
        main.append(arr[i])
    }
}


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

        clearContent(main)
        insertContent(main, el.body.querySelector("main"))

        history.pushState(obj, obj.title, obj.file)
    })
}

window.addEventListener("popstate", async function (event) {
    let template = await (await fetch(window.location.href)).text()

    let el = new DOMParser().parseFromString(template, "text/html")

    document.title = el.title

    clearContent(main)
    insertContent(main, el.body.querySelector("main"))

    console.log(history)
})











